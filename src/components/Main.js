import React, { useState, useEffect } from 'react';
import '../styles/style.css';
import Filter from './Filters'


function Main(){

    return(
        <>
            <div className="page-information">
                <h1 className="page-title">Restaurants</h1>
                <p className="page-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="divider"></div>
                <Filter />
                <div className="divider"></div>
            </div>
        </>
    );
}

export default Main;