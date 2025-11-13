import useGetQuery from "@/state/query/useGetQuery"


const Services = () => {
    const result = useGetQuery('services','/services')
  const data = result || []
  return (
    <div>Services</div>
  )
}

export default Services