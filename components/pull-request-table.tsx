'use client'
import { Node } from '@/types/pull-request'
import Seperator from './seperator'
import { motion, AnimatePresence } from 'framer-motion'
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
    <>
      <motion.button
        layout
        initial={false}
        key={node.title}
        animate={{ backgroundColor: isOpen ? '#1a1a1a' : '#0d0d0d' }}
        onClick={() => setIsOpen(!isOpen)}
        className='bg-[#0d0d0d] relative w-full transition-all'>
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
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={node.commits.edges[0].node.commit.message}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className='w-full h-auto bg-lime-500'>
            <p className='text-sm text-neutral-500'>{node.commits.edges[0].node.commit.message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}