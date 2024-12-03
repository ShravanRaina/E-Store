import React from 'react'

const Category = ({id, title, onCategoryClick}) => {
  return (
    <div onClick={()=>onCategoryClick(id)} key={id}>{title}</div>
  )
}

export default Category