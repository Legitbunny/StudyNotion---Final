import React from 'react'

const HighlightText = ({text}) => {
  return (
    <span className='font-bold text-blue-100 highight_text_gradient'>
        {" "}
        {text}
    </span>
  )
}

export default HighlightText