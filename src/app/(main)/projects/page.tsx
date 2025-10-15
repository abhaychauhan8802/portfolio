import { projects } from "@/lib/projectsData";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <section className="pt-14 sm:pt-20 min-h-[calc(100vh-70px)]">
      <div className="text-center mb-10">
        <h2 className="text-4xl text-gradient font-bold">Projects</h2>
      </div>
      <div className="pb-20">
        <div className="text-center">
          <p className="text-text-muted leading-relaxed mb-10 text-lg md:text-xl">
            Here are some of the projects I&apos;ve worked on, showcasing my
            expertise in web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="rounded-sm overflow-hidden cursor-default bg-card border"
            >
              <div className="h-48 bg-gradient-to-br from-violet-400 to-purple-600 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  height={200}
                  width={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-secondary mb-2">
                  {project.title}
                </h3>
                <p className="text-text-muted mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="bg-muted py-1 px-2 rounded-xl text-muted-foreground"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center text-primary hover:opacity-80"
                  >
                    <Github size={16} className="mr-1" /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center text-primary hover:opacity-80"
                  >
                    <ExternalLink size={16} className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
