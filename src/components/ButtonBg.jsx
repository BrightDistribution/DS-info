import React from 'react'

function ButtonBg(props) {
  return (
    <div>
        <button className='buttonS w-[160px] h-[80px] text-xl m-[20px] rounded-2xl'>{props.text}</button>
    </div>
  )
}

export default ButtonBg