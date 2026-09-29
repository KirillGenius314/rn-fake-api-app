// api for /blog_posts
import apiClient from "./client";

export interface Category{
  id: number;
}

export interface BlogPost{
  id: number;
  title: string;
  content: string;
  category: Category;
  status: string;
}

// GET /blog_posts — получение списка всех постов
export const getBlogPosts = async () => {
  return apiClient.get<BlogPost[]>("/blog_posts");
};

// GET /blog_posts — получение поста по id
export const getPostById = async (id: number) => {
  return apiClient.get<BlogPost>(`/blog_posts/${id}`);
};
