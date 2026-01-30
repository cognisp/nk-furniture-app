import React from 'react';

const ComingSoon: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Coming Soon</h1>
        <p className="text-lg text-gray-600 mt-4">
          We are working hard on something amazing. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;