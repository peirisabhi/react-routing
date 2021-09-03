import React, {Component} from 'react';
import {Link, useLocation} from 'react-router-dom';
// import {Badge, IconButton} from "@material-ui/core";
// import Cart from "../Cart/Cart";

function Home(){

    const location = useLocation();

        return (
            <div>
                <h1>Home</h1>
                {/*{location.pathname === '/' && (*/}
                {/*    <div>*/}
                {/*        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">*/}
                {/*            <Badge badgeContent={2} color="secondary">*/}
                {/*                /!*<Cart />*!/*/}
                {/*            </Badge>*/}
                {/*        </IconButton>*/}
                {/*    </div>*/}
                {/*)}*/}

                <Link to="/cart">
                    <button>Cart</button>
                </Link>
            </div>
        );

}

export default Home;