import { PullRequests, Node } from '@/types/pull-request'
import Seperator from './seperator'
import PullRequestStatus from './pull-request-status'
export default function PullRequestTable({ node }: { node: Node }) {

  // create a function that name is 'generateRepoName' and it will return the repository name with this url https://github.com/ademilter/zelzele/pull/8 expect return value is 'ademilter/zelzele'

  const generateRepoName = (url: string) => {
    const splitUrl = url.split('/')
    return `${splitUrl[3]}/${splitUrl[4]}`
  }

  return (
    <div className='bg-[#0d0d0d] relative text-sm'>
      <div className='h-16 flex items-center justify-between px-5'>
        <div className='flex flex-col'>
          <p>{node.title}</p>
          <p className='text-xs text-neutral-500'>{generateRepoName(node.url)}</p>
        </div>
        <PullRequestStatus node={node.closed} />
      </div>
      <Seperator />
    </div>
  )
}