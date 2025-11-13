import useGetQuery from "@/state/query/useGetQuery"

const Analytics = () => {
    const result = useGetQuery('analytics','/analytics')
  const data = result || []
  return (
    <div>Analytics</div>
  )
}

export default Analytics