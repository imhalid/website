import { PullRequests, PullRequestsNode } from "./github"

export default function PrTable({ user }: { user: PullRequests }) {
  console.log(user)
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>URL</th>
          <th>Status</th>
          <th>Created At</th>
          <th>Closed At</th>
        </tr>
      </thead>

      <tbody>
        {user.nodes?.map((pr: PullRequestsNode ) => (
            <tr key={pr.url}>
              <td>{pr.title}</td>
              <td>{pr.url}</td>
              <td>{pr.closed ? 'Closed' : 'Open'}</td>
            <td>{pr.createdAt ? pr.createdAt.toString() : '----'}</td>
            <td>{pr.closedAt  ? pr.closedAt.toString() : '---'}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}