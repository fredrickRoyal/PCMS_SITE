"use client";
import { useEffect, useState } from "react";
import { Search, ChevronLeft, ChevronRight, X, FileDown, AlertCircle } from "lucide-react";
import SearchableDropdown from "@/components/shared/SearchableDropdown";
import * as XLSX from "xlsx";

interface Project {
  category: string | null;
  organisation: string | null;
  thematicArea: string | null;
  subThematicArea: string | null;
  budget: number | null;
  investment: number | null;
  mda?: string | null;
  department?: string | null;
}

interface ApiResponse {
  data: Project[] | null;
  status: boolean;
  message: string;
  count?: number;
  totalElements?: number;
  totalPages?: number;
  currentPage?: number;
  size?: number;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMDA, setSelectedMDA] = useState("Office of the Prime Minister");
  const [selectedDept, setSelectedDept] = useState("Refugee Response, Coordination and Management");
  const [selectedOrg, setSelectedOrg] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Project;
    direction: "asc" | "desc";
  } | null>(null);

  const itemsPerPage = 10;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.partnerships.opm.go.ug/ProjectManagement/projectSummary/thematicBudgetInvestment?accountType=MANAGEMENT",
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

        if (Array.isArray(data)) {
          setProjects(data);
        } else if (data && typeof data === "object" && Array.isArray(data.data)) {
          // Fallback in case the direct API structure ever matches our proxy wrapper
          setProjects(data.data);
        } else {
          setError("Invalid data format received from projects API");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch projects data");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
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
  const orgOptions = Array.from(new Set(projects.map(p => p.organisation?.toUpperCase()).filter(Boolean))) as string[];
  const themeOptions = Array.from(new Set(projects.map(p => p.thematicArea).filter(Boolean))) as string[];

  // Combined Filtering Logic
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = !searchTerm ||
      (project.organisation?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (project.thematicArea?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (project.subThematicArea?.toLowerCase() || "").includes(searchTerm.toLowerCase());

    // NOTE: MDA and Dept filters are currently disabled for data loading as per user request
    const matchesMDA = true;
    const matchesDept = true;
    const matchesOrg = !selectedOrg || project.organisation?.toUpperCase() === selectedOrg;
    const matchesTheme = !selectedTheme || project.thematicArea === selectedTheme;

    const isExcluded = project.organisation?.toUpperCase() === "YUNGA FOUNDATION UGANDA";

    return matchesSearch && matchesMDA && matchesDept && matchesOrg && matchesTheme && !isExcluded;
  });

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
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

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
    }

    return 0;
  });

  // Paginate projects
  const totalPages = Math.ceil(sortedProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = sortedProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleExportExcel = () => {
    // Prepare data for export
    const exportData = sortedProjects.map((project, index) => ({
      "#": index + 1,
      "MDA": project.mda || "N/A",
      "Department": project.department || "N/A",
      "Organisation": (project.organisation || "N/A").toUpperCase(),
      "Thematic Area": project.thematicArea || "N/A",
      "Sub-Thematic Area": project.subThematicArea || "N/A",
      "Budget (UGX)": project.budget || 0,
      "Investment (UGX)": project.investment || 0,
    }));

    // Create worksheet
    const ws = XLSX.utils.json_to_sheet(exportData);

    // Set column widths
    const wscols = [
      { wch: 5 },  // #
      { wch: 30 }, // MDA
      { wch: 30 }, // Dept
      { wch: 30 }, // Org
      { wch: 25 }, // Theme
      { wch: 30 }, // SubTheme
      { wch: 20 }, // Budget
      { wch: 20 }, // Investment
    ];
    ws["!cols"] = wscols;

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Partner Investments");

    // Save file
    XLSX.writeFile(wb, "Partner_Investments_Report.xlsx");
  };

  const handleSort = (key: keyof Project) => {
    setSortConfig((current) => ({
      key,
      direction:
        current?.key === key && current.direction === "asc" ? "desc" : "asc",
    }));
  };

  const formatCurrency = (amount: number | null) => {
    if (amount === null || amount === undefined) return (
      <span className="text-orange-600 bg-orange-50 px-2 py-0.5 rounded text-[10px] font-bold">
        No data provided
      </span>
    );
    return new Intl.NumberFormat("en-UG", {
      style: "currency",
      currency: "UGX",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-4 md:p-8">
        <div className="text-center">Loading projects...</div>
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
      <h1 className="text-3xl font-bold mb-8 text-center">Financial & Output contribution by the Non-state Actors (How much is being invested & what is being delivered?)</h1>

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
            label="Organisation"
            options={orgOptions}
            value={selectedOrg}
            onChange={setSelectedOrg}
            placeholder="Select Organisation"
          />
          <SearchableDropdown
            label="Thematic Area"
            options={themeOptions}
            value={selectedTheme}
            onChange={setSelectedTheme}
            placeholder="Select Theme"
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

          {(selectedMDA || selectedDept || selectedOrg || selectedTheme || searchTerm) && (
            <button
              onClick={() => {
                setSelectedMDA("");
                setSelectedDept("");
                setSelectedOrg("");
                setSelectedTheme("");
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
                onClick={() => handleSort("organisation")}
              >
                Organisation
                {sortConfig?.key === "organisation" &&
                  (sortConfig.direction === "asc" ? " ↑" : " ↓")}
              </th>
              <th
                className="py-3 px-6 text-left cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("thematicArea")}
              >
                Thematic Area
                {sortConfig?.key === "thematicArea" &&
                  (sortConfig.direction === "asc" ? " ↑" : " ↓")}
              </th>
              <th className="py-3 px-6 text-left">Sub-Thematic Area</th>
              <th
                className="py-3 px-6 text-right cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("budget")}
              >
                Budget
                {sortConfig?.key === "budget" &&
                  (sortConfig.direction === "asc" ? " ↑" : " ↓")}
              </th>
              <th
                className="py-3 px-6 text-right cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("investment")}
              >
                Investment
                {sortConfig?.key === "investment" &&
                  (sortConfig.direction === "asc" ? " ↑" : " ↓")}
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {paginatedProjects.map((project, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-4 px-6 text-center text-gray-400">
                  {startIndex + index + 1}
                </td>
                <td className="py-4 px-6 font-medium uppercase">
                  {project.organisation || (
                    <span className="text-red-600 bg-red-50 border border-red-100 px-2 py-1 rounded-md text-[9px] font-bold inline-flex items-center gap-1 transition-all">
                      <AlertCircle size={10} />
                      No data provided
                    </span>
                  )}
                </td>
                <td className="py-4 px-6">
                  {project.thematicArea || (
                    <span className="text-red-600 bg-red-50 border border-red-100 px-2 py-1 rounded-md text-[9px] font-bold inline-flex items-center gap-1 transition-all">
                      <AlertCircle size={10} />
                      No data provided
                    </span>
                  )}
                </td>
                <td className="py-4 px-6">
                  {project.subThematicArea || (
                    <span className="text-red-600 bg-red-50 border border-red-100 px-2 py-1 rounded-md text-[9px] font-bold inline-flex items-center gap-1 transition-all">
                      <AlertCircle size={10} />
                      No data provided
                    </span>
                  )}
                </td>
                <td className="py-4 px-6 text-right font-mono text-xs">
                  {formatCurrency(project.budget)}
                </td>
                <td className="py-4 px-6 text-right font-mono text-xs">
                  {formatCurrency(project.investment)}
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
          {Math.min(startIndex + itemsPerPage, filteredProjects.length)} of{" "}
          {filteredProjects.length} projects
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
