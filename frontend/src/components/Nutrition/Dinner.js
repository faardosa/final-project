import React from "react";
import DinnerItem from "./DinnerItem";
import healthypasta from "../../assets/images/healthypasta.jpg"
import caesarsalad from "../../assets/images/Caesar.jpeg"
import tacos from "../../assets/images/tacos.jpeg"


const Dinner = ()=>{
  return (
    <>
    <DinnerItem
      title="Caesar Salad"
      description="A tossed salad filled with great nutrients. A light and easy meal for those busy nights."
      url="https://natashaskitchen.com/caesar-salad-recipe/"
      image={caesarsalad}
  
    />
  
    <DinnerItem
      title="Tomato Penne with Avocado"
      description="This easy, healthy pasta recipe will fulfill all your needs for a simple weeknight meal that's also good for you."
      url="https://www.bbcgoodfood.com/recipes/mexican-penne-avocado"
      image={healthypasta}
  
    />
    
    <DinnerItem
      title="Tacos"
      description="Super easy, quick and flavorful! You never have to miss out on another Taco Tuesday again!"
      url="https://www.chelseasmessyapron.com/healthy-tacos/"
      image={tacos}
  
    />
  
  
  </>
    
   
  )
  
  }
   export default Dinner
  