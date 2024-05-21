import React from 'react'

function ButtonSm(props) {
  return (
    <div>
        <button className='buttonS text-lg m-[10px] w-[100px] h-[40px] rounded-lg'>{props.text}</button>
    </div>
  )
}

export default ButtonSm