import React from 'react';
import { Typography, Avatar } from 'antd';

interface Author {
  name: string;
  avatarUrl: string;
}
interface Blog {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  author: Author;
  date: string;
  readTime: number; // in minutes
}
// const blogs = [
//   {
//     id: 1,
//     image:
//       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
//     title: "MSP Business Overview",
//     description:
//       "As an MSP, you're handling complex environments with multiple clients, ensuring security and productivity across the board.",
//     author: "Alice Johnson",
//     authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
//     category: "Business",
//   },
//   {
//     id: 2,
//     image:
//       "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
//     title: "Securing Client Networks",
//     description: "Implement the latest security protocols to safeguard client data and prevent breaches effectively.",
//     author: "Mark Thompson",
//     authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
//     category: "Security",
//   },
//   {
//     id: 3,
//     image:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
//     title: "Maximizing Productivity",
//     description: "Strategies to boost productivity by leveraging the right tools and technologies for your clients.",
//     author: "Sophia Lee",
//     authorAvatar: "https://randomuser.me/api/portraits/women/68.jpg",
//     category: "Productivity",
//   },
// ];
const blogs: Blog[] = [
  {
    id: '1',
    title: 'MSP Business Overview',
    description: "As an MSP, you're handling complex environments with multiple clients, ensuring security and productivity across the board.",
    imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1706&q=80',
    category: 'Business',
    author: { name: 'Alice Johnson', avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg' },
    date: 'August 02, 2025',
    readTime: 7,
  },
  {
    id: '2',
    title: 'Securing Client Networks',
    description: 'Implement the latest security protocols to safeguard client data and prevent breaches effectively.',
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Security',
    author: { name: 'Mark Thompson', avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg' },
    date: 'July 30, 2025',
    readTime: 6,
  },
  {
    id: '3',
    title: 'Maximizing Productivity',
    description: 'Strategies to boost productivity by leveraging the right tools and technologies for your clients.',
    imageUrl: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    category: 'Productivity',
    author: { name: 'Sophia Lee', avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg' },
    date: 'July 27, 2025',
    readTime: 5,
  },
   {
    id: '4',
    title: 'An Introduction to Ant Design System',
    description: 'A comprehensive look at Ant Design, exploring its philosophy, core components, and how it can streamline your development workflow.',
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'UI Kits',
    author: { name: 'Chris Lee', avatarUrl: 'https://i.pravatar.cc/150?u=chris_lee' },
    date: 'July 25, 2025',
    readTime: 7,
  },
];

const BlogPage: React.FC = () => {
  const [ ...otherBlogs] = blogs;
  return (
   <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <Typography.Title level={2} className="text-center !font-extrabold !text-gray-800">
            Our Blogs
          </Typography.Title>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {otherBlogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
  );
};

export default BlogPage;


const BlogCard = ({ blog }: { blog: Blog }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
    <div className="overflow-hidden h-56">
      <img
        alt={blog.title}
        src={blog.imageUrl}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-6">
      <p className="text-blue-500 font-semibold text-sm mb-2">{blog.category}</p>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{blog.title}</h3>
      <p className="text-gray-600 text-base mb-6 h-20">{blog.description}</p>
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-3">
          <Avatar src={blog.author.avatarUrl} />
          <div>
            <p className="font-semibold block text-sm text-gray-800">{blog.author.name}</p>
            <p className="text-gray-500 text-xs">{blog.date}</p>
          </div>
        </div>
        <p className="text-gray-500 text-xs">{blog.readTime} min read</p>
      </div>
    </div>
  </div>
);