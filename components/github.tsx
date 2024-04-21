const { GH_TOKEN } = process.env;
import { graphql } from "@octokit/graphql";


export default async function GetRepo() {

  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${GH_TOKEN}`,
    },
  });
  const data = await graphqlWithAuth(`
  {
  user(login: "imhalid") {
    pullRequests(last: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
      nodes{
        title
        url
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
  `);

  console.log(JSON.stringify(data, null, 2));
  return (
    <div>
      Data
    </div>
  )
}