import React from 'react'

const Heading = ({headingText}) => {
  return (
    <>
      <div className='max-md:text-center'>
        <h1 className="text-4xl text-[#203933] font-bold mb-4 ">
          {headingText}.
        </h1>
        <p className="underLine max-md:m-auto"></p>
      </div>
    </>
  )
}

export default Heading