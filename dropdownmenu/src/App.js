import React, {useState} from 'react';


function App() {
  return (



    <Navbar>
      <NavItem icon="😂"/>
      <NavItem icon="😊"/>
      <NavItem icon="😒"/>

      <NavItem icon="📥">
        <p>Hello World</p>
      </NavItem>
      
      
      
    </Navbar>

    

  

  );
}



function Navbar(props){
  return(
    <nav className="navbar">
      <ul className="navbar-nav">
        {props.children}
      </ul>
    </nav>
  );
}

function NavItem(props){

  const[open, setOpen] = useState(false);

  return(
    <li className="nav-item">

    
    <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
      {props.icon}
    </a>

    {open && props.children}

    </li>
  );
}



export default App;
