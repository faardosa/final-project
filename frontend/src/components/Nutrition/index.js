import React from "react";
import "./nutrition.css";

export default function Nutrition() {
  return (
    <div>
      <h2 className="nutrition">MEAL PLANS</h2>

      <p className="intro">
        Meal plans are just as important as fitness. We need to ensure we are
        eating right, in order to feel right. Eat good, feel good.
      </p>

      <div className="flex-container">
        <div>
          <p className="breakfast-heading"> Breakfast </p>
          <p className="breakfast-meals">
            {"\n"} Here are some delicious protein filled breakfast options
            <ul>
              <li>Avocado toast with egg</li>
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
        </div>
      </div>
    </div>
  );
}
