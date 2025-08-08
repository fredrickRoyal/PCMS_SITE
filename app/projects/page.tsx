"use client";
import { useEffect, useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  project_title: string | null;
  start_date: string | null;
  end_date: string | null;
  collaborating_partners: string[] | null;
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
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Project;
    direction: "asc" | "desc";
  } | null>(null);

  const itemsPerPage = 10;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data: ApiResponse = await response.json();

        if (data.status && data.data) {
          setProjects(data.data);
        } else {
          setError(data.message || "No projects data available");
        }
      } catch (err) {
        setError("Failed to fetch projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filter projects based on search term
  const filteredProjects = projects.filter(
    (project) =>
      (project.project_title?.toLowerCase() || "").includes(
        searchTerm.toLowerCase()
      ) ||
      project.collaborating_partners?.some((partner) =>
        (partner?.toLowerCase() || "").includes(searchTerm.toLowerCase())
      ) ||
      false
  );

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
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

  // Paginate projects
  const totalPages = Math.ceil(sortedProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = sortedProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleSort = (key: keyof Project) => {
    setSortConfig((current) => ({
      key,
      direction:
        current?.key === key && current.direction === "asc" ? "desc" : "asc",
    }));
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
      <h1 className="text-3xl font-bold mb-8 text-center">Refugee Projects</h1>

      {/* Search and Filter Section */}
      <div className="mb-6">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search projects..."
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
                onClick={() => handleSort("project_title")}
              >
                Project Title
                {sortConfig?.key === "project_title" &&
                  (sortConfig.direction === "asc" ? " ↑" : " ↓")}
              </th>
              <th
                className="py-3 px-6 text-left cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("start_date")}
              >
                Start Date
                {sortConfig?.key === "start_date" &&
                  (sortConfig.direction === "asc" ? " ↑" : " ↓")}
              </th>
              <th
                className="py-3 px-6 text-left cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("end_date")}
              >
                End Date
                {sortConfig?.key === "end_date" &&
                  (sortConfig.direction === "asc" ? " ↑" : " ↓")}
              </th>
              <th className="py-3 px-6 text-left">Collaborating Partners</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {paginatedProjects.map((project, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-4 px-6">
                  {project.project_title || "Untitled Project"}
                </td>
                <td className="py-4 px-6">
                  {project.start_date
                    ? new Date(project.start_date).toLocaleDateString()
                    : "N/A"}
                </td>
                <td className="py-4 px-6">
                  {project.end_date
                    ? new Date(project.end_date).toLocaleDateString()
                    : "N/A"}
                </td>
                <td className="py-4 px-6">
                  <div className="max-w-xs">
                    {project.collaborating_partners?.join(", ") || (
                      <span className="text-gray-400">No partners</span>
                    )}
                  </div>
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
