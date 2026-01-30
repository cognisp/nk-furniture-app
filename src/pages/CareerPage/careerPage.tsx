import { Card, Button, List, Avatar, Tooltip, Tag } from "antd";
import {
  UserOutlined,
  CodeOutlined,
  SketchOutlined,
  DatabaseOutlined,
  MobileOutlined,
  SafetyOutlined,
  CloudOutlined,
  TeamOutlined,
  LineChartOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const openPositions = [
  {
    title: "Frontend Developer",
    location: "Remote",
    description:
      "Build and maintain user-facing features using React.js and TypeScript.",
    avatar: (
      <Avatar
        size={48}
        style={{ backgroundColor: "#1890ff" }}
        icon={<CodeOutlined />}
      />
    ),
  },
  {
    title: "Backend Developer",
    location: "San Francisco, USA",
    description: "Develop robust APIs and services with Node.js and Python.",
    avatar: (
      <Avatar
        size={48}
        style={{ backgroundColor: "#52c41a" }}
        icon={<DatabaseOutlined />}
      />
    ),
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    description:
      "Design intuitive user interfaces and seamless user experiences.",
    avatar: (
      <Avatar
        size={48}
        style={{ backgroundColor: "#fadb14" }}
        icon={<SketchOutlined />}
      />
    ),
  },
  {
    title: "Mobile Developer",
    location: "Bangalore, India",
    description: "Create stunning apps for iOS and Android using React Native.",
    avatar: (
      <Avatar
        size={48}
        style={{ backgroundColor: "#eb2f96" }}
        icon={<MobileOutlined />}
      />
    ),
  },
  {
    title: "DevOps Engineer",
    location: "Remote",
    description:
      "Automate workflows, manage cloud infrastructure, and streamline deployments.",
    avatar: (
      <Avatar
        size={48}
        style={{ backgroundColor: "#722ed1" }}
        icon={<CloudOutlined />}
      />
    ),
  },
  {
    title: "QA Engineer",
    location: "Berlin, Germany",
    description:
      "Ensure exceptional quality through rigorous testing and automation.",
    avatar: (
      <Avatar
        size={48}
        style={{ backgroundColor: "#13c2c2" }}
        icon={<SafetyOutlined />}
      />
    ),
  },
  {
    title: "Project Manager",
    location: "Remote",
    description:
      "Lead teams and deliver outstanding results by managing agile projects.",
    avatar: (
      <Avatar
        size={48}
        style={{ backgroundColor: "#fa541c" }}
        icon={<TeamOutlined />}
      />
    ),
  },
  {
    title: "Product Manager",
    location: "London, UK",
    description:
      "Drive product vision, prioritize features, and work closely with engineers and designers.",
    avatar: (
      <Avatar
        size={48}
        style={{ backgroundColor: "#ffec3d" }}
        icon={<LineChartOutlined />}
      />
    ),
  },
  {
    title: "Technical Writer",
    location: "Remote",
    description:
      "Document features and processes to keep our clients and engineers informed.",
    avatar: (
      <Avatar
        size={48}
        style={{ backgroundColor: "#e6f7ff" }}
        icon={<UserOutlined />}
      />
    ),
  },
  {
    title: "SEO Specialist",
    location: "Remote",
    description:
      "Boost our reach and visibility through world-class search optimization.",
    avatar: (
      <Avatar
        size={48}
        style={{ backgroundColor: "#40a9ff" }}
        icon={<GlobalOutlined />}
      />
    ),
  },
];

const lifeAtOurCompany = [
  {
    image:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=300&q=80",
    title: "Team Collaboration",
    description: "An environment that fosters teamwork and creativity.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=300&q=80",
    title: "Learning Opportunities",
    description:
      "Grow your skills with workshops, mentorship, and certifications.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300&q=80",
    title: "Flexible Work Culture",
    description: "Work remotely or from our office with flexible hours.",
  },
];

const perksBenefits = [
  {
    icon: <CloudOutlined style={{ fontSize: 28, color: "#1890ff" }} />,
    label: "Remote Work",
  },
  {
    icon: <SafetyOutlined style={{ fontSize: 28, color: "#52c41a" }} />,
    label: "Health Insurance",
  },
  {
    icon: <SketchOutlined style={{ fontSize: 28, color: "#faad14" }} />,
    label: "Creative Freedom",
  },
  {
    icon: <TeamOutlined style={{ fontSize: 28, color: "#eb2f96" }} />,
    label: "Great Team",
  },
  {
    icon: <LineChartOutlined style={{ fontSize: 28, color: "#722ed1" }} />,
    label: "Growth Budget",
  },
  {
    icon: <UserOutlined style={{ fontSize: 28, color: "#ff4d4f" }} />,
    label: "Mentorship Program",
  },
];

const testimonials = [
  {
    name: "Priya Shah",
    role: "Frontend Developer",
    feedback:
      "I love the freedom and support at our company. Every day is a new challenge and a learning opportunity.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Smith",
    role: "Backend Engineer",
    feedback:
      "A great team, interesting projects, and flexible work policies. I feel valued and inspired here.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const CareerPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 px-6 py-10">
    {/* Hero Section */}
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.85), rgba(59, 130, 246, 0.85)), url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="mb-12 rounded-xl py-20 text-center text-white shadow-xl"
    >
      <h1 className="mb-4 text-5xl font-extrabold leading-tight">
        Join Our Team
      </h1>
      <p className="mx-auto max-w-2xl text-lg">
        Be a part of a dynamic company that values{" "}
        <span className="font-bold">creativity</span>,{" "}
        <span className="font-bold">innovation</span>, and{" "}
        <span className="font-bold">growth</span>.
      </p>
      <Button
        type="primary"
        size="large"
        style={{
          background: "#fff",
          color: "#2563eb",
          border: "none",
          marginTop: 24,
          fontWeight: 600,
        }}
        className="transition hover:shadow-lg"
      >
        Explore Open Positions
      </Button>
    </div>

    {/* Why Join Us */}
    <div className="py-10">
      <h2 className="mb-8 text-center text-3xl font-bold">Why Join Us?</h2>
      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        <Card hoverable className="text-center shadow-lg">
          <h3 className="mb-2 text-lg font-bold">Innovative Projects</h3>
          <p className="text-gray-600">
            Work on cutting-edge projects that challenge and inspire.
          </p>
        </Card>
        <Card hoverable className="text-center shadow-lg">
          <h3 className="mb-2 text-lg font-bold">Career Growth</h3>
          <p className="text-gray-600">
            Unlock your potential with ample growth opportunities.
          </p>
        </Card>
        <Card hoverable className="text-center shadow-lg">
          <h3 className="mb-2 text-lg font-bold">Supportive Culture</h3>
          <p className="text-gray-600">
            Collaborate with a team that values your voice and ideas.
          </p>
        </Card>
      </div>
      {/* Perks & Benefits */}
      <div className="mb-16">
        <h3 className="mb-6 text-center text-xl font-semibold">
          Perks &amp; Benefits
        </h3>
        <div className="grid grid-cols-2 justify-items-center gap-5 sm:grid-cols-3 md:grid-cols-6">
          {perksBenefits.map((perk, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="mb-2 rounded-full bg-white p-3 shadow-md transition-transform hover:scale-110">
                {perk.icon}
              </div>
              <span className="text-sm font-medium text-gray-700">
                {perk.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Open Positions */}
    <div className="mb-12 rounded-2xl bg-gray-200 px-4 py-10 shadow-md">
      <h2 className="mb-8 text-center text-3xl font-bold">Open Positions</h2>
      <List
        itemLayout="vertical"
        dataSource={openPositions}
        renderItem={(item) => (
          <List.Item>
            <Card
              className="w-full shadow-md transition hover:shadow-xl"
              bodyStyle={{ padding: 0 }}
            >
              <div className="flex items-center p-6">
                <div className="mr-6">{item.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="truncate text-lg font-bold">
                        {item.title}
                      </span>
                      {item.location.includes("Remote") && (
                        <Tag color="blue" className="ml-2">
                          Remote
                        </Tag>
                      )}
                    </div>
                    <Tooltip title={`Apply for ${item.title}`}>
                      <Button type="primary" shape="round">
                        Apply Now
                      </Button>
                    </Tooltip>
                  </div>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                  <p className="mt-2 font-medium text-blue-500">
                    Location: {item.location}
                  </p>
                </div>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>

    {/* Life at Our Company */}
    <div className="px-2 py-10">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Life at Our Company
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {lifeAtOurCompany.map((item, idx) => (
          <Card
            key={idx}
            hoverable
            cover={
              <img
                alt={item.title}
                src={item.image}
                className="h-56 rounded-t-xl object-cover"
              />
            }
            className="shadow-lg"
          >
            <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </Card>
        ))}
      </div>
    </div>

    {/* Testimonials */}
    <div className="mb-8 mt-16">
      <h2 className="mb-6 text-center text-2xl font-bold">
        What Our Team Says
      </h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        {testimonials.map((item, i) => (
          <Card key={i} className="shadow-lg" bordered={false}>
            <div className="mb-2 flex items-center">
              <Avatar src={item.avatar} size={54} className="mr-4" />
              <div>
                <span className="font-bold">{item.name}</span>
                <div className="text-sm text-gray-400">{item.role}</div>
              </div>
            </div>
            <div className="text-gray-700">{item.feedback}</div>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

export default CareerPage;
