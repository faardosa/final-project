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
      description="This salad recipe is as close to perfect as you can get! Full of flavours made for a complete meal."
      url="https://www.delish.com/cooking/recipe-ideas/a21097616/grilled-chicken-salad-recipe/"
      image={chickensalad}
  
    />
  
    <LunchItem
      title="Chicken Lettuce Wraps"
      description="Filled with chicken, mushrooms, water chestnuts and carrots, these lettuce wraps are both healthy and yummy."
      url="https://www.tasteofhome.com/recipes/chicken-lettuce-wraps/"
      image={wrap}
  
    />
    
    <LunchItem
      title="Oven Baked Salmon and Asparagus"
      description="Made with a lot of flavours, this tasty salmon recipe is the answer to busy nights and special occasions alike!"
      url="https://diethood.com/oven-baked-salmon/"
      image={salmon}
  
    />
  
  
  </>
    
   
  )
  
  }
   export default Lunch
  