import {
  Caption,
  DataTableWrapper,
  Table,
  TableAvatarCell,
  TableCell,
  TableHead,
} from "@/components/ui/table";
import { AUTHOR_TABLE_HEADER, AUTHORS_DATA } from "@/lib/constants";

const statusStyles: { [key: string]: string } = {
  Online: "bg-gradient-soft-green600-lime400",
  Offline: "bg-gradient-soft-slate600-slate300",
};

export const AuthorsTable = () => (
  <DataTableWrapper title="Authors table">
    <Table>
      <TableHead>
        <tr>
          {AUTHOR_TABLE_HEADER.map((header) => (
            <th
              key={header.id}
              className={`table-header text-slate-400 opacity-70 ${
                header.id !== AUTHOR_TABLE_HEADER.length
                  ? `text-${header.textAlign} uppercase text-xxs border-b-solid font-bold`
                  : "font-semibold capitalize border-solid"
              } border-gray-200 shadow-none tracking-none ${header.className}`}
            >
              {header.header}
            </th>
          ))}
        </tr>
      </TableHead>

      <tbody>
        {AUTHORS_DATA.map((author, index) => (
          <tr key={author.id}>
            <TableCell
              isLastRow={index === AUTHORS_DATA.length - 1}
              className="shadow-transparent"
            >
              <TableAvatarCell
                img={author.user.avatar}
                name={author.user.name}
                subTitle={author.user.email}
              />
            </TableCell>
            <TableCell
              isLastRow={index === AUTHORS_DATA.length - 1}
              className="shadow-transparent"
            >
              <p className="mb-0 caption font-semibold">
                {author.function.role}
              </p>
              <p className="mb-0 caption text-slate-400">
                {author.function.department}
              </p>
            </TableCell>
            <TableCell
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
            </TableCell>
            <TableCell
              isLastRow={index === AUTHORS_DATA.length - 1}
              className="text-center shadow-transparent"
            >
              <Caption className="text-slate-400">
                {author.employedDate}
              </Caption>
            </TableCell>
            <TableCell
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
            </TableCell>
          </tr>
        ))}
      </tbody>
    </Table>
  </DataTableWrapper>
);
