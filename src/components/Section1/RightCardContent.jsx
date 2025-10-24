import React from 'react'

const RightCardContent = (props) => {
  return (
     <div className="absolute top-0 h-full w-full left-0  p-8 flex flex-col justify-between">
                <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-xl font-semibold'>{props.id+1}</h2>
                <div className="">
                    <p className='text-shadow-2xs text-xl leading-relaxed text-white mb-10'>Prime customers,<br /> that have access <br /> to bank credit <br /> and are satisfied <br /> with the current <br /> product</p>
                    <div className="flex justify-between">
                        <button style={{backgroundColor:props.color}} className='text-white font-medium px-8 py-3 pr-15 rounded-full text-2xl'>{props.tag}</button>
                        <button style={{backgroundColor:props.color}} className='text-white font-medium px-4 py-3 rounded-full text-2xl' ><i className='ri-arrow-right-line'></i></button>
                    </div>
                </div>
            </div>
  )
}

export default RightCardContent