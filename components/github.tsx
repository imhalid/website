const { GH_TOKEN } = process.env;
import { graphql } from "@octokit/graphql";
import PrTable from "./pull-request";
import { User } from "@/types/pull-request";



export default async function GetRepo() {

  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${GH_TOKEN}`,
    },
  });
  const { user : { pullRequests } }: { user: User } = await graphqlWithAuth(`{
  user(login: "imhalid") {
    pullRequests(last: 50, orderBy: {field: CREATED_AT, direction: DESC}) {
      totalCount
      edges {
        node {
          number
          title
          state
          closed
          merged
          additions
          deletions
          createdAt
          closedAt
          url
          commits(last: 50) {
            edges {
              node {
                commit {
                  message
                  url
                  committedDate
                }
              }
            }
          }
          repository {
            url
            name
          }
        }
      }
    }
  }
}
  `)
  return (
    <div>
      <PrTable data={pullRequests} />
    </div>
  );
}