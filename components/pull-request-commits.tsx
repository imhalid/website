import {Commits, Edge2} from '@/types/pull-request'
export default function PullRequestCommits({ commits }: { commits: Commits }) {
  return (
    <div>{
      commits.edges.map((item: Edge2)=> {
        const { commit } = item.node
        return (
          <div key={commit.id}>
            <p>{commit.message}</p>
            <p>{commit.committedDate}</p>
          </div>
        )
      })
      }</div>
  )
}