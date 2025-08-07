import ProjectsTable from "@/features/project/components/projects-table";
import SummarizeCard from "@/components/summarize-card";

const projectsSum = [
  {
    title: "Total Proyek",
    amount: "100",
    note: "",
  },
  {
    title: "Proyek Selesai",
    amount: "2",
    note: "",
  },
  {
    title: "Proyek Berjalan",
    amount: "2",
    note: "",
  },
  {
    title: "Proyek Tertunda",
    amount: "0",
    note: "",
  },
];

const ProjectsPage = async () => {
  return (
    <div className="flex flex-1 flex-col gap-4 px-6 pb-4">
      <div className="grid gap-4 auto-rows-min grid-cols-1 md:grid-cols-4">
        {projectsSum.map((project) => (
          <SummarizeCard
            key={project.title}
            {...project}
            orientation="horizontal"
          />
        ))}
      </div>
      <div className="flex flex-col overflow-auto">
        <h4 className="section-title mb-2.5">List Proyek</h4>
        <ProjectsTable />
      </div>
    </div>
  );
};

export default ProjectsPage;
