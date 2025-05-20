import { columns, type Article } from "./columns"
import { DataTable } from "./data-table"

const ArticlePage = () => {
  const data:Article[] = [
    {
      id: 1,
      title: "Scaling to 1 Million Users: The Architecture",
      keyword: "architecture [2240000]",
      wordCount: 4575,
      createdOn: "20 hours ago",
      status: "generated",
    },
    {
      id: 2,
      title: "This new IDE just destroyed VS Code",
      keyword: "ide [40000]",
      wordCount: 3480,
      createdOn: "21 hours ago",
      status: "published",
    },
    {
      id: 3,
      title: "Why You Should Build an MCP Server",
      keyword: "mcp server [12000]",
      wordCount: 2676,
      createdOn: "a day ago",
      status: "scheduled",
    },
    {
      id: 4,
      title: "Bad Bad UX: 20 Common Mistakes",
      keyword: "us [212000]",
      wordCount: 3676,
      createdOn: "1 May, 25",
      status: "scheduled",
    },
    {
      id: 5,
      title: "Bad Bad UX: 20 Common Mistakes",
      keyword: "us [212000]",
      wordCount: 3676,
      createdOn: "1 May, 25",
      status: "generated",
    },
    {
      id: 6,
      title: "Scaling to 1 Million Users: The Architecture",
      keyword: "architecture [2240000]",
      wordCount: 4575,
      createdOn: "28 April, 25",
      status: "generated",
    },
    {
      id: 7,
      title: "This new IDE just destroyed VS Code",
      keyword: "ide [40000]",
      wordCount: 3480,
      createdOn: "27 April, 25",
      status: "published",
    },
    {
      id: 8,
      title: "Why You Should Build an MCP Server",
      keyword: "mcp server [12000]",
      wordCount: 2676,
      createdOn: "26 April, 25",
      status: "scheduled",
    },
    {
      id: 9,
      title: "Bad Bad UX: 20 Common Mistakes",
      keyword: "us [212000]",
      wordCount: 3676,
      createdOn: "25 April, 25",
      status: "scheduled",
    },
    {
      id: 10,
      title: "Bad Bad UX: 20 Common Mistakes",
      keyword: "us [212000]",
      wordCount: 3676,
      createdOn: "24 April, 25",
      status: "generated",
    },
    {
      id: 11,
      title: "Scaling to 1 Million Users: The Architecture",
      keyword: "architecture [2240000]",
      wordCount: 4575,
      createdOn: "23 April, 25",
      status: "generated",
    },
    {
      id: 12,
      title: "This new IDE just destroyed VS Code",
      keyword: "ide [40000]",
      wordCount: 3480,
      createdOn: "22 April, 25",
      status: "published",
    },
    {
      id: 13,
      title: "Why You Should Build an MCP Server",
      keyword: "mcp server [12000]",
      wordCount: 2676,
      createdOn: "21 April, 25",
      status: "scheduled",
    },
    {
      id: 14,
      title: "Bad Bad UX: 20 Common Mistakes",
      keyword: "us [212000]",
      wordCount: 3676,
      createdOn: "20 April, 25",
      status: "scheduled",
    },
    {
      id: 15,
      title: "Bad Bad UX: 20 Common Mistakes",
      keyword: "us [212000]",
      wordCount: 3676,
      createdOn: "19 April, 25",
      status: "generated",
    },
  ]
  return (
    <div className="mb-8">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md m-2">
        <h1 className="font-bold text-center text-2xl">Articles</h1>
      </div>
       <DataTable columns={columns} data={data}/>
    </div>
  )
}

export default ArticlePage