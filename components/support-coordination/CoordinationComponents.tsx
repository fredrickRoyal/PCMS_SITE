"use client";
import { Target, Users, Coins, Crown } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export const StatCard = ({ icon, title, value }: StatCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="flex items-center gap-4">
      <div className="p-3 bg-blue-50 rounded-lg">{icon}</div>
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-xl font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  </div>
);

interface InfoBoxProps {
  number: string;
  title: string;
  description: string;
}

export const InfoBox = ({ number, title, description }: InfoBoxProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-start gap-4">
      <div className="bg-blue-500 text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0">
        {number}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

export const Alert = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
    <div className="flex">
      <div className="flex-shrink-0">
        <svg
          className="h-5 w-5 text-orange-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="ml-3">
        <p className="text-sm text-orange-700">{children}</p>
      </div>
    </div>
  </div>
);
