import React from 'react';
import style from "./Header.module.scss";
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
               <h1 className={style.text}>Welcome to the Planet Shop!</h1>
                <ul>

                    <li className={style.subtext}>
                        <NavLink exact className={style.navlink} activeStyle={{
                            fontWeight: "bold",
                            color: "#ed57b6"
                        }} to='/'> Main Page
                        </NavLink>
                    </li>

                    <li className={style.subtext}>
                            <NavLink exact className={style.navlink} activeStyle={{
                                fontWeight: "bold",
                                color: "#ed57b6"
                            }} to='/favorites'> Go to Favorites &#127775;
                            </NavLink>
                    </li>

                    <li className={style.subtext}>
                        <NavLink exact className={style.navlink} activeStyle={{
                            fontWeight: "bold",
                            color: "#ed57b6"
                        }} to='/cart'> Go to Cart &#128722;
                        </NavLink>
                    </li>

                </ul>
        </header>
    );
}

export default Header;