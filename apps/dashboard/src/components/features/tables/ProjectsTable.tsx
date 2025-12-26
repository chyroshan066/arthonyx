import { DataTableWrapper } from "@/components/ui/table";
import {
  Caption,
  Table,
  TableAvatarCell,
  TData,
  THead,
} from "@/components/utility/Table";
import { PROJECT_TABLE_HEADERS_2, PROJECTS_DATA_2 } from "@/lib/constants";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProjectsTable = () => (
  <DataTableWrapper title="Projects table">
    <Table className="justify-center">
      <THead>
        <tr>
          {PROJECT_TABLE_HEADERS_2.map((header) => (
            <th
              key={header.id}
              className={`table-header ${
                header.id !== PROJECT_TABLE_HEADERS_2.length
                  ? `font-bold text-${header.textAlign} uppercase text-xxs border-b-solid text-slate-400 opacity-70`
                  : "font-semibold capitalize border-solid"
              } border-gray-200 shadow-none tracking-none ${header.className}`}
            >
              {header.header}
            </th>
          ))}
        </tr>
      </THead>
      <tbody>
        {PROJECTS_DATA_2.map((project, index) => (
          <tr key={project.id}>
            <TData
              isLastRow={index === PROJECTS_DATA_2.length - 1}
              className="shadow-transparent"
            >
              <TableAvatarCell
                img={project.logo}
                name={project.name}
                marginRight={2}
              />
            </TData>
            <TData
              isLastRow={index === PROJECTS_DATA_2.length - 1}
              className="shadow-transparent"
            >
              <p className="mb-0 text-sm font-semibold leading-normal">
                {project.budget}
              </p>
            </TData>
            <TData
              isLastRow={index === PROJECTS_DATA_2.length - 1}
              className="shadow-transparent"
            >
              <Caption>{project.status}</Caption>
            </TData>
            <TData
              isLastRow={index === PROJECTS_DATA_2.length - 1}
              className="shadow-transparent text-center"
            >
              <div className="flex items-center justify-center">
                <Caption className="mr-2">{project.completion}%</Caption>
                <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                  <div
                    className={`duration-600 ease-soft ${
                      project.completion === 100
                        ? "bg-gradient-soft-green600-lime400"
                        : "bg-gradient-soft-blue600-cyan400"
                    } -mt-0.38 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all`}
                    style={{ width: `${project.completion}%` }}
                    role="progressbar"
                    aria-valuenow={project.completion}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </TData>
            <TData
              isLastRow={index === PROJECTS_DATA_2.length - 1}
              className="shadow-transparent"
            >
              <button
                className="inline-block px-6 py-3 mb-0 text-xs font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-pro ease-soft-in bg-150 tracking-tight-soft bg-x-25 text-slate-400"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FontAwesomeIcon
                  icon={faEllipsisV}
                  className="text-xs leading-tight"
                />
              </button>
            </TData>
          </tr>
        ))}
      </tbody>
    </Table>
  </DataTableWrapper>
);
