import React from 'react'
import * as S from './Input.styles'
import { BiSearchAlt } from 'react-icons/bi'

const Input = ({getFilterList}) => {
  return (
    <S.Root>
      <input onChange={(e => getFilterList(e.target.value))}/>
    </S.Root>
  )
}

export default Input
