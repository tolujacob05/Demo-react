import React from "react"
import {
    Route,
    Routes,
    NavLink,
    HashRouter
} from "react-router-dom"
import Home from "./Home"
import Stuff from "./Stuff"
import Contact from "./Contact"

const Main = () => {
    return (
        <HashRouter>
            <div>
               <h1>Simple SPA</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/stuff">Stuff</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                    <Routes>
                       <Route exact path= "/" element={<Home />} />
                       <Route path= "/stuff" element={<Stuff />} />
                       <Route path= "/contact" element={<Contact />} />
                    </Routes>
                </div>

                <div className={styles.store1}>
                <div className="retailer">
                    <img src={pic6} alt="stores" />
                    <div className="text">
                        <h1> Location: Ajah, Lagos <br/> Name: Nao Supermarket <br /> About: We sell all sort of provisions, any kind of perfumes and deodorants and varieties of kitchen utensils </h1>
                    </div>
                </div>
                <div >
                    <img src={pic6} alt="stores" />
                    <div className="text">
                        <h1> Location: Lekki Phase 1, Lagos <br /> Name: Tech Heads <br /> About: We sell every kind of gadjets you can think of, game console included.</h1>
                    </div>
                </div>
            </div>
            <div className={styles.house}>
                <img src={pic6} alt="stores" />
                <div></div>
                <div className="tail">
                    <img src={pic6} alt="stores" />
                </div>
            </div>

            </div>
        </HashRouter>
    );
}





export default Main;