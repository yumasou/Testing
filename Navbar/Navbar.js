import React from "react";
import "./style.css";
import NavbarItem from'./NavbarItem'
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/context";

const Navbar = () => {
  const[click,setclick]=React.useState(false);
  const clicked=()=>{
    setclick(!click);
  }
  const { changeRoute, getQuote, quoteOpen } = useGlobalContext();
  return (
    <div className="navbar text-white p-0">
      <div className=" col-12 d-flex justify-content-around align-items-center p-3">
        <div className="col-3 text-center">
          {/* <h4>DeepDigits</h4> */}
          <Link className="text-decoration-none text-white" to="/">
            <img style={{ width: "200px" }} src="./images/logo1.png" alt="Ethical Digit" />
          </Link>
        </div>
          <div className="col-6 text-center">
          <ul  className={click? 'list-menu active' : 'list-menu'} >
            {/*className="d-flex justify-content-center m-0 "*/}
    {
      NavbarItem.map((u,index)=>
          <li key={index}>
              <Link 
                 onClick={u.action}
                 className={u.style}
                 to={u.url} 
            >
             {u.name}
           </Link>
          </li>
        
      )
    }         
    <li>
    <button
           
            className="p-2 px-4 mobilebutton"
            onClick={() => getQuote()}
          >
            GET QUOTE
          </button>
    </li>
     </ul>
        </div>
        <div class=" text-center m-0 ">
          <button
            style={{ background: "#D8D8D8", borderRadius: "50px" }}
            className="p-2 px-4 button"
            onClick={() => getQuote()}
          >
            GET QUOTE
          </button>
        </div>
        <button className="menu-icon" onClick={clicked} >
        <i className="fa-thin fa-bars"></i>
      </button>
      </div>
    </div>
  );
};

export default Navbar;
