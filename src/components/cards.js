import React from 'react';
import { Link } from 'react-router-dom';
import { RatingStars } from './RatingStars';
import './index.css';
import { Details } from '../pages/Details';

export const Cards = ({ image , id, category,topic, rating ,name}) => {
  return (
    <section class="courses container">
    <Link to={`/details/${id}`} className="course-card">
      <img src={require(`../Assets/${image}`)} alt="text" />
      <div className="card-info">
        <div className="card-description">
          <h4 className="web-course">{category}</h4>
          <h4 className="course-name">{topic}</h4>
        </div>
        <section className="card-footer">
          <RatingStars rating={rating} /> 
          <div className="course-author">
            <p>Author: {name}</p>
          </div>
        </section>
      </div>
    </Link>
    </section>
  );
};
