import { LOGO_URL } from "../utils/constants"
import { useEffect, useState } from "react"

// Header Component

const Header = () =>{

    // Local State variable
    const [btnNameReact, setbtnNameReact] = useState("Login")
    console.log("Header Rendered!");


    useEffect(()=>{
        console.log("useEffect Hook called!");
    },[btnNameReact])

    return(
        <>
            <nav>
                <div className="container nav__container">
                    <a className="nav__logo"><img src={LOGO_URL} /></a>
                    <ul className="nav__items">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a><span><i class="uil uil-shopping-cart-alt"></i></span> Cart</a></li>
                        <li><a>Contact</a></li>
                        <li>
                            <button onClick={()=>{
                                btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login")
                            }}>
                            {btnNameReact}</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header