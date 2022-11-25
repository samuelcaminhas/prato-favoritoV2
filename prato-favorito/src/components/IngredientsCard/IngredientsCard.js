import React from 'react'
import { View } from './IngredientsCard.styles'

const IngredientsCard = ({ ingredients }) => {
  const [calories, carbs, fat,title] = ingredients

  return (
    <View>
      <div>
        <h2>Ingredientes</h2>
      </div>
      <div>
        <p>{title}</p>
        <ul>
          <li>Calorias: {calories}</li>
          <li>Carboidratos: {carbs}</li>
          <li>Gorduras: {fat}</li>
        </ul>
      </div>
    </View>
  )
}

export default IngredientsCard
