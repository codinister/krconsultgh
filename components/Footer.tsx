import useGetQuery from "@/state/query/useGetQuery"


const Footer = () => {
    const result = useGetQuery('settings','/settings')
    const data = result || []
  return (
    <div>Footer</div>
  )
}

export default Footer