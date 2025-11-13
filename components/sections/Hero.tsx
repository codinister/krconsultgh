import useGetQuery from "@/state/query/useGetQuery"


const Hero = () => {
    const result = useGetQuery('hero','/hero')
  const data = result || []
  return (
    <div>Hero</div>
  )
}

export default Hero