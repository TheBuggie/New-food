import React from "react";
import "../css/Card.css";

export default function Card() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="card cardStyle" style={{ width: "24rem" }}>
            <div>
              <p>
                <h1>Heading </h1>
              </p>
            </div>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
              class="card-img-top"
              alt="Sunset Over the Sea"
            />
            <div class="card-body">
              <p class="card-text h5">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card cardStyle" style={{ width: "24rem" }}>
            <div>
              <p>
                <h1>Heading </h1>
              </p>
            </div>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
              class="card-img-top"
              alt="Sunset Over the Sea"
            />
            <div class="card-body">
              <p class="card-text h5">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card cardStyle h5" style={{ width: "24rem" }}>
            <div>
              <p>
                <h1>Heading </h1>
              </p>
            </div>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
              class="card-img-top"
              alt="Sunset Over the Sea"
            />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
