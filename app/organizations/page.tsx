"use client";
import { useEffect, useState } from "react";
import { Search, ChevronLeft, ChevronRight, X, FileDown, AlertCircle } from "lucide-react";
import SearchableDropdown from "@/components/shared/SearchableDropdown";
import * as XLSX from "xlsx";

interface Organization {
  category: string | null;
  organization: string | null;
  subThematicArea: string | null;
  location: string | null;
  date: string | null;
  reportingStatus: string | null;
  mda?: string | null;
  department?: string | null;
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

  // Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMDA, setSelectedMDA] = useState("Office of the Prime Minister");
  const [selectedDept, setSelectedDept] = useState("Refugee Response, Coordination and Management");
  const [selectedOrg, setSelectedOrg] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Organization;
    direction: "asc" | "desc";
  } | null>(null);

  const itemsPerPage = 200;

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await fetch(
          "https://api.partnerships.opm.go.ug/ProjectManagement/projectSummary/projectgeneralpartnermapping?accountType=MANAGEMENT",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "*/*",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`API request failed: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        let rawOrgs: Organization[] = [];
        if (Array.isArray(data)) {
          rawOrgs = data;
        } else if (data && typeof data === "object" && Array.isArray(data.data)) {
          // Fallback in case the direct API structure matches our proxy wrapper
          rawOrgs = data.data;
        } else {
          setError("Invalid data format received from organizations API");
          return;
        }

        const cleanStr = (val: any) => (typeof val === 'string' && val.trim().toLowerCase() === "no data provided") ? null : val;

        const cleanedData = rawOrgs.map(org => ({
          ...org,
          organization: cleanStr(org.organization),
          category: cleanStr(org.category),
          subThematicArea: cleanStr(org.subThematicArea),
          location: cleanStr(org.location),
          date: cleanStr(org.date),
          reportingStatus: cleanStr(org.reportingStatus),
          mda: cleanStr(org.mda),
          department: cleanStr(org.department),
        }));

        setOrganizations(cleanedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch organizations data");
      } finally {
        setLoading(false);
      }
    };

    fetchOrganizations();
  }, []);

  // Compute Unique Options for Filters
  const mdaOptions = [
    "Office of the Prime Minister",
    "Ministry of Education and Sports",
    "Ministry of Health",
    "Ministry of Gender Labour and Social Development"
  ];
  const deptOptions = [
    "Refugee Response, Coordination and Management",
    "Disaster Preparedness and Management",
    "Northern Uganda Rehabilitation",
    "Karamoja Region Development",
    "Luwero Triangle Affairs",
    "Bunyoro Region Affairs",
    "Teso Region Affairs",
    "Monitoring and Evaluation",
    "Finance and Administration",
    "Executive"
  ];
  const orgOptions = Array.from(new Set(organizations.map(o => o.organization?.toUpperCase()).filter(Boolean))) as string[];
  const categoryOptions = Array.from(new Set(organizations.map(o => o.category).filter(Boolean))) as string[];

  // Combined Filtering Logic
  const filteredOrganizations = organizations.filter((org) => {
    const matchesSearch = !searchTerm ||
      (org.organization?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (org.category?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (org.location?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (org.subThematicArea?.toLowerCase() || "").includes(searchTerm.toLowerCase());

    // NOTE: MDA and Dept filters are currently disabled for data loading as per user request
    const matchesMDA = true;
    const matchesDept = true;
    const matchesOrg = !selectedOrg || org.organization?.toUpperCase() === selectedOrg;
    const matchesCategory = !selectedCategory || org.category === selectedCategory;

    const isExcluded = org.organization?.toUpperCase() === "YUNGA FOUNDATION UGANDA";

    return matchesSearch && matchesMDA && matchesDept && matchesOrg && matchesCategory && !isExcluded;
  });

  // Sort organizations
  const sortedOrganizations = [...filteredOrganizations].sort((a, b) => {
    if (!sortConfig) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue === null || aValue === undefined) return 1;
    if (bValue === null || bValue === undefined) return -1;

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

  const handleExportExcel = () => {
    const exportData = sortedOrganizations.map((org, index) => ({
      "#": index + 1,
      "MDA": org.mda || "N/A",
      "Department": org.department || "N/A",
      "Organization": (org.organization || "N/A").toUpperCase(),
      "Category": org.category || "N/A",
      "Sub-Thematic Area": org.subThematicArea || "N/A",
      "Authorized Location of Implementation": org.location || "N/A",
      "Implementation period (renewable upon request or successful security clearance)": org.date || "Data update required",
    }));

    // Create worksheet
    const ws = XLSX.utils.json_to_sheet(exportData);

    // Set column widths
    const wscols = [
      { wch: 5 },  // #
      { wch: 30 }, // MDA
      { wch: 30 }, // Dept
      { wch: 30 }, // Org
      { wch: 20 }, // Category
      { wch: 30 }, // SubTheme
      { wch: 30 }, // Location
      { wch: 20 }, // Date
    ];
    ws["!cols"] = wscols;

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Authorized Partners");

    // Save file
    XLSX.writeFile(wb, "Authorized_Partner_Organizations.xlsx");
  };

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
        List of coordinated Non-State Actors (Who's where, for how long & doing what?)
      </h1>

      {/* Search and Filters Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-8 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <SearchableDropdown
            label="MDA"
            options={mdaOptions}
            value={selectedMDA}
            onChange={setSelectedMDA}
            placeholder="Select MDA"
          />
          <SearchableDropdown
            label="Department"
            options={deptOptions}
            value={selectedDept}
            onChange={setSelectedDept}
            placeholder="Select Department"
          />
          <SearchableDropdown
            label="Organization"
            options={orgOptions}
            value={selectedOrg}
            onChange={setSelectedOrg}
            placeholder="Select Organization"
          />
          <SearchableDropdown
            label="Category"
            options={categoryOptions}
            value={selectedCategory}
            onChange={setSelectedCategory}
            placeholder="Select Category"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between pt-4 border-t border-gray-50">
          <div className="flex items-center gap-4">
            <div className="relative w-full md:w-96">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search by keyword..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button
              onClick={handleExportExcel}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
            >
              <FileDown size={18} />
              Export to Excel
            </button>
          </div>

          {(selectedMDA || selectedDept || selectedOrg || selectedCategory || searchTerm) && (
            <button
              onClick={() => {
                setSelectedMDA("");
                setSelectedDept("");
                setSelectedOrg("");
                setSelectedCategory("");
                setSearchTerm("");
              }}
              className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center gap-1 transition-colors"
            >
              <X size={16} />
              Clear All Filters
            </button>
          )}
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm leading-normal text-center">
              <th className="py-3 px-6">#</th>
              <th
                className="py-3 px-6 text-left cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("organization")}
              >
                Organization
                {sortConfig?.key === "organization" &&
                  (sortConfig.direction === "asc" ? " ↑" : " ↓")}
              </th>
              <th
                className="py-3 px-6 text-left cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("category")}
              >
                Category
                {sortConfig?.key === "category" &&
                  (sortConfig.direction === "asc" ? " ↑" : " ↓")}
              </th>
              <th className="py-3 px-6 text-left">Sub-Thematic Area</th>
              <th className="py-3 px-6 text-left">Authorized Location of Implementation</th>
              <th className="py-3 px-6 text-left min-w-[200px]">Implementation period (renewable upon request or successful security clearance)</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {paginatedOrganizations.map((org, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-4 px-6 text-center text-gray-400">
                  {startIndex + index + 1}
                </td>
                <td className="py-4 px-6 font-medium uppercase">
                  {org.organization || (
                    <span className="text-orange-600 bg-orange-50 border border-orange-100 px-2 py-1 rounded-md text-[9px] font-bold inline-flex items-center gap-1 transition-all">
                      <AlertCircle size={10} />
                      Data update required
                    </span>
                  )}
                </td>
                <td className="py-4 px-6">
                  {org.category || (
                    <span className="text-orange-600 bg-orange-50 border border-orange-100 px-2 py-1 rounded-md text-[9px] font-bold inline-flex items-center gap-1 transition-all">
                      <AlertCircle size={10} />
                      Data update required
                    </span>
                  )}
                </td>
                <td className="py-4 px-6">
                  <div className="max-w-xs truncate" title={org.subThematicArea || ""}>
                    {org.subThematicArea || (
                      <span className="text-orange-600 bg-orange-50 border border-orange-100 px-2 py-1 rounded-md text-[9px] font-bold inline-flex items-center gap-1 transition-all">
                        <AlertCircle size={10} />
                        Data update required
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="max-w-xs truncate" title={org.location || ""}>
                    {org.location || (
                      <span className="text-orange-600 bg-orange-50 border border-orange-100 px-2 py-1 rounded-md text-[9px] font-bold inline-flex items-center gap-1 transition-all">
                        <AlertCircle size={10} />
                        Data update required
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-4 px-6">
                  {org.date || (
                    <span className="text-orange-600 bg-orange-50 border border-orange-100 px-2 py-1 rounded-md text-[9px] font-bold inline-flex items-center gap-1 transition-all">
                      <AlertCircle size={10} />
                      Data update required
                    </span>
                  )}
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
