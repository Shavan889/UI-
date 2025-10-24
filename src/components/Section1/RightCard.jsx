import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    return (
        <div className='h-full shrink-0 w-80 overflow-hidden rounded-4xl relative'>
            <img className='h-full object-cover' src={props.img} alt="" />
          <RightCardContent tag={props.tag} color={props.color} id={props.id}/>
        </div>
    )
}

export default RightCard