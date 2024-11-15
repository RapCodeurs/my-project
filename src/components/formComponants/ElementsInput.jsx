import { useState } from "react"

const ElementsInput = ({constante, title, type, callback}) => {
  return (
    <div className="">
      <label htmlFor={constante} className="mb-2 block">{title} : {" "}</label>
      <input type={type} value={constante} 
      onChange={(e)=>callback(e.target.value)}
      id={constante}
      required
      className="border border-gray-300 mb-4 p-2 w-full"
      />
    </div>
  )
}

export default ElementsInput
