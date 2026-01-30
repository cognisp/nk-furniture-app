import { Avatar } from "antd";

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

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="h-56 overflow-hidden">
        <img
          alt={blog.title}
          src={blog.imageUrl}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <p className="mb-2 text-sm font-semibold text-blue-500">
          {blog.category}
        </p>
        <h3 className="mb-3 text-xl font-bold text-gray-900">{blog.title}</h3>
        <p className="mb-6 h-20 text-base text-gray-600">{blog.description}</p>
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center space-x-3">
            <Avatar src={blog.author.avatarUrl} />
            <div>
              <p className="block text-sm font-semibold text-gray-800">
                {blog.author.name}
              </p>
              <p className="text-xs text-gray-500">{blog.date}</p>
            </div>
          </div>
          <p className="text-xs text-gray-500">{blog.readTime} min read</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
