const LunchItem = (props)=>{
  const {title, description, url, image} = props



return (
<div className="mainlunch-wrapper"> 
  <h1>
   Below are a few lunch meal options.
  </h1>

 
<div className="lunch-wrapper"> 
<div className="lunch-left">
<p style={{textAlign:"center"}}> {title}</p>
<p className="lunch-description">  {description} </p>

<div className='lunch-recipe-tag'>
    <a className="lunch-recipe" target="_blank" href={url}>
    
    Click here for recipe
      
      </a>  
    
  </div> 

</div>

<img className="lunch" src={image} alt="lunch" />
  </div>    

  </div>
)



}

export default LunchItem