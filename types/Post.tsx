export default interface Post {
  id: number;
  title: string;
  message: string;
  comments: Comment[];
  createdAt: Date;
}
