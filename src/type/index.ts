export interface Blog {
    id: string; // Assuming IDs are strings; adjust if they're numbers
    title: string;
    description: string;
    publish_date: string; // Use a string for dates; consider using Date type if you handle date objects
    author_name: string;
    blog_image: string;
    total_likes: string; // If total_likes should be a number, change this to `number`
  }