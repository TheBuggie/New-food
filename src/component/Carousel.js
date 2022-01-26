import React from "react";
import Carousel1 from "./Carousel1";

export default function Carousel() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="card cardStyle">
            <div class="card-body">
              <h1 class="card-title ">Get tiifin service from your favorite Restaurants</h1>
              <p class="card-text h5"> Hygienic, Mouth-watering and Good-quality Food 
              – all at one place Delicious and Affordable Food from your favorite Bhojanalayas and Restaurants
              </p>
              <a href="#" class="btn btn-primary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
            <Carousel1/>
        </div>
      </div>
    </div>
  );
}
