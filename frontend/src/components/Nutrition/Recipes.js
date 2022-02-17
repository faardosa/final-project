import { useParams } from "react-router";

export default function Recipe({recipes}) {
  const params = useParams() 
  const recipe = recipes[params.name]

  console.log(recipe)

  if (!recipe) {
return "Recipe not found"
  }
  
  return (
  <div> 
    {recipe.description}
     </div>
    ) 
  
  
  ;

}
