import { projects } from "../projects";

export function CardProject() {
  return (
    <div id="projects" className="mt-10">
      <h2 className="text-[#ED7D31]">Projects</h2>
      <h1 className="text-3xl font-bold text-secondary">Latest works.</h1>
      <div className="flex justify-center gap-4 flex-wrap -mx-4 mt-5">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="max-w-xs rounded overflow-hidden shadow-lg px-6 py-4 md:w-6/12 lg:w-4/12 w-full"
            >
              <img
                className="w-full"
                src={project.imgUrl}
                alt="Sunset in the mountains"
              />
              <div className="mt-5">
                <p className="text-[#ED7D31] text-base font-semibold">
                  {project.tag}
                </p>
                <h1 className="text-secondary text-xl mb-2">{project.title}</h1>
              </div>
            </div>
            // <div className=" px-4 py-6 border-2 rounded-md shadow-sm">
            //   <div>
            //     <img
            //       className="w-full object-cover"
            //       src={project.imgUrl}
            //       alt={project.title}
            //     />
            //   </div>
            //   <div>
            //     <h3 className="text-[#ED7D31] my-3 font-bold">{project.tag}</h3>
            //     <h1 className="text-xl text-secondary">{project.title}</h1>
            //   </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
}
