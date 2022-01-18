import React from "react";
import Carousel1 from "./Carousel1";

export default function Carousel() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body cardStyle">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
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
