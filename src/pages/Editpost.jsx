import React from 'react';
import { useParams } from "react-router-dom";

const Editpost = () => {

    const {id} = useParams();

    return (
        <div>
            edit posts {id}
        </div>
    );
};

export { Editpost };