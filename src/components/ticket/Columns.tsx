import { ColumnDef } from "@tanstack/react-table";

interface IProps {
  id: number;
  description: string;
  date: string;
  customerName: string;
  priority: string;
  status: string;
}
const Columns: ColumnDef<IProps>[] = [
  {
    accessorKey: "index",
    header: "no",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "customerName",
    header: "Customer Name",
  },
  {
    accessorKey: "priority",
    header: "Priority",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];

export default Columns;
