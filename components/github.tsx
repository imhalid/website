const { GH_TOKEN } = process.env;
import { graphql } from "@octokit/graphql";
import PrTable from "./pr-table";

export interface Welcome {
  pullRequests?: PullRequests;
  issues?: Issues;
}

export interface Issues {
  nodes?: IssuesNode[];
}

export interface IssuesNode {
  title?: string;
  closed?: boolean;
  url?: string;
  author?: Author;
  repository?: Repository;
}

export interface Author {
  avatarUrl?: string;
}

export interface Repository {
  name?: string;
  homepageUrl?: string;
}

export interface PullRequests {
  nodes?: PullRequestsNode[];
}

export interface PullRequestsNode {
  title?: string;
  url?: string;
  closed?: boolean;
  createdAt?: Date;
  closedAt?: Date;
  commits?: Commits;
}

export interface Commits {
  nodes?: CommitsNode[];
}

export interface CommitsNode {
  commit?: Commit;
}

export interface Commit {
  statusCheckRollup?: null;
  url?: string;
  message?: string;
  author?: Author;
}


export default async function GetRepo() {

  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${GH_TOKEN}`,
    },
  });
  const { user }: { user: Welcome } = await graphqlWithAuth(`{
  user(login: "imhalid") {
    pullRequests(last: 1, orderBy: {field: CREATED_AT, direction: DESC}) {
      nodes{
        title
        url
        closed
        createdAt
        closedAt
        commits(first: 1) {
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
    issues(last: 1, orderBy: {field: CREATED_AT, direction: DESC}){
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
  `)
  return (
    <div>
      <h2>Pull Requests</h2>
      <PrTable user={user.pullRequests ?? {}} />
    </div>
  );
}