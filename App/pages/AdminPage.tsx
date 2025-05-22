import { useState, useEffect } from 'react';
import { BlogEditor } from '../components/BlogEditor';

interface BlogPost {
  id?: number;
  title: string;
  content: string;
  createdAt: Date;
  thumbnail?: string;
  images?: string[];
}

export const AdminPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://blog.haonnoahjp.workers.dev/api/posts');
      if (!response.ok) {
        throw new Error('投稿の取得に失敗しました');
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleSavePost = async (post: BlogPost) => {
    try {
      // 画像のアップロード
      const uploadedImages = await Promise.all(
        (post.images || []).map(async (image) => {
          if (typeof image === 'string' && image.startsWith('data:')) {
            return await uploadImage(image);
          }
          return image;
        })
      );

      const response = await fetch('https://blog.haonnoahjp.workers.dev/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...post,
          images: uploadedImages,
        }),
      });

      if (!response.ok) {
        throw new Error('投稿の保存に失敗しました');
      }

      await fetchPosts();
    } catch (error) {
      console.error('Error saving post:', error);
      throw error;
    }
  };

  const uploadImage = async (file: string): Promise<string> => {
    // TODO: Cloudflare Imagesへのアップロード処理を実装
    // 一時的な実装として、Base64エンコードした画像を返す
    return file;
  };

  const handleHidePost = async (post: BlogPost) => {
    try {
      const response = await fetch(`https://blog.haonnoahjp.workers.dev/api/posts/${post.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ active: false }),
      });

      if (!response.ok) {
        throw new Error('非表示設定に失敗しました');
      }

      await fetchPosts();
      setEditingPost(null);
    } catch (error) {
      console.error('Error hiding post:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">ブログ管理</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {editingPost ? (
          <BlogEditor
            onSave={handleSavePost}
            initialPost={editingPost}
            onCancel={() => setEditingPost(null)}
            onHide={handleHidePost}
          />
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  記事一覧
                </h2>
                <button
                  onClick={() => setEditingPost({ title: '', content: '', createdAt: new Date() })}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  新規作成
                </button>
              </div>
            </div>
            <div className="border-t border-gray-200">
              {posts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">記事がありません</p>
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {posts.map((post) => (
                    <li key={post.id} className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {post.title}
                          </p>
                          <p className="text-sm text-gray-500">
                            {new Date(post.createdAt).toLocaleDateString('ja-JP')}
                          </p>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <button
                            onClick={() => setEditingPost(post)}
                            className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-medium rounded-md px-4 py-2 transition"
                          >
                            編集
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}; 