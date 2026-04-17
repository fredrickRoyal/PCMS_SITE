"use client";
import {
  CheckCircle2,
  FileCheck,
  FileText,
  Users,
  Building2,
  Target,
  Shield,
  BookOpen,
} from "lucide-react";

interface StepProps {
  title: string;
  items: string[];
  icon?: React.ReactNode;
}

export const DocumentList = ({ documents }: { documents: string[] }) => (
  <div className="grid gap-3 mt-4">
    {documents.map((doc, index) => (
      <div
        key={index}
        className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg"
      >
        <FileText className="w-5 h-5 text-blue-600 mt-1" />
        <span className="text-gray-700">{doc}</span>
      </div>
    ))}
  </div>
);

export const RequirementStep = ({ title, items, icon }: StepProps) => (
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      {icon && <div className="text-blue-600">{icon}</div>}
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
    </div>
    <ul className="space-y-2 ml-8">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
          <span className="text-gray-600">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const DataPrivacySection = () => (
  <div className="bg-blue-50 p-6 rounded-xl space-y-6">
    <div className="flex items-center gap-3">
      <Shield className="w-8 h-8 text-blue-600" />
      <h3 className="text-xl font-semibold text-gray-800">
        Data Privacy and Protection Guidelines
      </h3>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-700">Key Requirements</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
            <span className="text-gray-600">
              Compliance with Data Protection and Privacy Act, 2019
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
            <span className="text-gray-600">
              Explicit informed consent from data subjects
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
            <span className="text-gray-600">
              Implementation of security measures
            </span>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-700">Data Subject Rights</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
            <span className="text-gray-600">
              Access and review personal data
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
            <span className="text-gray-600">
              Rectify inaccurate information
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
            <span className="text-gray-600">
              Object to processing or withdraw consent
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
