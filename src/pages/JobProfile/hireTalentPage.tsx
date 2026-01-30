import React from "react";
import JobProfileCard from "@/pages/JobProfile/jobprofile";
import { dataSet } from "./data";

const HireTalentPage: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4 md:px-20">
    <h1 className="pl-10 text-2xl text-center font-bold py-4 text-gray-800">
      Hire Cognisp's Talent
    </h1>
  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {dataSet.map((item) => (
        <div key={item.id} className="m-2">
          <JobProfileCard
            // image={item.USER_AVATAR}
            experience={item.experience}
            name={item.name}
            designation={item.designation}
            communicationScore={item.communicationScore}
            technicalScore={item.technicalScore}
            responsibilities={item.responsibilities}
            skills={item.skills}
            certifications={item.certifications}
            experienceDetails={item.experienceDetails}
            profileSummary={item.profileSummary} // Pass the profile
          />
        </div>
      ))}
    </div>
  </div>
  );
};

export default HireTalentPage;