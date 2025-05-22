-- ブログ投稿テーブルにactiveフラグを追加
ALTER TABLE blog_posts ADD COLUMN is_active BOOLEAN DEFAULT 1; 