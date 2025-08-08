"use client";

interface SuccessStoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const SuccessStory = ({
  icon,
  title,
  description,
}: SuccessStoryProps) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="flex items-start gap-4">
      <div className="text-blue-600">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

export const KeyPillar = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
    <div className="space-y-3 text-gray-600">{children}</div>
  </div>
);

export const ChallengeBox = ({ challenges }: { challenges: string[] }) => (
  <div className="bg-orange-50 p-6 rounded-xl space-y-4">
    <h3 className="text-xl font-semibold text-gray-800">Current Challenges</h3>
    <div className="grid gap-3">
      {challenges.map((challenge, index) => (
        <div key={index} className="flex items-start gap-3">
          <div className="bg-orange-100 p-2 rounded-full">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          </div>
          <p className="text-gray-700">{challenge}</p>
        </div>
      ))}
    </div>
  </div>
);

export const Highlight = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
    <p className="text-blue-900">{children}</p>
  </div>
);
