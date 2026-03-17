import React from 'react'

const Card = ({children,style}) => {
  return (
    <div className={`shadow-md ${style?.shadow} rounded-lg text-white cursor-pointer duration-500 m-2`}>
      {children}
    </div>
  )
}

export default Card
