import React , {useState}from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {useStateValue} from '../Providers/StateProvider'
import {actionTypes} from '../Providers/reducer'
import './Search.css'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Search({hideButtons = false}) {
// eslint-disable-next-line
const [ {} , dispatch] = useStateValue();

 const [input , setInput] = useState('')
 const history = useHistory();

const searchtrigger = (e) => {

e.preventDefault();
console.log(input);

// process input 
dispatch({
      type : actionTypes.SET_SEARCH_TERM,
      term : input

})
history.push('/search')


}
 
    return (
        <form className='search'>
             <div className='search__input'>
                
                  <SearchIcon className="search__inputIcon" />
                 <input  value={input} onChange={e => setInput(e.target.value)} />
                 <MicIcon /> 
            </div> 

            {!hideButtons ? (
 <div className="search__button">
 <Button variant="outlined" type='submit' onClick={searchtrigger}>Search</Button>
{/* <Button variant="outlined"> </Button> */}
    </div>


            ) : (
                <div className="search__button">
                <Button className='buttonHidden' variant="outlined" type='submit' onClick={searchtrigger}>Search</Button>
               {/* <Button variant="outlined"> </Button> */}
                   </div>
            ) }
       

        </form>
    )
}

export default Search
