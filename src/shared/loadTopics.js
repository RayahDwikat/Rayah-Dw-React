const BACKEND_HOST = 'https://tap-web-1.herokuapp.com';


export const loadTopics = (search) =>{
 let params = new URLSearchParams();
 if(search){
    params.set('phrase', search);
 }
  return fetch(`${BACKEND_HOST}/topics/list?` + params)
 .then(res => res.json());

}; 