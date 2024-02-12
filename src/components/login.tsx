import React from 'react'
import { useState } from 'react';

const login = () => {

    const HandleLogin = () => 
    {
                   
    };

    return (
        <div className='login'>
            <input type='text'> insert name </input>
            <input type='text'> insert password </input>
            <button onClick={HandleLogin}> login </button>
            <a> not logged ? </a>
        </div>
    )
}

export default login;