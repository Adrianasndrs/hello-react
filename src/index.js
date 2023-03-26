import React from 'react';
import ReactDOM from 'react-dom/client';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const CarouselPage = () => {
    return ( 
      <Carousel>
        <div>
          <img src="https://placehold.co/100x100" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://placehold.co/200x200" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://placehold.co/300x300" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  };
  
  export default CarouselPage;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
