import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {  // Nvabar(props) are used to add the props to the code.

  // const [modeText, setText] = useState('lightMode')
  
  // const [srchLight, srchDark] = useState({
  //   color: 'aliceblue',
  //   backgroundColor: '#272A2A',
  //   border: '1px',
  // })

  // const [navStyle, setStyle] =  useState({
  //   // color: 'aliceblue',
  //   backgroundColor: '#171919',
  //   border: '0px',
  // })

  // const [navText, setNText] = useState({
  //     color: 'aquabile',
  // })

  // const  toggleStyle = () => {
  //   if (modeText === 'lightMode') {
  //     setStyle({
  //       backgroundColor : 'aliceblue',
  //     });
  //     setNText ({
  //       color: 'black',
  //     })
  //     setText ('darkMode');
  //     srchDark ({
  //       color: 'black',
  //       backgroundColor: 'aliceblue',
  //     });
      
  //   } else {
  //     setStyle({
  //       backgroundColor: '#171919',
  //     })
  //     setNText ({
  //       color: 'aliceblue',
  //     })
  //     setText ('lightMode');
  //     srchDark ({
  //       color: 'aliceblue',
  //       backgroundColor: '#2C3131',
  //     });
  //   }
  // }



    return (
      <>
      <nav className= {`navbar navbar-expand-lg navbar-${props.mode}`} style={{ backgroundColor: props.bg }}>

      <div className="container-fluid">
        <Link className="navbar-brand " to="/" >{props.title}</Link>   {/* {props.title} in this line and all other {props.'....'} are used to accept and load those passed props to the code.} */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse navbar-${props.mode} bg-${props.bg}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style= {{fontWeight: '600'}} >
            <li className="nav-item">
              <Link className="nav-link  " aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link "  to="/orders">{props.orders}</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" style={props.txtArea} type="search" placeholder='Search'  aria-label="Search"/>
            
            <button className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'}`} type="submit" >Search</button>   
          </form> */}
          
          
          <button className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} mx-3`} type="submit" onClick={props.toggleStyle} style={{ fontWeight: 'bolder' }}>{props.modeText}</button>   
        </div>
      </div>
    </nav>
    </>
    )
  }




  Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
  };
/*  props: props are generally properties by which we can pass value such as strings, objects etc. Props are read-only. 
    e.g : in ./Components/Navbar.js if we created props for title, about and any other element in Navbar to be different for different websites so that we can use the same raw code of Navbar and only change the props as we require. 
    
    PropTypes : proptypes are used to set/fix the proptype which are sent and recieved to avoid any miss-sending or errors in future. 
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
    here we can see oth title and about are set to the 'PropTypes.string' proptype as string. we can use other proptypes are required.
    
    isRequired : is used to make sure that the props do get the alreasy determined value and its type and do not remain undifined if they remained undifined it will throw an error. Also id defaultProps are set it would not throw the error as the props are no more undifined but the defaultProp text will remain at the props to be filled. */




    Navbar.defaultProps = {  
      title: 'set title here',
      about: 'set about text here'
    };
/* defaultProps : these are set incase you have mentioned props in the code and forgot to pass the values. so these will remind you of the empty props.
    Deafault props takes place if the props are set and are not given/passed any values. 
*/

