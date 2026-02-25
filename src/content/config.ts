// src/content/config.ts
import { z, defineCollection } from 'astro:content';

// ブログ記事のルール（スキーマ）を定義
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), // 記事のタイトル（文字列）
    pubDate: z.date(), // 公開日（日付）
    eyecatch: z.string(), // アイキャッチ画像のURL（文字列）
    tags: z.array(z.string()), // タグ（文字列の配列）
    isRecommended: z.boolean().default(false), // おすすめ記事フラグ（デフォルトはfalse）
  }),
});

// 定義したコレクションをエクスポート
export const collections = {
  'blog': blogCollection,
};