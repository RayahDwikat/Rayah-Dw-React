import { useState, useEffect } from "react";
import { loadTopics } from "../shared/loadTopics";
import { Link } from "react-router-dom";
import { RatingStars } from "../components/RatingStars";
import "../CSS/styles.css";

export const Home = ({ }) => {

  const [topics, setTopics] = useState([]);
  const [viewTopics, setviewTopics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(topics);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');

  const [filterBy, setFilterBy] = useState('');
  const [filterOptions, setFilterOptions] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTopics([]);

    loadTopics(search)
      .then((data) => {
        setTopics(data);

      })

      .catch((err) => {
        setError(err)

      })
      .finally(() => {
        setLoading(false);
      });

  }, [search]);


  useEffect(() => {
    if (topics) {
      setviewTopics([...topics]);
      let updatedTopics = [...topics];
      let categories = new Set();
      topics.forEach(topic => categories.add(topic.category));

      setFilterOptions(updatedTopics);
    }
  }, [topics]);

  //     if(sortBy){
  //       updatedTopics.sort((a,b) =>{
  //         switch(sortBy){
  //           case 'AUTHOR':
  //             return a['name']< b['name']? -1 : 1 ;
  //             break;
  //           case 'TOPIC':
  //             return a['topic']< b['topic']? -1 : 1 ;

  //             default:
  //               throw 'Unknown sort by option ${sortBy}';
  //         }

  //       })
  //     }
  //     if(filterBy) {
  //       updatedTopics = updatedTopics.filter(topic => topic.category === filterBy);

  //     }
  //     setviewTopics(updatedTopics);

  //   }
  // }, [topics , sortBy, filterBy]);

  return <>
    {/* <InputWithIcon value={search} onChange={(event) => { setSearch(event.target.value) }} />
    <DropDown value={sortBy}
      options={[
        { title: 'Author Name', value: 'AUTHOR' }
        , { title: 'Topic Title', value: 'TOPICS' }

      ]}
    /> */}

    <div>
    <section class="courses container">
      {viewTopics?.map((topic) => (
        <Link to={`/Rayah-Dw-React/details/${topic.id}`} className="course-card">
          <img src={require(`../Assets/${topic.image}`)} alt="text" />
          <div className="card-info">
            <div className="card-description">
              <h4 className="web-course">{topic.category}</h4>
              <h4 className="course-name">{topic.topic}</h4>
            </div>
            <section className="card-footer">
              <RatingStars rating={topic.rating} />
              <div className="course-author">
                <p>Author: {topic.name}</p>
              </div>
            </section>
          </div>
        </Link>
      ))}
            </section>

    </div>

  </>



};























