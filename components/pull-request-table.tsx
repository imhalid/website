import { PullRequests, Node } from '@/types/pull-request'
import Seperator from './seperator'
import PullRequestStatus from './pull-request-status'
import { ShieldCheck } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
export default function PullRequestTable({ node }: { node: Node }) {

  // create a function that name is 'generateRepoName' and it will return the repository name with this url https://github.com/ademilter/zelzele/pull/8 expect return value is 'ademilter/zelzele'

  const generateRepoName = (url: string) => {
    const splitUrl = url.split('/')
    return `${splitUrl[3]}/${splitUrl[4]}`
  }


  // create a date formatter function that name is 'formatDate' and it will return the formatted date like this '3 weaks ago' from this date '2022-01-01T00:00:00Z'. use with Intl.DateTimeFormat



  const formatDate = (date: string) => {

    if (!date) return 'not closed yet'
    const formattedDate = formatDistanceToNow(new Date(date), { addSuffix: true })
    return formattedDate
  }

  return (
    <div className='bg-[#0d0d0d] relative '>
      <div className='h-16 flex items-center justify-between px-7'>
        <div className='flex flex-col w-full'>
          <div className='flex items-center'>
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
    </div>
  )
}