import Breakfast from "./Breakfast"



const BreakfastItem = (props)=>{
    const {title, description, url, image} = props



  return (
<div className="breakfast-wrapper"> 
    <h1>
     Below are a few breakfast meal options.
    </h1>

   
  <div className="avocado-wrapper"> 
  <div className="avocado-left">
  <p style={{textAlign:"center"}}> {title}</p>
  <p className="avocado-description">  {description} </p>

<div className='recipe-tag'>
      <a className="recipe" target="_blank" href={url}>
      
      Click here for recipe
        
        </a>  
      
    </div> 

  </div>
  
  <img className="avocado" src={image} alt="avocado-egg" />
    </div>    

    </div>
  )



}

export default BreakfastItem