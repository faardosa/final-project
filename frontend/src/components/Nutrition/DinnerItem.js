
const DinnerItem = (props)=>{
  const {title, description, url, image} = props



return (
 
<div className="maindinner-wrapper"> 
<h1>
   Below are a few dinner meal options.
  </h1>


  <div class="dinner-wrapper">
    <div class="card">
      <div class="card-img-body">
      <img className="dinner" src={image} alt="Card image cap"/>
      </div>
      <div class="card-body">
        <h4 class="card-title">{title}</h4>
        <p style={{textAlign:"center"}} class="card-text">{description}</p>
        <a href={url} class="btn btn-outline-primary">Recipe</a>
    </div>

    </div>
    </div>
    </div>



)

}

export default DinnerItem;