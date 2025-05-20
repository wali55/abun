import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import Wordpress from "../../assets/wordpress.png";
import { ChevronDown } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { ArrowUpDown } from "lucide-react"

export type Article = {
  id: number;
  title: string;
  keyword: string;
  wordCount: number;
  createdOn: string;
  status: "generated" | "published" | "scheduled" | "archived";
};

export const columns: ColumnDef<Article>[] = [
  {
    id: "select",
    header: ({table}) => (
      <Checkbox onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)} checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")} />
    ),
    cell: ({row}) => (
      <Checkbox onCheckedChange={(value) => row.toggleSelected(!!value)} checked={row.getIsSelected()} />
    )
  },
  {
    accessorKey: "title",
    header: "Article Title",
  },
  {
    accessorKey: "keyword",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Keyword[Traffic]
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "wordCount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Words
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "createdOn",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created On
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "action",
    header: () => <div className="text-right">Action</div>,
    cell: () => {
      return (
        <div className="flex justify-end">
          <Button variant="outline" size="sm" className="text-green-400 border-green-400 px-6 hover:text-green-500">
            View
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "publish",
    header: () => <div className="text-right">Publish</div>,
    cell: () => {
      return (
        <div className="flex justify-end">
          <Button variant="ghost" size="sm">
            <img src={Wordpress} alt="publish" className="size-6" />
            <ChevronDown />
          </Button>
        </div>
      );
    },
  },
];
