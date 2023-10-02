import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RatingStars } from '../components/RatingStars';
import "../CSS/styles.css";


export const Details = () => {
  const { id } = useParams(); 
  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    fetch(`https://tap-web-1.herokuapp.com/topics/details/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTopic(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching item:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

 

  return (<>
    <article class="article">
        <div class="article-desc details-container">
            <div>
                <p class="type">{topic.category}</p>
                <h1><strong>{topic.topic}</strong></h1>
            </div>
            <RatingStars/>
            <div class="topic-desc">
                <p>{topic.description}</p>
            </div>

             <div class="favoruite-card">
                <img src={require(`../Assets/${topic.image}`)} alt={topic.topic} />
                <div class="favoruite-info">
                    <p class="card-author"><strong>{topic.topic} <span>by</span> <a class="author-name" href="#">
                        {topic.name}</a></strong></p>
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
            <h2>{topic.topic} Sub Topics</h2>
            <ul>
            {topic.subtopics &&
              topic.subtopics.map((subtopics, index) => (
                <li key={index}>
                  <ion-icon
                    name="checkmark-circle-outline"
                    className="icon check"
                  ></ion-icon>
                  <span className="details-main-desc">{subtopics}</span>
                </li>
              ))}
            </ul>
        </main>
    </section>
    </>
  );
};


