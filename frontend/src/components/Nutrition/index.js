import React from "react";
import "./nutrition.css";
import { Link } from "react-router-dom";

export default function Nutrition({meals}) {
  const mealsList = Object.values(meals).map((meal)=>{
      return ( <div>
         <Link className="meal-header" to ={`/mealpage/${meal.header}`}> {meal.header} </Link> 
        <p className="breakfast-meals">
          {/* {"\n"} Here are some delicious protein filled meals to keep you full and satisified throughout the day. */}
          {/* <ul>
            {meal.items.map((item) => {
                  return ( <li> <Link to ={`/recipe/${item.name}`}> {item.name} </Link> </li> )

              })
            }
           
          </ul> */}
        </p>
      </div>) 

  })

  

  return (
    <div>
      {/* <h2 className="nutrition">MEAL PLANS</h2> */}

      
      <img alt="nutrition-banner" className="nutrition-banner" src="images/nutrition-banner.gif" />

      <p className="intro">
       Click on the headings below for a few great meal plans.
      </p>


      <div className="flex-container">
        {mealsList}




        {/* <div>
          <p className="breakfast-heading"> Breakfast </p>
          <p className="breakfast-meals">
            {"\n"} Here are some delicious protein filled breakfast options
            <ul>
              <li> <Link to ="recipe"> Avocado toast with egg </Link>
              </li>
              <li>Flax seed oatmeal</li>
              <li>Yogurt parfait with assorted berries</li>
            </ul>
          </p>
        </div>

        <div>
          Lunch
          <p>
            {"\n"} Here are some delicious protein filled lunch options
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </p>
        </div>

        <div>
          Dinner
          <p>
            {"\n"} Here are some delicious protein filled dinner options
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>{" "}
          </p>
        </div> */}
      </div>
    </div>
  );
}
