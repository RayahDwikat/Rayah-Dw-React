import React from 'react';
import { RatingStars } from '../components/RatingStars';

export function Details({ id, name, image, topic, rating, category,description, subtopics}) {


return (
<>
<article class="article">
<div class="article-desc details-container">
    <div>
        <p class="type">{category}</p>
        <h1><div>{topic}</div></h1>
    </div>
    <RatingStars rating={rating} /> 
    <div class="topic-desc">
        <p>{description}</p>
    </div>

     <div class="favoruite-card">
        <img  src= {require(`../Assets/${image}`)} alt="text" />
        <div class="favoruite-info">
            <p class="card-author"><strong>HTML <span>by</span> <a class="author-name" href="#">Sarah
                        Smith</a></strong></p>
            <div class="fav">
                <p class="fav-paragraph">Interested about this topic?</p>
                <div class="add-fav">
                    <button class="fav-button">Add to Favourites <ion-icon name="heart-outline"
                            class="icon fav-heart"></ion-icon></button>
                </div>
                <p class="unlimited">Unlimited Credits</p>
            </div>
        </div>
    </div>
</div>
</article>

<section class="details-container">
<main class="main ">
    <h2>HTML Sub Topics</h2>
    <ul>
    {subtopics.map((text)=>{
            return <li key={text}>
            <ion-icon
              name="checkmark-circle-outline"
              class="topics--icon"
              role="img"></ion-icon>
            <span>{text}</span>
          </li>
           })}
    </ul>
</main>
</section>
</>
);
};