<div className="text-gray-500 text-sm">
  {new Date(post.created_at).toLocaleString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })}
</div> 