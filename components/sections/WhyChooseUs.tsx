import useGetQuery from "@/state/query/useGetQuery"


const WhyChooseUs = () => {
    const result = useGetQuery('whychooseus','/whychooseus')
  const data = result || []
  return (
    <div>WhyChooseUs</div>
  )
}

export default WhyChooseUs