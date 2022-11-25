import React, { useEffect, useState } from 'react'
import { View } from './Dashboard.styles'
import Input from '../../components/Input/Input'
import CardsFood from '../../components/CardsFood/CardsFood'
import IngredientsCard from '../../components/IngredientsCard/IngredientsCard'
import axios from 'axios'

const Dashboard = () => {
  const [foods, setFoods] = useState([])
  const [filteredFoods, setFilteredFoods] = useState([])
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    const getFood = async () => {
      const response = await axios.get('https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=50&number=20&apiKey=be2b0ca70f824c57acb5193f7ff73808&includeNutrition=true')
      setFoods(response.data)
      setFilteredFoods(response.data)
    }
    getFood()
  }, [])

  const getIngredients = (props) => {
    setIngredients(props)
  }

  const getFilterList = (filter) => {
    if (filter === '') setFilteredFoods(foods)
    const filteredList = foods.filter((food) => {
      return food.title.toLowerCase().includes(filter.toLowerCase())
    })
    setFilteredFoods(filteredList)
  }

  return (
    <View>
      <h1>Prato Preferido</h1>
      <div>
        <div>
          <Input getFilterList={getFilterList} />
          <div >
            {filteredFoods.map((food) => <CardsFood key={food.title} props={food} getIngredients={getIngredients} />)}
          </div>
        </div>
        <div>
          <IngredientsCard ingredients={ingredients} />
        </div>
      </div>
    </View>
  )
}

export default Dashboard
