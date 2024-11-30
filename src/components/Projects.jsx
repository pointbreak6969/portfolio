import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
  CardHeader,
} from "./ui/card";
import "../App.css";
import { Button } from "./ui/button";
import { Folder, Github, SquareArrowOutUpRight } from "lucide-react";
import { useState, forwardRef } from "react";
const projects = [
  {
    title: "E-Learning - Course Marketplace",
    description:
      "A comprehensive online learning platform where instructors can create, upload, and sell courses while students can purchase and access educational content. Features include secure payment processing, video content delivery, course progress tracking, and instructor analytics dashboard.",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Redux",
      "Cloudinary",
    ],
    github: "https://github.com/pointbreak6969/Client-E-Learning",
    demo: "",
  },
  {
    title: "LearnLink - Interactive Learning Space",
    description:
      "A collaborative learning platform that combines the functionality of virtual classrooms with real-time collaboration tools. Features include resource sharing, live virtual classrooms, interactive whiteboard for group study, file management system, and integrated chat for student discussions.",
    techStack: [
      "React",
      "Socket.io",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Redux",
    ],
    github: "https://github.com/pointbreak6969/LearnLink",
    demo: "",
  },
];
const Projects = forwardRef((props, ref) => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };
  return (
    <div
      ref={ref}
      className=" flex items-center max-w-7xl mx-auto p-5 flex flex-col gap-10"
      id="projects"
    >
      <h1 className="text-2xl md:text-4xl font-bold text-white">
        My Projects:
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(0, visibleProjects).map((project, index) => {
          return (
            <Card
              className="w-[300px] sm:w-[350px] h-[280px] bg-slate-800/80 flex flex-col transform transition-all duration-300 hover:scale-105 cursor-pointer border-0 rounded-lg overflow-hidden"
              key={index}
            >
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Folder className="text-cyan-200 w-5 h-5" />
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={`${project.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="text-cyan-200 w-5 h-5 hover:text-cyan-300 transition-colors" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={`${project.demo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SquareArrowOutUpRight className="text-cyan-200 w-5 h-5 hover:text-cyan-300 transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 px-4 py-2 overflow-hidden">
                <CardTitle className="text-gray-300 mb-3">
                  <h3 className="text-xl font-semibold line-clamp-2 overflow-hidden text-ellipsis transition-colors hover:text-cyan-200">
                    {project.title}
                  </h3>
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm line-clamp-4">
                  {project.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="mt-auto p-4 pt-2">
                <div className="flex gap-3 w-full overflow-x-auto whitespace-nowrap scrollbar-hide">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-gray-300 text-xs bg-slate-700/50 px-3 py-1 rounded-full flex-shrink-0"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      {visibleProjects < projects.length && (
        <div className="flex justify-center mt-8">
          <Button
            onClick={handleShowMore}
            className="bg-transparent hover:bg-cyan-200/10 text-cyan-200 border-2 border-cyan-200/80"
          >
            Show More Projects
          </Button>
        </div>
      )}
    </div>
  );
});
export default Projects;
