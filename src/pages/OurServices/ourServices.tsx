import { Card } from "antd";
import {
  CheckCircleOutlined,
  CodeOutlined,
  MobileOutlined,
  CloudOutlined,
  BulbOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";

const services = [
  {
    key: 1,   
    title: "Web Development",
    description:
      "Build modern, responsive websites with cutting-edge technologies.",
    icon: <CodeOutlined className="text-4xl text-blue-500" />,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  },
  {
    key: 2,
    title: "Mobile Development",
    description: "Create seamless mobile apps for iOS and Android platforms.",
    icon: <MobileOutlined className="text-4xl text-green-500" />,
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    key: 3,
    title: "UI/UX Design",
    description: "Design user-friendly and visually appealing interfaces.",
    icon: <CheckCircleOutlined className="text-4xl text-purple-500" />,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    key: 4,
    title: "Cloud Solutions",
    description:
      "Leverage the power of cloud to scale and secure your applications.",
    icon: <CloudOutlined className="text-4xl text-indigo-500" />,
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    key: 5,
    title: "Data Analytics",
    description:
      "Transform your data into actionable insights with advanced analytics.",
    icon: <DatabaseOutlined className="text-4xl text-orange-500" />,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
  {
    key: 6,
    title: "Innovation & Strategy",
    description:
      "Empower your business with innovative strategies and solutions.",
    icon: <BulbOutlined className="text-4xl text-yellow-500" />,
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
];

const OurServices = () => (
  <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 px-4 py-12 dark:bg-gray-900 md:px-20">
    <h2 className="mb-10 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
      Our Services
    </h2>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <Card
          key={service.key}
          className="group rounded-xl border-none bg-white/70 shadow-xl ring-1 ring-blue-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800 dark:ring-gray-700"
          bordered={false}
        >
          <div className="flex flex-col items-center">
            <img
              src={service.image}
              alt={service.title}
              className="mb-4 h-28 w-28 rounded-full border-4 border-white object-cover shadow-md transition-all group-hover:ring-4 group-hover:ring-blue-300"
            />
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-center text-xl font-bold text-gray-800 dark:text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-center text-base text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

export default OurServices;
