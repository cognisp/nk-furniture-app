import React from "react";
import { Card, Button, Avatar, Input, Tag } from "antd";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { FiSend } from "react-icons/fi"; // Using react-icons for a modern icon


// Enhanced data structure for more informative cards
const featuredNews = {
  image:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
  title: "Global Tech Leaders Launch AI Ethics Consortium",
  description:
    "A landmark initiative to establish ethical guidelines for the future of artificial intelligence, ensuring transparency and accountability.",
  avatar: "https://randomuser.me/api/portraits/men/11.jpg",
  category: "Technology",
};

const trendingNews = [
  {
    image:
      "https://images.unsplash.com/photo-1554224155-1696413565d3?w=800&q=80",
    title: "The Rise of Decentralized Finance (DeFi)",
    description:
      "Exploring how DeFi is reshaping the financial landscape with blockchain technology.",
    category: "Finance",
    date: "Aug 09, 2025",
    readTime: "6 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    title: "Sustainable Innovation: The Future of Urban Living",
    description:
      "How smart cities are leveraging green tech to create more sustainable and livable environments.",
    category: "Innovation",
    date: "Aug 08, 2025",
    readTime: "8 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    title: "Streaming Wars: Who Will Dominate the Next Decade?",
    description:
      "An in-depth analysis of the major players in the streaming industry and their strategies for growth.",
    category: "Entertainment",
    date: "Aug 07, 2025",
    readTime: "5 min read",
  },
];

const latestNews = [
  {
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    title: "New Breakthroughs in Quantum Computing Announced",
    author: "Dr. Evelyn Reed",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    title: "A Guide to Investing in Renewable Energy Stocks",
    author: "Marcus Vance",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    title: "The Psychology of User Experience Design",
    author: "Isla Chen",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    title: "How Remote Work is Changing Company Culture",
    author: "David Lee",
  },
];

const newsCategories = [
  "Technology",
  "Finance",
  "Health",
  "Science",
  "Lifestyle",
];

const ModernNewsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* ===== Main Content ===== */}
      <main className="mx-auto max-w-7xl px-4 py-12">
        {/* ===== Hero Section ===== */}
        <section className="relative mb-20 overflow-hidden rounded-xl shadow-lg">
          <img
            src={featuredNews.image}
            alt={featuredNews.title}
            className="h-96 w-full object-cover md:h-[500px]"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-8 text-white md:p-12">
            <Tag color="blue" className="mb-3 w-fit">
              {featuredNews.category}
            </Tag>
            <h1 className="mb-4 text-3xl font-bold leading-tight drop-shadow-md md:text-5xl">
              {featuredNews.title}
            </h1>
            <p className="mb-6 max-w-2xl text-lg drop-shadow-md">
              {featuredNews.description}
            </p>
            <Button
              size="large"
              type="primary"
              className="w-fit font-semibold"
              icon={<ArrowRightOutlined />}
            >
              Read Full Story
            </Button>
          </div>
        </section>

        {/* ===== Trending News Section ===== */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">
            What's Hot 🔥
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {trendingNews.map((news, index) => (
              <Card
                key={index}
                hoverable
                className="group overflow-hidden rounded-lg border-none shadow-md transition-all duration-300 hover:shadow-2xl"
                cover={
                  <div className="overflow-hidden">
                    <img
                      alt={news.title}
                      src={news.image}
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                }
              >
                <Tag color="purple" className="mb-3">
                  {news.category}
                </Tag>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {news.title}
                </h3>
                <p className="mb-4 text-gray-600">{news.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <CalendarOutlined />
                    <span>{news.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockCircleOutlined />
                    <span>{news.readTime}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ===== Latest News & Sidebar Section ===== */}
        <section className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Content: Latest News List */}
          <div className="lg:col-span-2">
            <h2 className="mb-8 text-3xl font-bold text-gray-800">
              Latest Updates
            </h2>
            <div className="space-y-6">
              {latestNews.map((news, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <Avatar size={48} src={news.avatar} />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">
                      {news.title}
                    </h4>
                    <p className="text-sm text-gray-500">{news.author}</p>
                  </div>
                  <Button
                    type="text"
                    shape="circle"
                    icon={<ArrowRightOutlined />}
                    className="text-gray-400 hover:text-blue-600"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Categories Widget */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {newsCategories.map((cat) => (
                  <Tag
                    key={cat}
                    className="cursor-pointer px-3 py-1 text-sm hover:bg-gray-200"
                  >
                    {cat}
                  </Tag>
                ))}
              </div>
            </div>

            {/* Newsletter Widget */}
            <div className="rounded-lg bg-blue-600 p-6 text-white shadow-lg">
              <h3 className="mb-2 text-xl font-bold">Stay Updated</h3>
              <p className="mb-4 text-blue-100">
                Subscribe to our newsletter for the latest news delivered to
                your inbox.
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="your.email@example.com"
                  className="flex-1"
                />
                <Button
                  type="primary"
                  ghost
                  icon={<FiSend className="text-lg" />}
                />
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default ModernNewsPage;
