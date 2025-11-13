
const Button = ({name,classname}: {name: string; classname: string}) => {
  return (
    <button className={classname}>
      {name}
    </button>
  )
}

export default Button