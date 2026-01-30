    import React from 'react';
import { Card, Button, Avatar, Timeline, Tag } from 'antd';
import { 
  LaptopOutlined, 
  BarChartOutlined, 
  CloudServerOutlined,
  TeamOutlined,
  RocketOutlined,
  PhoneOutlined
} from '@ant-design/icons';

// Define interfaces for our data structures for type safety
interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// --- Mock Data (Easily replaceable with your actual content) ---

const leadConsultant = {
  name: "Priya Sharma",
  title: "Lead Business Strategist",
  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
};

const servicesData: Service[] = [
  {
    icon: <BarChartOutlined className="text-3xl text-blue-500" />,
    title: 'Strategic Business Growth',
    description: 'We analyze market trends to develop data-driven strategies that foster sustainable growth.',
  },
  {
    icon: <CloudServerOutlined className="text-3xl text-blue-500" />,
    title: 'Cloud & IT Infrastructure',
    description: 'Scalable and secure IT resources, from cloud migration to network management.',
  },
  {
    icon: <LaptopOutlined className="text-3xl text-blue-500" />,
    title: 'Custom Software Solutions',
    description: 'Bespoke software development to meet your unique business challenges and goals.',
  },
   {
    icon: <TeamOutlined className="text-3xl text-blue-500" />,
    title: 'Expert IT Resourcing',
    description: 'Access our pool of vetted IT professionals to augment your team and accelerate projects.',
  },
];

const testimonial = {
    quote: "Working with them was a game-changer. Their insights into our IT infrastructure streamlined our operations and boosted our productivity by 40%.",
    author: "Rohan Verma",
    company: "CEO, Innovatech Solutions",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
}

// --- The Component ---

const BusinessDevelopmentPage: React.FC = () => {
  return (
    <div className="bg-slate-50 font-sans">
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        
        {/* ===== Hero Section ===== */}
        <section className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left Column: Text Content & Avatar */}
          <div className="text-center md:text-left">
            <Tag color="blue" className="mb-4">Your Partner in Growth</Tag>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Driving Business <span className="text-blue-600">Innovation</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide transformative business solutions and expert IT resources to help you scale, innovate, and lead in your market.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4 md:justify-start">
               <Avatar size={48} src={leadConsultant.avatar} />
               <div>
                 <p className="font-semibold text-gray-900">{leadConsultant.name}</p>
                 <p className="text-sm text-gray-500">{leadConsultant.title}</p>
               </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="rounded-lg shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
              alt="Business team collaborating" 
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </section>

        {/* ===== Services Section ===== */}
        <section className="py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              Tailored solutions to empower your business at every stage.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {servicesData.map((service) => (
              <Card key={service.title} bordered={false} className="group transform text-center shadow-lg transition-transform hover:-translate-y-2">
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ===== Our Process Section ===== */}
        <section className="rounded-lg bg-white p-12 shadow-xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                <div className="md:col-span-1">
                    <h2 className="text-3xl font-bold text-gray-900">Our Proven Process</h2>
                    <p className="mt-4 text-gray-600">We follow a structured approach to ensure your success, providing clarity and results at every step.</p>
                </div>
                <div className="md:col-span-2">
                    <Timeline
                        items={[
                            { color: 'blue', children: <><p className="font-bold">1. Discovery & Strategy</p><p>We dive deep into your goals to craft a bespoke roadmap.</p></> },
                            { color: 'blue', children: <><p className="font-bold">2. Implementation & Development</p><p>Our experts build and deploy your solution with precision.</p></> },
                            { color: 'green', children: <><p className="font-bold">3. Launch & Optimization</p><p>We ensure a smooth launch and continuously optimize for peak performance.</p></> }
                        ]}
                    />
                </div>
            </div>
        </section>

        {/* ===== Testimonial & CTA Section ===== */}
        <section className="mt-24">
            <div className="relative isolate overflow-hidden rounded-2xl bg-gray-900 px-6 py-20 text-center shadow-2xl sm:px-16">
                <Avatar src={testimonial.avatar} size={80} className="mb-4 border-4 border-white"/>
                <figure>
                    <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl">
                        <p>“{testimonial.quote}”</p>
                    </blockquote>
                    <figcaption className="mt-6">
                        <div className="text-base text-white">
                            <span className="font-bold">{testimonial.author}</span>, {testimonial.company}
                        </div>
                    </figcaption>
                </figure>
                <div className="mt-10">
                    <Button type="primary" size="large" icon={<RocketOutlined />}>
                        Start Your Project
                    </Button>
                    <Button type="link" size="large" className="ml-4 text-white" icon={<PhoneOutlined />}>
                        Schedule a Call
                    </Button>
                </div>
            </div>
        </section>
        
      </main>
    </div>
  );
};

export default BusinessDevelopmentPage;