import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import './layout.css';

const setActive = (({isActive}) => isActive ? 'active-link': '' )

const Layout = () => {
    return (
        <div>
            <header className={"header"}>
                {/*<NavLink to="/" className={setActive}>Home</NavLink>*/}
                <NavLink to={"/posts"} className={"navlink"} >Articles</NavLink>
                {/*<NavLink to={"/about"} className={setActive}>About</NavLink>*/}
            </header>

            <main className={"container main"}>
                <Outlet />
            </main>

            <footer className={"container footer"}>2023 React</footer>
        </div>
    );
};

export { Layout };