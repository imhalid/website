'use client'
import { PullRequests, Edge } from "@/types/pull-request"
import PullRequestTable from "./pull-request-table"
import { GitPullRequest } from 'lucide-react';
import { useState } from 'react'
import { motion, useDragControls } from "framer-motion"


export default function PrTable({ data }: { data: PullRequests }) {
  const [isOpen, setIsOpen] = useState('')
const controls = useDragControls()
  return (
    <motion.div dragControls={controls}  dragMomentum={false}
   drag className="w-[660px] rounded-md overflow-hidden bg-neutral-950 shadow-inner-dark flex flex-col cursor-move">
      <div className="pr-title-bg h-10 flex justify-between items-center pl-4 ">
        <p className="font-mono">Pull Requests / {data.totalCount}</p>
        <div className="w-10 h-full bg-[#111111] flex items-center justify-center">
          <GitPullRequest size={20} color="white" />
        </div>
      </div>
      <motion.div className="max-h-96 overflow-auto custom-scroll-bar">
      {data.edges.sort().map((pr: Edge) => (
        <PullRequestTable isOpen={isOpen} setIsOpen={setIsOpen} key={pr.node.id} node={pr.node} />
      ))}
      </motion.div>
    </motion.div>
  )
}