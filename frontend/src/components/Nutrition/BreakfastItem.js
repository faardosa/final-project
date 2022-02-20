

const BreakfastItem = (props)=>{
    const {title, description, url, image} = props



  return (
<div className="wrapper"> 
    <h1>
     Below are a few breakfast meal options.
    </h1>

   
  <div className="breakfast-wrapper"> 
  <div className="breakfast-left">
  <p style={{textAlign:"center"}}> {title}</p>
  <p className="breakfast-description">  {description} </p>

<div className='recipe-tag'>
      <a className="recipe" target="_blank" href={url}>
      
      Click here for recipe
        
        </a>  
      
    </div> 

  </div>
  
  <img className="breakfast" src={image} alt="breakfast" />
    </div>    

    </div>
  )



}

export default BreakfastItem