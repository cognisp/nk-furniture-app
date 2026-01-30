// ProfilePage.tsx

import React from "react";
import { Avatar, Tabs, Tag, List, Timeline } from "antd";
import {
  UserOutlined,
  ToolOutlined,
  SafetyOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";

interface Responsibility {
  id: number;
  text: string;
}
interface Skill {
  id: number;
  name: string;
}
interface Certification {
  id: number;
  name: string;
  issuer: string;
}
interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string;
}

interface userSummaryProps {
  avatarUrl: string;
  destination: string;
  name: string;
  description: string;
  responsibilities: Responsibility[];
  skills: Skill[];
  certifications: Certification[];
  experience: Experience[];
}

const ProfileSummaryPage: React.FC<{ user: userSummaryProps }> = ({ user }) => (
  <div className="mx-auto mt-10 max-w-2xl rounded-xl bg-white p-8 shadow-md">
    <div className="flex items-start gap-4">
      <Avatar size={96} src={user.avatarUrl} />
      <div>
        <div className="text-sm text-gray-500">{user.destination}</div>
        <div className="text-xl font-bold">{user.name}</div>
        <div className="mt-1 text-gray-700">{user.description}</div>
      </div>
    </div>

    <Tabs defaultActiveKey="1" className="mt-6">
      <Tabs.TabPane
        tab={
          <span>
            <UserOutlined /> Responsibility
          </span>
        }
        key="1"
      >
        <List
          size="large"
            bordered
          dataSource={user.responsibilities}
          renderItem={(item) => (
            <List.Item>
              <span className="mr-2 text-base text-black">•</span> {item.text}
            </List.Item>
          )}
        />
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <span>
            <ToolOutlined /> Tech Skills
          </span>
        }
        key="2"
      >
        <div className="flex flex-wrap gap-2">
          {user.skills.map((s) => (
            <Tag color="blue" key={s.id}>
              {s.name}
            </Tag>
          ))}
        </div>
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <span>
            <SafetyOutlined /> Certifications
          </span>
        }
        key="3"
      >
        <List
          size="small"
          dataSource={user.certifications}
          renderItem={(c) => (
            <List.Item>
              {c.name} — <span className="text-gray-500">{c.issuer}</span>
            </List.Item>
          )}
        />
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <span>
            <ApartmentOutlined /> Experience
          </span>
        }
        key="4"
      >
        <Timeline>
          {user.experience.map((e) => (
            <Timeline.Item key={e.id} color="green">
              <div className="font-semibold">{e.company}</div>
              <div className="text-gray-600">
                {e.role} — {e.duration}
              </div>
              <div className="text-gray-500">{e.description}</div>
            </Timeline.Item>
          ))}
        </Timeline>
      </Tabs.TabPane>
    </Tabs>
  </div>
);

export default ProfileSummaryPage;
