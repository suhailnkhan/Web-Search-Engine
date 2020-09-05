import React from 'react'
import './Home.css'

import {Link} from 'react-router-dom'
import Search from '../components/Search'
// eslint-disable-next-line
import Login from '../pages/Login'

function Home() {
    return (
        <div className='home'>

           <div className='home__header'>
           <div className="home__headerleft">
               <Link to="/">Home</Link>

           </div>

           <div className="home__headerright">
               
              
               {/* <Link to="/search">Login</Link> */}

           </div>
          </div>
          
          
          <div className='home__body'>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRo09ImC6VjBjkNlSs7XZb4zNyDlWxc8skESw&usqp=CAU" 
                alt="" className="home__logo" />
         <div className="home__inputContainer">
            <Search />       
            </div>
          </div>      
          
<div className='footer'>
<div className='footerGit'>
{/* // eslint-disable-next-line */}
<a href='https://github.com/suhailnkhan'> <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className='gitImg' />  </a>

</div>
<div className="footerLink">
<a href='https://www.linkedin.com/in/suhailnkhan/'><img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png" className="linkImg" />  </a>

</div>

</div>
          

          </div>

    
    )
}

export default Home
