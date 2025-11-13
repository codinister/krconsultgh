import useGetQuery from "@/state/query/useGetQuery"


const Contact = () => {
    const result = useGetQuery('settings','/settings')
  const data = result || []
  return (
    <div>Contact</div>
  )
}

export default Contact