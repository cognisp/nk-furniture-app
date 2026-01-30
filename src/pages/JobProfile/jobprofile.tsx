import React, { useState } from "react";
import { Card, Modal } from "antd";
import USER_AVATAR from "@assets/user_avatar.svg";
import ProfileSummaryPage from "@/pages/JobProfile/profileSummary";
interface JobCardProps {
  // image: string;
  experience: string;
  name: string;
  designation: string;
  communicationScore: string;
  technicalScore: string;
  responsibilities?: { id: number; text: string }[];
  skills?: { id: number; name: string }[];
  certifications?: { id: number; name: string; issuer: string }[];
  experienceDetails?: {
    id: number;
    company: string;
    role: string;
    duration: string;
    description: string;
  }[];
  profileSummary?: string; // Optional prop for profile summary
}

const JobProfileCard: React.FC<JobCardProps> = ({
  experience,
  name,
  designation,
  communicationScore,
  technicalScore,
  responsibilities,
  skills,
  certifications,
  experienceDetails,
  profileSummary, // Accept the profile summary prop
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen && (
        <Modal
          title={`${name}'s Profile`}
          open={isOpen}
          footer={null}
          width={800}
          onOk={handleClose}
          onCancel={handleClose}
        >
          <ProfileSummaryPage
            user={{
              avatarUrl: USER_AVATAR,
              destination: designation,
              name: name,
              description: profileSummary || "No description available",
              responsibilities: responsibilities || [],
              skills: skills || [],
              certifications: certifications || [],
              experience: experienceDetails || [],
            }}
          />
        </Modal>
      )}

      <Card
        className="w-100 rounded-lg shadow-lg"
        cover={
          <div className="relative">
            <img
              className="h-42 w-full rounded-lg border border-gray-200 object-cover shadow-md transition-shadow duration-300 hover:shadow-lg"
              src={USER_AVATAR}
              alt={`${name}'s profile`}
            />
            <span className="absolute left-2 top-2 rounded-lg bg-white px-2 py-1 text-xs font-bold text-black">
              Exp. {experience}+
            </span>
          </div>
        }
      >
        {/* User Details */}
        <div className="p-4">
          {/* User Name and Designation */}
          <div className="w-full border-b border-gray-600 p-1">
            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          </div>
          <p className="text-sm text-gray-600">{designation}</p>

          {/* Scores */}
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                Communication Score:
              </span>
              <span className="text-sm font-bold text-gray-800">
                {communicationScore}
              </span>
            </div>

            <div className="mt-2 flex items-center justify-between">
              <span className="text-sm text-gray-600">Technical Score:</span>
              <span className="text-sm font-bold text-gray-800">
                {technicalScore}
              </span>
            </div>

            {/* Hire Now Button */}
            <div className="mt-4">
              <button
                className="w-full rounded bg-yellow-500 px-4 py-2 font-bold text-black shadow-md transition duration-300 hover:bg-yellow-600"
                onClick={() => handleCardClick()}
              >
                Hire Now
              </button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default JobProfileCard;
