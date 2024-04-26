'use client'
import { Node } from '@/types/pull-request'
import Seperator from './seperator'
import PullRequestStatus from './pull-request-status'
import { ShieldCheck } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import ArrowSvg from './arrow-svg'
import { useState } from 'react'
export default function PullRequestTable({ node }: { node: Node }) {
  const [isOpen, setIsOpen] = useState(false)

  const generateRepoName = (url: string) => {
    const splitUrl = url.split('/')
    return `${splitUrl[3]}/${splitUrl[4]}`
  }

  const formatDate = (date: string) => {
    if (!date) return 'not closed yet'
    return formatDistanceToNow(new Date(date), { addSuffix: true })
  }

  return (
    <button
    onClick={() => setIsOpen(!isOpen)}
    className='bg-[#0d0d0d] relative w-full'>
      <div className='h-16 flex items-center justify-between px-7'>
        <div className='flex flex-col w-full'>
          <div className='flex items-center'>
            <ArrowSvg key={node.title} clicked={isOpen} />
            <p className='font-mono text-sm w-fit whitespace-nowrap'>{node.title}</p>
            <div className='w-full border-b border-dashed border-neutral-700 mx-3'></div>
            <p className='text-xs text-neutral-500 whitespace-nowrap'>{formatDate(node.closedAt ?? '')}</p>
          </div>
          <p className='text-xs text-neutral-500 flex items-center gap-1'>
            <i>
              <ShieldCheck size={14} color='#B0DA38' />
            </i>
            {generateRepoName(node.url)}</p>
        </div>

        <PullRequestStatus node={node.closed} />
      </div>
      <Seperator />
    </button>
  )
}