// AnimatedStatsSection.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Card, Alert } from 'antd';

// SVG Icons as React Components
const ClientsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const ProfessionalsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

const ServicesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
);

// Animated Counter Component
interface overAchievementProps {
  targetValue: number;
  duration?: number;
  startDelay?: number;
}

const AnimatedCounter: React.FC<overAchievementProps> = ({ 
  targetValue, 
  duration = 3000,
  startDelay = 0 
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now() + startDelay;
    const endTime = startTime + duration;
    
    const updateCounter = () => {
      const now = Date.now();
      
      if (now < startTime) {
        requestAnimationFrame(updateCounter);
        return;
      }
      
      if (now >= endTime) {
        setCurrentValue(targetValue);
        return;
      }
      
      const progress = (now - startTime) / duration;
      // Easing function for smooth deceleration
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const newValue = Math.floor(easedProgress * targetValue);
      
      setCurrentValue(newValue);
      requestAnimationFrame(updateCounter);
    };

    requestAnimationFrame(updateCounter);
  }, [isVisible, targetValue, duration, startDelay]);

  return (
    <div ref={counterRef} className="text-4xl font-bold text-white">
      {currentValue.toLocaleString()}
    </div>
  );
};

// Main Statistics Component
interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, delay = 0 }) => (
  <div className="text-center p-6">
    <div className="flex justify-center mb-4">
      <div className="w-16 h-16 text-white">
        {icon}
      </div>
    </div>
    <AnimatedCounter targetValue={value} startDelay={delay} />
    <div className="text-white text-sm mt-2 font-medium">
      {label}
    </div>
  </div>
);

// Newsletter Section Component
const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      // You could show an error alert or handle as you prefer
      return;
    }

    setSuccess(true);
    setEmail('');

    // Auto-hide the alert after 3 seconds (optional)
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="flex-1 px-8">
      <h2 className="text-white text-2xl font-bold mb-4">   
        Stay Updated With Us
      </h2>
      <p className="text-white/80 text-sm mb-6 leading-relaxed">
        Stay connected with Cognisp to keep up with the latest in IT solutions and digital transformation.
      </p>

      {/* Show Alert */}
      {success && (
        <Alert
          message="Subscribed successfully!"
          type="success"
          showIcon
          closable
          onClose={() => setSuccess(false)}
          className="mb-4"
        />
      )}

      <form className="relative" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email*"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-full bg-white text-gray-800 placeholder-gray-500 pr-12 focus:outline-none focus:ring-2 focus:ring-white/20"
          required
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
        >
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </form>
    </div>
  );
};


// Main Component
const OverAchievementPage: React.FC = () => {
  return (
    <div className="relative min-h-[400px] bg-gradient-to-r from-slate-700 via-blue-800 to-green-500 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-600/20 rounded-full transform -translate-x-16 -translate-y-16"></div>
        <div className="absolute top-10 right-20 w-24 h-24 bg-green-400/20 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-500/20 rounded-full transform translate-x-20 translate-y-20"></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-400/10 transform rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-green-300/10 rounded-full"></div>
        
        {/* Silhouette figure */}
        <div className="absolute right-8 bottom-0 w-64 h-full bg-gradient-to-t from-black/20 to-transparent opacity-30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Statistics Cards */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8 lg:mb-0">
            <Card 
              className="bg-white/10 backdrop-blur-sm border-0 shadow-xl"
              bodyStyle={{ padding: 0 }}
            >
              <StatItem
                icon={<ClientsIcon className="w-full h-full" />}
                value={230}
                label="Satisfied Clients"
                delay={0}
              />
            </Card>
            
            <Card 
              className="bg-white/10 backdrop-blur-sm border-0 shadow-xl"
              bodyStyle={{ padding: 0 }}
            >
              <StatItem
                icon={<ProfessionalsIcon className="w-full h-full" />}
                value={89}
                label="IT Professionals"
                delay={500}
              />
            </Card>
            
            <Card 
              className="bg-white/10 backdrop-blur-sm border-0 shadow-xl"
              bodyStyle={{ padding: 0 }}
            >
              <StatItem
                icon={<ServicesIcon className="w-full h-full" />}
                value={50}
                label="Type Of Services"
                delay={1000}
              />
            </Card>
          </div>
          
          {/* Newsletter Section */}
          <NewsletterSection />
        </div>
      </div>
    </div>
  );
};

export default OverAchievementPage;
