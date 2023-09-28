import { useState , useEffect} from "react";
import {InputWithIcon} from "../components/InputWithIcon";     
import { loadTopics } from "../shared/loadTopics";
import { DropDown } from "../components/DropDown";
import {Cards} from "../components/cards";
export const Home = ({}) => {

  const [topics, setTopics] = useState(null);
  const [viewTopics, setviewTopics] = useState(null);
  console.log(viewTopics);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');

  const [filterBy, setFilterBy] = useState('');
  const [filterOptions, setFilterOptions] = useState([]);

  useEffect(() => {
    setLoading(true);
     setTopics(null);


    loadTopics(search)
      .then((data) => {
        setTopics(data);
      })
       .catch((err)=>{
        setError(err)

       })
      .finally(() =>{
        setLoading(false);
      });

  }, [search]);

  
useEffect(()=>{
  if(topics){
    let updatedTopics= [...topics];
    let categories = new Set();
    topics.forEach(topic=> categories.add(topic.category));
    
    setFilterOptions(updatedTopics); 


    if(sortBy){
      updatedTopics.sort((a,b) =>{
        switch(sortBy){
          case 'AUTHOR':
            return a['name']< b['name']? -1 : 1 ;
            break;
          case 'TOPIC':
            return a['topic']< b['topic']? -1 : 1 ;

            default:
              throw 'Unknown sort by option ${sortBy}';
        }
        
      })
    }
    if(filterBy) {
      updatedTopics = updatedTopics.filter(topic => topic.category === filterBy);

    }
    setviewTopics(updatedTopics);

  }
}, [topics , sortBy, filterBy]);

  return <>
    <InputWithIcon value={search} onChange={(event)=>{setSearch(event.target.value) }} />
    <DropDown value={sortBy}
              options={[ 
                {title: 'Author Name' , value : 'AUTHOR'}
                ,{title: 'Topic Title' , value : 'TOPICS'}

              ]}
              onChange={(event) =>{setSortBy(event.target.value) }}
    
    />
    <DropDown value={filterBy}
              options={filterOptions.map(cat => ({title:cat , value:cat}))}
              onChange={(event) =>{setFilterBy(event.target.value) }}
    
    />
    
    <div>
     {
        viewTopics?.map((topic)=>(
        <Cards key={topic.id} id={topic.id} name={topic.name} image={topic.image} category={topic.category} topic={topic.topic}/>
       ))
     }
    </div>
  </> 

}























