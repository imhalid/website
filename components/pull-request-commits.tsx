import {Commits, Edge2} from '@/types/pull-request'
import LineDash from './line-dash'
  import { format } from 'date-fns';

export default function PullRequestCommits({ commits }: { commits: Commits }) {

const timeFormatter = (date: string) => {
    return format(new Date(date), 'dd.MM.yy / HH:mm');
}
  return (
    <div>{
      commits.edges.map((item: Edge2)=> {
        const { commit } = item.node
        return (
          <div className='flex items-center text-xs px-7 py-1 text-neutral-300' key={commit.id}>
            <p className='whitespace-nowrap'>{commit.message}</p>
            <LineDash />
            <p className='whitespace-nowrap'>{timeFormatter(commit.committedDate)}</p>
          </div>
        )
      })
      }</div>
  )
}