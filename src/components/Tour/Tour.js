import React, { Component } from 'react';
import './Tour.scss';

export default class Tour extends Component {
  render() {
    return (
      <article className="tour">
          <div className="img-container">
            <img src="https://images.pexels.com/photos/1887629/pexels-photo-1887629.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            <span className="close-btn"><i className="fas fa-window-close" /></span>
          </div>
          <div className="tour-info">
            <h3>city</h3>
            <h4>name</h4>
            <h5>info<span><i className="fas fa-caret-square-down"></i></span></h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, quia. Est itaque alias quis, quasi expedita labore! Repellendus commodi ad consectetur vitae corrupti. Nobis veniam quidem saepe veritatis iusto animi!</p>
          </div>
      </article>
    
      
    )
  }
}
