

const ButtonMain = ({text, action}) => {
    return (
      <button className= 'bg-primary rounded-lg text-white text-xs py-2 font-medium mb-3'  onClick={action}>{text}</button>
    )
  }
  export default ButtonMain