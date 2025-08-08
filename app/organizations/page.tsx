"use client";
import { useEffect, useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

interface Organization {
  organization_id: string | null;
  name: string | null;
  organization_type: string | null;
  acronym: string | null;
  logo_url: string | null;
  description: string | null;
  founding_year: string | null;
  years_active: string | null;
  urrms_status: string | null;
  website: string | null;
  staff_count: number | null;
  office_location: string | null;
  references: string | null;
  zones: string[] | null;
  settlements: string[] | null;
  thematic_areas: string[] | null;
  target_demographics: string[] | null;
}

interface ApiResponse {
  data: Organization[] | null;
  status: boolean;
  message: string;
  count?: number;
  totalElements?: number;
  totalPages?: number;
  currentPage?: number;
  size?: number;
}

export default function OrganizationsPage() {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Organization;
    direction: "asc" | "desc";
  } | null>(null);

  const itemsPerPage = 10;

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await fetch("/api/organizations");
        const data: ApiResponse = await response.json();

        if (data.status && data.data) {
          setOrganizations(data.data);
        } else {
          setError(data.message || "No organizations data available");
        }
      } catch (err) {
        setError("Failed to fetch organizations");
      } finally {
        setLoading(false);
      }
    };

    fetchOrganizations();
  }, []);

  // Filter organizations based on search term
  const filteredOrganizations = organizations.filter(
    (org) =>
      (org.name?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (org.organization_type?.toLowerCase() || "").includes(
        searchTerm.toLowerCase()
      )
  );

  // Sort organizations
  const sortedOrganizations = [...filteredOrganizations].sort((a, b) => {
    if (!sortConfig) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortConfig.direction === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    return 0;
  });

  // Paginate organizations
  const totalPages = Math.ceil(sortedOrganizations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrganizations = sortedOrganizations.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleSort = (key: keyof Organization) => {
    setSortConfig((current) => ({
      key,
      direction:
        current?.key === key && current.direction === "asc" ? "desc" : "asc",
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-4 md:p-8">
        <div className="text-center">Loading organizations...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-4 md:p-8">
        <div className="text-center text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Refugee Partner Organizations
      </h1>

      {/* Search and Filter Section */}
      <div className="mb-6">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search organizations..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm leading-normal">
              <th
                className="py-3 px-6 text-left cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("name")}
              >
                Organization Name
                {sortConfig?.key === "name" &&
                  (sortConfig.direction === "asc" ? " ↑" : " ↓")}
              </th>
              <th
                className="py-3 px-6 text-left cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("organization_type")}
              >
                Organization Type
                {sortConfig?.key === "organization_type" &&
                  (sortConfig.direction === "asc" ? " ↑" : " ↓")}
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {paginatedOrganizations.map((org, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-4 px-6">
                  {org.name || "Unnamed Organization"}
                </td>
                <td className="py-4 px-6">
                  {org.organization_type || "Not Specified"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + itemsPerPage, filteredOrganizations.length)} of{" "}
          {filteredOrganizations.length} organizations
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-md border border-gray-300 disabled:opacity-50"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </div>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-md border border-gray-300 disabled:opacity-50"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
