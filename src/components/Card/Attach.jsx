import React from 'react'
import heart from '@/assets/images/Heart-outline.svg'
import  message from '@/assets/images/message-square-outline.svg'
import attach from '@/assets/images/attach-outline.svg'
const Attach = () => {
  return (
    <div className="flex gap-2">
    <span>50</span>
    <img src={message} />

    <span>50</span>
    <img src={heart} />

    <span>50</span>
    <img src={attach} />


</div>
  )
}

export default Attach