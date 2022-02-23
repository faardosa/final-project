import React from "react";
import BreakfastItem from "./BreakfastItem";
import avocado from "../../assets/images/avocado-egg.jpeg"
import oatmeal from "../../assets/images/oatmeal.jpeg"
import smoothie from "../../assets/images/smoothie.jpeg"


const Breakfast = ()=>{
return (
  <>
  <BreakfastItem
    title="Avocado and Toast"
    description="It’s a simple healthy protein-packed breakfast, snack or light meal! Simple to make, tasty and satisfying."
    url="https://feelgoodfoodie.net/recipe/avocado-toast-with-egg-3-ways/"
    image={avocado}

  />

<BreakfastItem
    title="Oatmeal with Assorted Berries"
    description="An easy, healthy and delicious breakfast! Great for a quick and simple meal!"
    url="https://lovelylittlekitchen.com/triple-berry-oatmeal-breakfast-bowl/"
    image={oatmeal}

  />
  
  <BreakfastItem
    title="Quick breakfast smoothie"
    description="Start your day off right with this protein-packed smoothie. It will keep you feeling satisfied until lunch."
    url="https://fitfoodiefinds.com/the-best-breakfast-smoothie/"
    image={smoothie}

  />


</>
  


 
)

}
 export default Breakfast
