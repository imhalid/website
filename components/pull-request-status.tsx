export default function PullRequestStatus({ node }: { node: boolean }) {
  const StatusBadge = (status: boolean) => {
    switch (status) {
      case true:
        return (
          <div className='bg-[#60319c] w-1 h-3 rounded-md shadow-pr-merge' />
        )
      case false:
        return (
          <div className='bg-red-500 w-1 h-3 rounded-md shadow-pr-reject' />
        )
      default:
        return (
          <div className='bg-blue-500 rounded-full px-2 py-1' />
        )
    }
  }

  return (
    <div className='absolute left-2'>
      {StatusBadge(node)}
    </div>
  )
}