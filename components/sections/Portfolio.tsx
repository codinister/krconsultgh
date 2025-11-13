import useGetQuery from "@/state/query/useGetQuery"


const Portfolio = () => {
    const result = useGetQuery('portfolio','/portfolio')
  const data = result || []
  return (
    <div>Portfolio</div>
  )
}

export default Portfolio