import React from 'react';
import './../components/layout.css'

export const Homepage = () => {
    return (
        <div>
            <h1 className={'title'}>Welcome to home page agai!</h1>
            <ul>
                <li>When searching for the authors name please don't forget that the first letter has to be capitalized</li>
                <li>To see list of articles please click on the header "Article"</li>
            </ul>

        </div>
    );
};

export default Homepage;