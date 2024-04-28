import { Node } from '@/types/pull-request'
import Seperator from './seperator'
import { motion, AnimatePresence } from 'framer-motion'
import PullRequestStatus from './pull-request-status'
import { ShieldCheck } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import ArrowSvg from './arrow-svg'
import PullRequestCommits from './pull-request-commits'
import LineDash from './line-dash'

export default function PullRequestTable({ node, isOpen, setIsOpen }: { node: Node; isOpen: string; setIsOpen: React.Dispatch<React.SetStateAction<string>> }) {

const expanded = node.id === isOpen
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
        key={node.id}
        animate={{ backgroundColor: expanded ? '#111111' : '#0d0d0d' }}
        onClick={() => setIsOpen(expanded ? '' : node.id)}
        className='bg-[#0d0d0d] relative w-full transition-all'>
        <div className='h-16 flex items-center justify-between px-7'>
          <div className='flex flex-col w-full'>
            <div className='flex items-center'>
              {node.commits.edges.length > 0 && <ArrowSvg key={node.id} clicked={expanded} />}
              <p className='font-mono text-sm w-fit pl-1 whitespace-nowrap'>{node.title}</p>
             <LineDash />
              <p className='text-xs text-neutral-500 whitespace-nowrap'>{formatDate(node.closedAt ?? '')}</p>
            </div>
            <p className='text-xs text-neutral-500 flex items-center gap-1'>
              <i className='shield-shadow'>
                <ShieldCheck size={14} color='#B0DA38' />
              </i>
              {generateRepoName(node.url)}</p>
          </div>

          <PullRequestStatus node={node.closed} />
        </div>
        <Seperator />
      </motion.button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key={node.id}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className='w-full h-auto bg-neutral-900'>
            <PullRequestCommits commits={node.commits} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}