import React from "react";
import DinnerItem from "./DinnerItem";
import pasta from "../../assets/images/pasta.jpeg"
import caesarsalad from "../../assets/images/Caesar.jpeg"
import tacos from "../../assets/images/tacos.jpeg"


const Dinner = ()=>{
  return (
    <>
    <DinnerItem
      title="Caesar Salad"
      description="Caesar salad description"
      url="https://natashaskitchen.com/caesar-salad-recipe/"
      image={caesarsalad}
  
    />
  
    <DinnerItem
      title="Tomato Penne with Avocado"
      description="Pasta description"
      url="https://www.bbcgoodfood.com/recipes/mexican-penne-avocado"
      image={pasta}
  
    />
    
    <DinnerItem
      title="Tacos"
      description="Tacos description"
      url="https://www.chelseasmessyapron.com/healthy-tacos/"
      image={tacos}
  
    />
  
  
  </>
    
   
  )
  
  }
   export default Dinner
  