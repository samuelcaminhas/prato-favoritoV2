import React from 'react'
import { View } from './CardsFood.styles'
import { MdDeleteForever } from 'react-icons/md'

const CardsFood = ({props, getIngredients}) => {
  const { title, image, calories, carbs, fat } = props

  return (
    <View onClick={() => getIngredients([calories,carbs,fat,title])}>
      <div>
        <img src={image} alt={name}/>
        <div>{title}</div>
      </div>
      <div>
        <button onClick={() => alert('deletou papi')}><MdDeleteForever/></button>
      </div>
    </View>
  )
}

export default CardsFood
