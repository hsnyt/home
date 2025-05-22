import { D1Database } from '@cloudflare/workers-types';

interface Env {
  DB: D1Database;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    // CORSヘッダー
    const corsHeaders = {
      'Access-Control-Allow-Origin': 'http://localhost:5173',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    };

    // OPTIONSリクエストの処理
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: corsHeaders,
      });
    }

    try {
      // ブログ投稿の作成
      if (path === '/api/posts' && request.method === 'POST') {
        const body = await request.json();
        console.log('Received request body:', body);

        const { title, content, thumbnail, images } = body;

        if (!title || !content) {
          return new Response(JSON.stringify({ error: 'タイトルと本文は必須です' }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }

        try {
          // ブログ投稿を保存
          const result = await env.DB.prepare(
            'INSERT INTO blog_posts (title, content, thumbnail_url) VALUES (?, ?, ?)'
          )
            .bind(title, content, thumbnail || null)
            .run();

          const postId = result.meta.last_row_id;

          // 画像URLを保存
          if (images && images.length > 0) {
            const stmt = env.DB.prepare(
              'INSERT INTO blog_images (post_id, image_url) VALUES (?, ?)'
            );
            for (const imageUrl of images) {
              await stmt.bind(postId, imageUrl).run();
            }
          }

          return new Response(JSON.stringify({ id: postId }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 201,
          });
        } catch (dbError) {
          console.error('Database error:', dbError);
          return new Response(JSON.stringify({ error: 'データベースエラーが発生しました' }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }
      }

      // ブログ投稿の一覧取得
      if (path === '/api/posts' && request.method === 'GET') {
        const posts = await env.DB.prepare(
          'SELECT * FROM blog_posts ORDER BY created_at DESC'
        ).all();

        // 各投稿の画像を取得
        const postsWithImages = await Promise.all(
          posts.results.map(async (post: Record<string, unknown>) => {
            const images = await env.DB.prepare(
              'SELECT image_url FROM blog_images WHERE post_id = ?'
            )
              .bind(post.id)
              .all();
            return {
              ...post,
              images: images.results.map((img: Record<string, unknown>) => img.image_url as string),
            };
          })
        );

        return new Response(JSON.stringify(postsWithImages), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // 個別のブログ投稿取得
      if (path.match(/^\/api\/posts\/\d+$/) && request.method === 'GET') {
        const postId = path.split('/').pop();
        const post = await env.DB.prepare(
          'SELECT * FROM blog_posts WHERE id = ?'
        )
          .bind(postId)
          .first();

        if (!post) {
          return new Response('Not Found', { status: 404 });
        }

        const images = await env.DB.prepare(
          'SELECT image_url FROM blog_images WHERE post_id = ?'
        )
          .bind(postId)
          .all();

        return new Response(
          JSON.stringify({
            ...post,
            images: images.results.map((img: Record<string, unknown>) => img.image_url as string),
          }),
          {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      return new Response('Not Found', { 
        status: 404,
        headers: corsHeaders,
      });
    } catch (error) {
      console.error('Error:', error);
      return new Response(JSON.stringify({ error: 'Internal Server Error', details: error.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  },
}; 