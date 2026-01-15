import { EmptyState } from "@/components/ui/EmptyState";
import {
  Caption,
  DataTableWrapper,
  Table,
  TableAvatarCell,
  TableCell,
  TableHead,
} from "@/components/ui/table";
import { AUTHORS_TABLE_DATA, AUTHORS_TABLE_HEADERS } from "@/lib/constants";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";

const statusStyles: { [key: string]: string } = {
  Online: "bg-gradient-soft-green600-lime400",
  Offline: "bg-gradient-soft-slate600-slate300",
};

export const AuthorsTable = () => {
  const hasData = AUTHORS_TABLE_DATA.length > 0;

  return (
    <DataTableWrapper title="Authors table">
      <Table>
        <TableHead>
          <tr>
            {AUTHORS_TABLE_HEADERS.map((header) => (
              <th
                key={header.id}
                className={`table-header text-disabled opacity-70 ${
                  header.id !== AUTHORS_TABLE_HEADERS.length
                    ? `text-${header.textAlign} uppercase text-xxs border-b-solid font-bold`
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
              <td colSpan={AUTHORS_TABLE_DATA.length} className="py-8">
                <EmptyState
                  message="No projects assigned"
                  icon={faProjectDiagram}
                  description="New projects will appear here once they are created."
                />
              </td>
            </tr>
          ) : (
            AUTHORS_TABLE_DATA.map((author, index) => (
              <tr key={author.id}>
                <TableCell
                  isLastRow={index === AUTHORS_TABLE_DATA.length - 1}
                  className="shadow-transparent"
                >
                  <TableAvatarCell
                    img={author.user.avatar}
                    name={author.user.name}
                    subTitle={author.user.email}
                  />
                </TableCell>
                <TableCell
                  isLastRow={index === AUTHORS_TABLE_DATA.length - 1}
                  className="shadow-transparent"
                >
                  <p className="mb-0 caption font-semibold">
                    {author.function.role}
                  </p>
                  <p className="mb-0 caption text-disabled">
                    {author.function.department}
                  </p>
                </TableCell>
                <TableCell
                  isLastRow={index === AUTHORS_TABLE_DATA.length - 1}
                  className="text-sm leading-normal text-center shadow-transparent"
                >
                  <span
                    className={`${
                      statusStyles[author.status]
                    } px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-surface`}
                  >
                    {author.status}
                  </span>
                </TableCell>
                <TableCell
                  isLastRow={index === AUTHORS_TABLE_DATA.length - 1}
                  className="text-center shadow-transparent"
                >
                  <Caption className="text-disabled">
                    {author.employedDate}
                  </Caption>
                </TableCell>
                <TableCell
                  isLastRow={index === AUTHORS_TABLE_DATA.length - 1}
                  className="shadow-transparent"
                >
                  <a
                    href="#"
                    className="text-xs font-semibold leading-tight text-disabled"
                  >
                    {" "}
                    Edit{" "}
                  </a>
                </TableCell>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </DataTableWrapper>
  );
};
