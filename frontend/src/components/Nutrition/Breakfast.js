import { Center } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import BreakfastItem from "./BreakfastItem";
import avocado from "../../assets/images/avocado-egg.jpeg"
import oatmeal from "../../assets/images/oatmeal.jpeg"
import smoothie from "../../assets/images/smoothie.jpeg"


const Breakfast = ()=>{
return (
  <>
  <BreakfastItem
    title="Avocado and Toast"
    description="Avocado description"
    url="https://feelgoodfoodie.net/recipe/avocado-toast-with-egg-3-ways/"
    image={avocado}

  />

<BreakfastItem
    title="Oatmeal with Assorted Berries"
    description="Berries description"
    url="https://lovelylittlekitchen.com/triple-berry-oatmeal-breakfast-bowl/"
    image={oatmeal}

  />
  
  <BreakfastItem
    title="Quick breakfast smoothie"
    description="Smoothie description"
    url="https://fitfoodiefinds.com/the-best-breakfast-smoothie/"
    image={smoothie}

  />


</>
  


 
)

}
 export default Breakfast
