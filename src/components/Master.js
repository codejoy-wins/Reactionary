import React from 'react';
import NewComponent from './NewComponent';
import MyInfo from './MyInfo';

function Master(){
    return(
        <div>
            <h1>Master</h1>
            Nested components here:
            <MyInfo/>
            <NewComponent/>
        </div>
    )
}

export default Master;