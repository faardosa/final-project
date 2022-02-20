
const DinnerItem = (props)=>{
  const {title, description, url, image} = props



return (
<div className="maindinner-wrapper"> 
  <h1>
   Below are a few dinner meal options.
  </h1>

 
<div className="dinner-wrapper"> 
<div className="dinner-left">
<p style={{textAlign:"center"}}> {title}</p>
<p className="dinner-description">  {description} </p>

<div className='dinner-recipe-tag'>
    <a className="dinner-recipe" target="_blank" href={url}>
    
    Click here for recipe
      
      </a>  
    
  </div> 

</div>

<img className="dinner" src={image} alt="dinner" />
  </div>    

  </div>
)



}

export default DinnerItem