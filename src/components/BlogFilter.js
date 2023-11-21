import React, {useState} from 'react';
import './layout.css';
import {useParams} from "react-router-dom";


const BlogFilter = ({postQuery, setSearchParams}) => {

    const [search, setSearch] = useState(postQuery);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const query = form.search.value;

        const params = {};

        if(query.length) params.post = query;

        setSearchParams(params);
    }

    return (
        <div>
            <form autoComplete="off"   onSubmit={handleSubmit}>
                <input type={"search"} name={"search"} className={'search'} value={search} onChange={(e) => {setSearch(e.target.value)}}/>
                <input type={"submit"} value={"Search"}/>
            </form>
        </div>
    );
};

export default BlogFilter;