import useGetQuery from "@/state/query/useGetQuery"


const AboutUs = () => {
  const result = useGetQuery('aboutus','/aboutus')
  const data = result || []
  
  return (
    <div>AboutUs</div>
  )
}

export default AboutUs