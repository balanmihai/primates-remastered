export interface Post {
  title: string;
  overview: string;
  content: any;
  _id: string;
  image: string;
  slug: {
    current: string;
  };
  _createdAt: string;
}
