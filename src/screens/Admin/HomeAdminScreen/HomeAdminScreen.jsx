import React from 'react';
import { Link } from 'react-router-dom';

const HomeAdminScreen = () => {
    return (
        <div>
            HomeAdmin<br />
            <Link to="/">Back to home user</Link><br />
        </div>
    );
};

export default HomeAdminScreen;