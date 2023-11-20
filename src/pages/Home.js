import { useState, useEffect } from "react";
import { loadTopics } from "../shared/loadTopics";
import { Link } from "react-router-dom";
import { RatingStars } from "../components/RatingStars";
import "../CSS/styles.css";
import { InputWithIcon } from "../components/InputWithIcon";
import { DropDown } from "../components/DropDown";

export const Home = () => {
  const [topics, setTopics] = useState([]);
  const [viewTopics, setViewTopics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [filterOptions, setFilterOptions] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTopics([]);

    loadTopics(search)
      .then((data) => {
        setTopics(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search]);

  useEffect(() => {
    if (topics) {
      let categories = new Set();
      topics.forEach(topic => categories.add(topic.category));
      setFilterOptions([...categories]);
      console.log(filterOptions , "hey 555555555522222222222222222");
      let updatedTopics= [...topics];

       if(sortBy){
          updatedTopics.sort((a,b)=>{
            switch (sortBy){
               case 'AUTHOR':
                   return a['name']<b['name']? -1: 1;
                case 'TOPIC':
                      return a['topic']<b['topic']? -1: 1;
                  default:
                    throw `unknown sort by option ${sortBy}`

            }
          });
       }
       if(filterBy){
         updatedTopics = updatedTopics.filter(topic=> topic.category === filterBy );
       }
      setViewTopics(updatedTopics);
      
    
    }
  }, [topics, sortBy, filterBy ]);
    const setOptions=filterOptions?.map(option=>(
      //  <option key={option} value={option}>{option}</optio{n>
    { 
      title:option,
      value:option
    }
    )
      );
  return (
    <>
    <div class="search-bar container">
      <InputWithIcon
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
       <div class="type-selector">
        <div class="options">
      <DropDown
        label="Sort By:"
        value={sortBy}
        options={[
          { title: "default" , value:''    },
          { title: "Author Name", value: "AUTHOR" },
          { title: "Topic Title", value: "TOPIC" },
        ]}
        onChange={(event) => setSortBy(event.target.value)} 
      />
      </div>
      <div class="options">
      <DropDown
        label="Filter By:"
        value={filterBy}
        options={[{
          title:'Default', value:''},
          ...setOptions
        ]}
        onChange={(event) => setFilterBy(event.target.value)} 
      />
      </div>
      </div>
       </div>
      <div>
        <section className="courses container">
          {viewTopics?.map((topic) => (
            <Link
              to={`/Rayah-Dw-React/details/${topic.id}`}
              className="course-card"
            >
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
  );
};