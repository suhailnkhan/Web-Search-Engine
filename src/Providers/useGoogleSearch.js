import {useState, useEffect} from 'react';
import API_KEY from '../keys';


const CONTEXT_KEY = "df9baca27303ddaa1";
const useGoogleSearch = (term) =>  {
   

    const [data, setData] = useState(null)
    
useEffect (()=> {
console.log('inside useEffect');

    const fetchData = async() => {
fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
.then(response => response.json())
.then(result => {
    console.log(result);
    setData(result)
})      
}
fetchData()
}, [term])

return {data}

}

export default useGoogleSearch
