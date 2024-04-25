import { PullRequests, Edge } from "@/types/pull-request"
import PullRequestTable from "./pull-request-table"
import { GitPullRequest } from 'lucide-react';

export default function PrTable({ data }: { data: PullRequests }) {
  return (
    <div className="w-[660px] bg-neutral-950 shadow-inner-dark flex flex-col ">
      <div className="pr-title-bg h-10 flex justify-between items-center pl-4 ">
        <p className="font-mono">Pull Requests / {data.totalCount}</p>
        <div className="w-10 h-full bg-[#111111] flex items-center justify-center">
          <GitPullRequest size={20} color="white" />
        </div>
      </div>
      <div className="max-h-96 overflow-auto custom-scroll-bar">

      {data.edges.sort().map((pr: Edge) => (
        <PullRequestTable key={pr.node.number} node={pr.node} />
      ))}
      </div>
    </div>
  )
}