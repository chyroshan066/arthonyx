import { EmptyState } from "@/components/ui/EmptyState";
import {
  Caption,
  DataTableWrapper,
  Table,
  TableAvatarCell,
  TableCell,
  TableHead,
} from "@/components/ui/table";
import {
  PROJECT_TABLE_HEADERS_ALT,
  PROJECTS_TABLE_DATA_ALT,
} from "@/lib/constants";
import { faEllipsisV, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProjectsTable = () => {
  const hasData = PROJECTS_TABLE_DATA_ALT.length > 0;

  return (
    <DataTableWrapper title="Projects table">
      <Table className="justify-center">
        <TableHead>
          <tr>
            {PROJECT_TABLE_HEADERS_ALT.map((header) => (
              <th
                key={header.id}
                className={`table-header ${
                  header.id !== PROJECT_TABLE_HEADERS_ALT.length
                    ? `font-bold text-${header.textAlign} uppercase text-xxs border-b-solid text-disabled opacity-70`
                    : "font-semibold capitalize border-solid"
                } border-border shadow-none tracking-none ${header.className}`}
              >
                {header.header}
              </th>
            ))}
          </tr>
        </TableHead>
        <tbody>
          {!hasData ? (
            <tr>
              <td colSpan={PROJECT_TABLE_HEADERS_ALT.length} className="py-8">
                <div className="flex items-center justify-center min-h-[300px]">
                <EmptyState
                  message="No active projects"
                  icon={faFolderOpen}
                  description="You don't have any projects running at the moment."
                />
                </div>
              </td>
            </tr>
          ) : (
            PROJECTS_TABLE_DATA_ALT.map((project, index) => (
              <tr key={project.id}>
                <TableCell
                  isLastRow={index === PROJECTS_TABLE_DATA_ALT.length - 1}
                  className="shadow-transparent"
                >
                  <TableAvatarCell
                    img={project.logo}
                    name={project.name}
                    marginRight={2}
                  />
                </TableCell>
                <TableCell
                  isLastRow={index === PROJECTS_TABLE_DATA_ALT.length - 1}
                  className="shadow-transparent"
                >
                  <p className="mb-0 text-sm font-semibold leading-normal">
                    {project.budget}
                  </p>
                </TableCell>
                <TableCell
                  isLastRow={index === PROJECTS_TABLE_DATA_ALT.length - 1}
                  className="shadow-transparent"
                >
                  <Caption>{project.status}</Caption>
                </TableCell>
                <TableCell
                  isLastRow={index === PROJECTS_TABLE_DATA_ALT.length - 1}
                  className="shadow-transparent text-center"
                >
                  <div className="flex items-center justify-center">
                    <Caption className="mr-2">{project.completion}%</Caption>
                    <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-border">
                      <div
                        className={`duration-600 ease-soft ${
                          project.completion === 100
                            ? "bg-gradient-soft-green600-lime400"
                            : "bg-gradient-soft-blue600-cyan400"
                        } -mt-0.38 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-primary text-center text-surface transition-all`}
                        style={{ width: `${project.completion}%` }}
                        role="progressbar"
                        aria-valuenow={project.completion}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell
                  isLastRow={index === PROJECTS_TABLE_DATA_ALT.length - 1}
                  className="shadow-transparent"
                >
                  <button
                    className="inline-block px-6 py-3 mb-0 text-xs font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-pro ease-soft-in bg-150 tracking-tight-soft bg-x-25 text-disabled outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-border-hover focus-visible:bg-slate-50"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon
                      icon={faEllipsisV}
                      className="text-xs leading-tight"
                    />
                  </button>
                </TableCell>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </DataTableWrapper>
  );
};
