import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <div className="my-3s">
            <Link to="/create">
                <button className="btn btn-danger m-1">Create Survey</button><br/>
            </Link>
            <Link to="/published">
                <button className="btn btn-danger m-1">Take Surveyt</button>
            </Link>
            
        </div>
    );
};

export default Menu;