import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardWrapper } from "../utility/CardWrapper";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { PROJECTS } from "@/constants";
import { AvatarGroup } from "../utility/AvatarGroup";
import Image from "next/image";
import { Button } from "../utility/Button";
import Link from "next/link";
import { Children, ClassName } from "@/types";

interface ProjectCardColumnProps extends Children, ClassName {}

const ProjectCardColumn = ({ children, className }: ProjectCardColumnProps) => (
  <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
    <div
      className={`relative flex flex-col min-w-0 break-words bg-transparent shadow-none rounded-2xl bg-clip-border ${className}`}
    >
      {children}
    </div>
  </div>
);

export const ProjectGalleryCard = () => (
  <CardWrapper
    outerDivClassName="flex-none mt-6"
    innerDivClassName="mb-6 bg-white shadow-soft-xl"
  >
    <div className="p-4 pb-0 mb-0 bg-white rounded-t-2xl">
      <h6 className="mb-1">Projects</h6>
      <p className="leading-normal text-sm">Architects design houses</p>
    </div>
    <div className="flex-auto p-4">
      <div className="flex flex-wrap -mx-3">
        {PROJECTS.map((project) => (
          <ProjectCardColumn key={project.id} className="border-0 h-full">
            <div className="relative">
              <Link href="#" className="block shadow-xl rounded-2xl">
                <Image
                  src={project.img}
                  alt={project.category}
                  width={500}
                  height={300}
                  className="max-w-full shadow-soft-2xl rounded-2xl"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Link>
            </div>
            <div className="flex flex-col flex-auto px-1 pt-6 h-full">
              <p className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-soft-gray900-slate800 text-sm bg-clip-text">
                {project.category}
              </p>
              <Link href="#">
                <h5>{project.title}</h5>
              </Link>
              <p className="mb-6 leading-normal text-sm">
                {project.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <Button
                  className="active:shadow-soft-xs hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"
                  btnText="View Project"
                />
                <AvatarGroup participants={project.participants} />
              </div>
            </div>
          </ProjectCardColumn>
        ))}
        <ProjectCardColumn className="h-full border border-solid border-slate-100">
          <div className="flex flex-col justify-center flex-auto p-6 text-center">
            <Link href="#">
              <FontAwesomeIcon icon={faPlus} className="mb-4 text-slate-400" />
              <h5 className="text-slate-400">New project</h5>
            </Link>
          </div>
        </ProjectCardColumn>
      </div>
    </div>
  </CardWrapper>
);
