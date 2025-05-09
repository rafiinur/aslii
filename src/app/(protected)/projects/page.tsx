import ProjectsTable from "./components/projects-table";
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
  // const projects = await getProjects();

  // console.log("projects", projects);

  return (
    <div className="flex flex-1 flex-col gap-4 py-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        {projectsSum.map((project) => (
          <SummarizeCard
            key={project.title}
            {...project}
            orientation="horizontal"
          />
        ))}
      </div>
      <div className="grid md:grid-cols-1 auto-rows-min">
        <div className="flex flex-col">
          <h4 className="font-semibold text-lg mb-2.5">List Proyek</h4>
          <div className="flex-1">
            <ProjectsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
