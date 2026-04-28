"use client";

import { useState } from "react";
import {
  Building,
  Building2,
  Church,
  HandCoins,
  Landmark,
  Users,
  FileQuestion,
  FileCheck2,
} from "lucide-react";

interface EntityType {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  documents: string[];
  notes?: string;
}

const ENTITY_TYPES: EntityType[] = [
  {
    id: "ngo",
    label: "NGO (Local / International)",
    description:
      "Non-governmental organisations registered with the Uganda NGO Bureau.",
    icon: <Users className="w-6 h-6" />,
    documents: [
      "Certificate of Registration from the NGO Bureau",
      "Permit to Operate issued by the NGO Bureau",
    ],
    notes:
      "Proposed activities must fall within the scope authorised by your NGO Bureau permit.",
  },
  {
    id: "private",
    label: "Private Sector Entity",
    description:
      "Companies and private firms incorporated in Uganda.",
    icon: <Building className="w-6 h-6" />,
    documents: [
      "Certificate of Registration / Incorporation",
      "Memorandum & Articles of Association (URSB-certified)",
    ],
  },
  {
    id: "cbo",
    label: "Community-Based Organisation (CBO)",
    description:
      "Grassroots organisations registered at sub-national level.",
    icon: <Building2 className="w-6 h-6" />,
    documents: [
      "Certificate of Registration",
      "Constitution registered with the District Local Government (DLG)",
    ],
    notes:
      "CBOs receive dedicated support during onboarding — reach out via the contact form if you need guidance.",
  },
  {
    id: "fbo",
    label: "Faith-Based Organisation (FBO)",
    description:
      "Religious or faith-aligned organisations delivering programmes.",
    icon: <Church className="w-6 h-6" />,
    documents: [
      "Certificate of Registration (NGO Bureau or relevant statutory body)",
      "Constitution or governing instrument of the FBO",
    ],
    notes:
      "FBOs receive dedicated support during onboarding — reach out via the contact form if you need guidance.",
  },
  {
    id: "government",
    label: "Government Institution",
    description:
      "MDAs, local governments and other public bodies entering partnership with OPM.",
    icon: <Landmark className="w-6 h-6" />,
    documents: ["Letter of Intent from the Accounting Officer"],
  },
  {
    id: "development",
    label: "Development Partner / Multilateral Agency",
    description:
      "Bilateral donors, UN agencies, international financial institutions.",
    icon: <HandCoins className="w-6 h-6" />,
    documents: [
      "Financing Agreement(s)",
      "Evidence of Accreditation",
      "Country Strategic Paper(s)",
    ],
  },
  {
    id: "other",
    label: "Other",
    description:
      "Entities recognised by other statutory authorities not listed above.",
    icon: <FileQuestion className="w-6 h-6" />,
    documents: [
      "Statutory recognised instruments from the relevant Government agency",
    ],
    notes:
      "Contact the OPM PCMS team if you are unsure which category applies to your organisation.",
  },
];

const SHARED_REQUIREMENTS = [
  "Physical address (headquarters and field offices)",
  "Official organisation contact details and key contact persons",
  "Organisational background, structure and organogram",
  "List of Board of Directors",
  "Goal, vision, mission and objectives",
];

export default function EntityTypeWizard() {
  const [selectedId, setSelectedId] = useState<string>(ENTITY_TYPES[0].id);
  const selected =
    ENTITY_TYPES.find((t) => t.id === selectedId) ?? ENTITY_TYPES[0];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          Step 1 — Pick your entity type
        </h4>
        <p className="text-sm text-gray-600">
          Legal documentation requirements vary by entity type. Select yours to
          see exactly what to prepare.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
        {ENTITY_TYPES.map((type) => {
          const active = type.id === selectedId;
          return (
            <button
              key={type.id}
              type="button"
              onClick={() => setSelectedId(type.id)}
              aria-pressed={active}
              className={`text-left p-4 rounded-lg border-2 transition-all ${
                active
                  ? "border-emerald-700 bg-emerald-50 shadow-sm"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <div
                className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3 ${
                  active
                    ? "bg-emerald-700 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {type.icon}
              </div>
              <p
                className={`text-sm font-semibold leading-tight ${
                  active ? "text-emerald-900" : "text-gray-900"
                }`}
              >
                {type.label}
              </p>
            </button>
          );
        })}
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          Step 2 — Required legal documentation
        </h4>
        <p className="text-sm text-gray-600 mb-4">{selected.description}</p>

        <ul className="space-y-2 mb-6">
          {selected.documents.map((doc) => (
            <li
              key={doc}
              className="flex items-start gap-3 p-3 bg-gray-50 rounded-md"
            >
              <FileCheck2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
              <span className="text-gray-800 text-sm">{doc}</span>
            </li>
          ))}
        </ul>

        {selected.notes && (
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-md mb-6">
            <p className="text-sm text-yellow-900">{selected.notes}</p>
          </div>
        )}

        <div className="bg-gray-50 rounded-md p-5">
          <p className="text-sm font-semibold text-gray-900 mb-3">
            In addition, all entity types must provide:
          </p>
          <ul className="space-y-1.5">
            {SHARED_REQUIREMENTS.map((req) => (
              <li key={req} className="text-sm text-gray-700 flex gap-2">
                <span className="text-gray-400">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
