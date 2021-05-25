import React, { Component } from 'react';
import D8News from './D8News';
import { BaseCarousel } from "./BaseCarousel/BaseCarousel";


const myCarouselItems = [
  {
    id: 1,
    item: (
      <div className="card">
        <img
          className="card-img-top"
          src="https://source.unsplash.com/random/800x400?a=1"
          alt="Card image cap"
         />
        <div className="card-header">
          <h3 className="card-title">Card One</h3>
        </div>
        <div className="card-body">
          <p className="card-text">
            Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua eiusmod tempo.{" "}
          </p>
        </div>
        <div className="card-button">
          <a href="#" className="btn btn-maroon">
            Button link here
          </a>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    item: (
      <div className="card">
        <img
          className="card-img-top"
          src="https://source.unsplash.com/random/800x400?a=2"
          alt="Card image cap"
         />
        <div className="card-header">
          <h3 className="card-title">Card Two</h3>
        </div>
        <div className="card-body">
          <p className="card-text">
            Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua eiusmod tempo.{" "}
          </p>
        </div>
        <div className="card-button">
          <a href="#" className="btn btn-maroon">
            Button link here
          </a>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    item: (
      <div className="card">
        <img
          className="card-img-top"
          src="https://source.unsplash.com/random/800x400?a=3"
          alt="Card image cap"
         />
        <div className="card-header">
          <h3 className="card-title">Card Three</h3>
        </div>
        <div className="card-body">
          <p className="card-text">
            Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua eiusmod tempo.{" "}
          </p>
        </div>
        <div className="card-button">
          <a href="#" className="btn btn-maroon">
            Button link here
          </a>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    item: (
      <div className="card">
        <img
          className="card-img-top"
          src="https://source.unsplash.com/random/800x400?a=4"
          alt="Card image cap"
         />
        <div className="card-header">
          <h3 className="card-title">Card Four</h3>
        </div>
        <div className="card-body">
          <p className="card-text">
            Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua eiusmod tempo.{" "}
          </p>
        </div>
        <div className="card-button">
          <a href="#" className="btn btn-maroon">
            Button link here
          </a>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    item: (
      <div className="card">
        <img
          className="card-img-top"
          src="https://source.unsplash.com/random/800x400?a=5"
          alt="Card image cap"
         />
        <div className="card-header">
          <h3 className="card-title">Card Five</h3>
        </div>
        <div className="card-body">
          <p className="card-text">
            Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua eiusmod tempo.{" "}
          </p>
        </div>
        <div className="card-button">
          <a href="#" className="btn btn-maroon">
            Button link here
          </a>
        </div>
      </div>
    ),
  },
];


class NewsDisplay extends Component {
  render() {
    return (<BaseCarousel perView="3" carouselItems={myCarouselItems} />);
  }
}

export default NewsDisplay;