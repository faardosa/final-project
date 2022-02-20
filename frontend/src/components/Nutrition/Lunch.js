import React from "react";
import LunchItem from "./LunchItem";
import wrap from "../../assets/images/lettuce-wrap.png"
import salmon from "../../assets/images/salmon.jpeg"
import chickensalad from "../../assets/images/chickensalad.jpeg"


const Lunch = ()=>{
  return (
    <>
    <LunchItem
      title="Mediterranean Grilled Chicken Salad"
      description="Chicken salad description"
      url="https://www.delish.com/cooking/recipe-ideas/a21097616/grilled-chicken-salad-recipe/"
      image={chickensalad}
  
    />
  
    <LunchItem
      title="Chicken Lettuce Wraps"
      description="Chicken Lettuce Wraps description"
      url="https://www.tasteofhome.com/recipes/chicken-lettuce-wraps/"
      image={wrap}
  
    />
    
    <LunchItem
      title="Oven Baked Salmon and Asparagus"
      description="Oven Baked Salmon and Asparagus description"
      url="https://diethood.com/oven-baked-salmon/"
      image={salmon}
  
    />
  
  
  </>
    
   
  )
  
  }
   export default Lunch
  