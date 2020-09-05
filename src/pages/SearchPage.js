import React from 'react'
import "./SearchPage.css"
// eslint-disable-next-line
import { useStateValue } from '../Providers/StateProvider'
import useGoogleSearch from '../Providers/useGoogleSearch';
import Response from "../Providers/Response"
import {Link} from 'react-router-dom'
import Search from '../components/Search';

function SearchPage() {

const [{term }, dispatch] = useStateValue();
// live api call
const {data} = useGoogleSearch(term)    ;

// const data = Response;
// console.log(data);
    return (
        <div className="searchPage">
            
            <div className="searchpage__header">

  <Link to="/" >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRo09ImC6VjBjkNlSs7XZb4zNyDlWxc8skESw&usqp=CAU"   alt="" className="searchPage_logo"/>

  </Link>
  <div className="searchPage_headerbody" >
  <Search hideButtons />
  </div>

  </div>
{term && ( 

<div className="searchpage__results">

   <p className = "searchPage_resultCount">
   About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} sec) for {term}
   </p>
{data?.items.map((item , index) => (
<div className="searchPage__result" key = {index}> 
<a href={item.link}> 
     {item.displayLink}
 </a>
 <a className="searchPage__resultTitle" href={item.link}> 
    <h2>{ item.title} </h2>
 </a>
 <p className="searchPage__resultSnippet"> {item.snippet}</p>
</div>
))}
</div>

)

}
  
       
        </div>
    )
}

export default SearchPage
