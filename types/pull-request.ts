export interface Root {
  data: Data
}

export interface Data {
  user: User
}

export interface User {
  pullRequests: PullRequests
}

export interface PullRequests {
  totalCount: number
  edges: Edge[]
}

export interface Edge {
  node: Node
}

export interface Node {
  number: number
  title?: string
  state: string
  closed: boolean
  merged: boolean
  additions: number
  deletions: number
  createdAt: string
  closedAt?: string
  url: string
  commits: Commits
  repository: Repository
}

export interface Commits {
  edges: Edge2[]
}

export interface Edge2 {
  node: Node2
}

export interface Node2 {
  commit: Commit
}

export interface Commit {
  message: string
  url: string
}

export interface Repository {
  url: string
  name: string
}