import { useState, useEffect } from 'react';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  thumbnail_url: string | null;
  images: string[];
  created_at: string;
  active: boolean;
}

const API_URL = window.location.hostname.includes('localhost') || window.location.hostname.includes('127.0.0.1')
  ? 'https://blog.haonnoahjp.workers.dev/api'  // 開発環境
  : 'https://blog.haonnoahjp.workers.dev/api';  // 本番環境も同じエンドポイントを使用

export const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    console.log('Current hostname:', window.location.hostname);
    console.log('Current URL:', window.location.href);
    console.log('Using API URL:', API_URL);

    const fetchPosts = async () => {
      try {
        console.log('Fetching from:', `${API_URL}/posts`);
        const response = await fetch(`${API_URL}/posts`);
        if (!response.ok) {
          throw new Error(`投稿の取得に失敗しました: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Received data:', data);
        const activePosts = data.filter((post: BlogPost) => post.active !== false);
        console.log('Active posts:', activePosts);
        setPosts(activePosts);
      } catch (error) {
        console.error('投稿の取得に失敗しました:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-500">読み込み中...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center">
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">記事がありません</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {posts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 aspect-square flex flex-col"
                onClick={() => handlePostClick(post)}
              >
                {post.thumbnail_url ? (
                  <div className="relative w-full h-2/3">
                    <img
                      src={post.thumbnail_url}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-2/3 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">No Image</span>
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {new Date(post.created_at).toLocaleString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        timeZone: 'Asia/Tokyo'
                      })}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* モーダル */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedPost.title}</h2>
                  <button
                    onClick={handleCloseModal}
                    className="text-gray-900 hover:text-gray-600 focus:outline-none transition-colors duration-200 bg-white rounded-full p-1"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-500 text-sm mb-6">
                  {new Date(selectedPost.created_at).toLocaleString('ja-JP', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZone: 'Asia/Tokyo'
                  })}
                </p>
                <div className="prose max-w-none">
                  {selectedPost.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`投稿画像 ${index + 1}`}
                      className="w-full h-auto mb-4 rounded-lg"
                    />
                  ))}
                  <p className="whitespace-pre-wrap">{selectedPost.content}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 