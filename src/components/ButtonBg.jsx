import React from 'react'

function ButtonBg(props) {
  return (
    <div>
        <button className='buttonS w-[140px] h-[60px] text-xl m-[20px] rounded-2xl'>{props.text}</button>
    </div>
  )
}

export default ButtonBg