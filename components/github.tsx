const { GH_TOKEN } = process.env;
import { graphql } from "@octokit/graphql";

interface Commit {
  commit: {
    statusCheckRollup: null | string;
    url: string;
    message: string;
    author: {
      avatarUrl: string;
    };
  };
}

interface PullRequest {
  title: string;
  url: string;
  closed: boolean;
  createdAt: string;
  closedAt: string;
  commits: {
    nodes: Commit[];
  };
}

interface Issue {
  title: string;
  closed: boolean;
  url: string;
  author: {
    avatarUrl: string;
  };
  repository: {
    name: string;
    homepageUrl: string;
  };
}

interface UserDataProps {
  data: {
    user: {
      pullRequests: {
        nodes: PullRequest[];
      };
      issues: {
        nodes: Issue[];
      };
    };
  };
}

export default async function GetRepo() {

  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${GH_TOKEN}`,
    },
  });
  const { data } = await graphqlWithAuth(`{
  user(login: "imhalid") {
    pullRequests(last: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
      nodes{
        title
        url
        closed
        createdAt
        closedAt
        commits(first: 50) {
          nodes {
            commit {
              statusCheckRollup{
                state
              }
              url
              message
              author{
                avatarUrl
              }
            }
          }
        }
      }
    }
    issues(last: 100, orderBy: {field: CREATED_AT, direction: DESC}){
      nodes {
        title
        closed
        url
        author{
          avatarUrl
        }
        repository {
          name
          homepageUrl
          }
        }
      }
    }
  }
  `) as UserDataProps


  return (
    <div>
      <h2>Pull Requests</h2>
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
          {data.pullRequests.nodes.map((pr: PullRequest) => (
            <tr key={pr.url}>
              <td>{pr.title}</td>
              <td>{pr.url}</td>
              <td>{pr.closed ? 'Closed' : 'Open'}</td>
              <td>{pr.createdAt}</td>
              <td>{pr.closedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Issues</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>URL</th>
            <th>Status</th>
            <th>Repository</th>
            <th>Homepage URL</th>
          </tr>
        </thead>
        <tbody>
          {data.issues.nodes.map((issue: Issue) => (
            <tr key={issue.url}>
              <td>{issue.title}</td>
              <td>{issue.url}</td>
              <td>{issue.closed ? 'Closed' : 'Open'}</td>
              <td>{issue.repository.name}</td>
              <td>{issue.repository.homepageUrl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}