import React from 'react'

const CourseCard = ({cardData, currentCard, setCurrentCard}) => {
  return (
    <div>
        <h2>
            {cardData.heading}
        </h2>
        <p>{cardData.description}</p>
        <hr />
        
    </div>
  )
}

export default CourseCard