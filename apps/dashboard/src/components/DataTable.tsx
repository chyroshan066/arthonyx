import {
  AUTHOR_TABLE_HEADER,
  AUTHORS_DATA,
  PROJECT_TABLE_HEADERS_2,
  PROJECTS_DATA_2,
} from "@/constants";
import { memo } from "react";
import { CardWrapper } from "./utility/CardWrapper";
import { CardHeaderWrapper } from "./utility/CardHeaderWrapper";
import { PerfectScrollbarComponent } from "./utility/PerfectScrollbarComponent";
import { Caption, Table, TableAvatarCell, TData, THead } from "./utility/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const statusStyles: { [key: string]: string } = {
  Online: "bg-gradient-soft-green600-lime400",
  Offline: "bg-gradient-soft-slate600-slate300",
};

export const DataTable = memo(() => (
  <>
    <div className="flex flex-wrap -mx-3">
      <CardWrapper
        outerDivClassName="flex-none"
        innerDivClassName="mb-6 border-transparent shadow-soft-xl bg-white"
      >
        <CardHeaderWrapper className="border-b-solid border-b-transparent">
          <h6>Authors table</h6>
        </CardHeaderWrapper>
        <div className="flex-auto px-0 pt-0 pb-2">
          <PerfectScrollbarComponent
            className="management-table-ps relative overflow-hidden touch-pan-y"
            options={{
              suppressScrollY: true, // Only horizontal for the table
              wheelPropagation: true, // Allows the page to scroll when we wheel over the table
            }}
          >
            <div className="p-0">
              <Table>
                <THead>
                  <tr>
                    {AUTHOR_TABLE_HEADER.map((header) => (
                      <th
                        key={header.id}
                        className={`table-header text-slate-400 opacity-70 ${
                          header.id !== AUTHOR_TABLE_HEADER.length
                            ? `text-${header.textAlign} uppercase text-xxs border-b-solid font-bold`
                            : "font-semibold capitalize border-solid"
                        } border-gray-200 shadow-none tracking-none ${
                          header.className
                        }`}
                      >
                        {header.header}
                      </th>
                    ))}
                  </tr>
                </THead>

                <tbody>
                  {AUTHORS_DATA.map((author, index) => (
                    <tr key={author.id}>
                      <TData
                        isLastRow={index === AUTHORS_DATA.length - 1}
                        className="shadow-transparent"
                      >
                        <TableAvatarCell
                          img={author.user.avatar}
                          name={author.user.name}
                          subTitle={author.user.email}
                        />
                      </TData>
                      <TData
                        isLastRow={index === AUTHORS_DATA.length - 1}
                        className="shadow-transparent"
                      >
                        <p className="mb-0 caption font-semibold">
                          {author.function.role}
                        </p>
                        <p className="mb-0 caption text-slate-400">
                          {author.function.department}
                        </p>
                      </TData>
                      <TData
                        isLastRow={index === AUTHORS_DATA.length - 1}
                        className="text-sm leading-normal text-center shadow-transparent"
                      >
                        <span
                          className={`${
                            statusStyles[author.status]
                          } px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white`}
                        >
                          {author.status}
                        </span>
                      </TData>
                      <TData
                        isLastRow={index === AUTHORS_DATA.length - 1}
                        className="text-center shadow-transparent"
                      >
                        <Caption className="text-slate-400">
                          {author.employedDate}
                        </Caption>
                      </TData>
                      <TData
                        isLastRow={index === AUTHORS_DATA.length - 1}
                        className="shadow-transparent"
                      >
                        <a
                          href="#"
                          className="text-xs font-semibold leading-tight text-slate-400"
                        >
                          {" "}
                          Edit{" "}
                        </a>
                      </TData>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </PerfectScrollbarComponent>
        </div>
      </CardWrapper>
    </div>

    <div className="flex flex-wrap -mx-3">
      <CardWrapper
        outerDivClassName="flex-none"
        innerDivClassName="mb-6 border-transparent shadow-soft-xl bg-white"
      >
        <CardHeaderWrapper className="border-b-solid border-b-transparent">
          <h6>Projects table</h6>
        </CardHeaderWrapper>
        <div className="flex-auto px-0 pt-0 pb-2">
          <PerfectScrollbarComponent
            className="management-table-ps relative overflow-hidden touch-pan-y" // "touch-pan-y" allows the PAGE to scroll vertically when we drag our finger on the table.
            options={{
              suppressScrollY: true, // Only horizontal for the table
              wheelPropagation: true, // Allows the page to scroll when we wheel over the table
            }}
          >
            <div className="p-0">
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
                        } border-gray-200 shadow-none tracking-none ${
                          header.className
                        }`}
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
                          <Caption className="mr-2">
                            {project.completion}%
                          </Caption>
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
            </div>
          </PerfectScrollbarComponent>
        </div>
      </CardWrapper>
    </div>
  </>
));
