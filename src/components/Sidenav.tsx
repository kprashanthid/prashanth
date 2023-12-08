import Button from 'react-bootstrap/Button';

import './Components.css';

function Sidenav() {
  
  return <>
  <div className='nav-bar'>
    <li className='nav-items'>HOME</li>
    <li className='nav-items'>PROJECT</li>
    <li className='nav-items'>ABOUT ME</li>
    <li className='nav-heading'>SOCIALS</li>
    <li className='nav-list'><a href='https://github.com/kprashanthid' target='right' className='nav-items'>GIT-HUB</a></li>
    <li className='nav-list'><a href='https://www.linkedin.com/in/prashanth-k-b74853253/' target='right' className='nav-items'>LINKEDIN</a></li>
  </div>
  </>
}

export default Sidenav;