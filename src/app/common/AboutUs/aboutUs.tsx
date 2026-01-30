import React from "react";
import { Card, Button } from "antd";

const AboutUsPage: React.FC = () => {
  const coreValues = [
    {
      title: "Integrity",
      description:
        "We uphold the highest standards of integrity in all our actions.",
      icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    },
    {
      title: "Innovation",
      description:
        "We drive innovation to empower businesses and inspire growth.",
      icon: "https://cdn-icons-png.flaticon.com/512/2920/2920316.png",
    },
    {
      title: "Customer Focus",
      description:
        "Our customers are our top priority, and we aim to exceed expectations.",
      icon: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
    },
    {
      title: "Collaboration",
      description:
        "We work together, across boundaries, to meet the needs of our customers.",
      icon: "https://cdn-icons-png.flaticon.com/512/463/463574.png",
    },
  ];

  const featuredContent = [
    {
      title: "Award-Winning Solutions",
      description:
        "Recognized globally for our innovative solutions and services.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Global Partnerships",
      description:
        "Collaborating with industry leaders to deliver exceptional results.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "Leveraging the latest technologies to drive business growth.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Empowering Businesses Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 px-6 py-24 text-center text-white">
        <h1 className="mb-4 text-5xl font-extrabold drop-shadow-lg">
          Empowering Businesses Worldwide
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed opacity-90 md:text-xl">
          Our mission is to empower businesses with innovative solutions and
          unparalleled support to achieve their full potential.
        </p>
        <Button
          type="primary"
          size="large"
          className="bg-white px-8 py-3 font-semibold text-indigo-700 shadow-lg hover:bg-gray-100"
          onClick={() => alert("Learn more clicked")}
        >
          Learn More
        </Button>
      </section>

      {/* Our Core Values Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-900">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, idx) => (
            <Card
              key={idx}
              hoverable
              className="flex transform flex-col items-center rounded-xl border-transparent p-8 text-center shadow-md transition-transform hover:scale-105"
              cover={
                <img
                  alt={value.title}
                  src={value.icon}
                  className="mx-auto mb-6 h-16 w-16 hue-rotate-[220deg] invert-[50%] saturate-[400%] sepia-[10%] filter"
                  loading="lazy"
                />
              }
            >
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-gray-50 px-6 py-20">
        <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-900">
          Featured
        </h2>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {featuredContent.map((content, idx) => (
            <Card
              key={idx}
              hoverable
              className="overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-2xl"
              cover={
                <img
                  alt={content.title}
                  src={content.image}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
              }
            >
              <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                {content.title}
              </h3>
              <p className="leading-relaxed text-gray-700">
                {content.description}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
