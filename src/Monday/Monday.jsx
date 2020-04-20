import React from 'react';
import '../App.css';
import a from './monday.module.css'
import Message from "../Monday/Message/Message";
import Qualities from "../Monday/Qualities/Qualities";
import ShowName from "../Monday/ShowName/ShowName";

class Monday extends React.Component {

    render = () => {
        return (
            <div className={a.content}>
                <Message/>
                <Qualities/>
                <ShowName/>

            </div>
        );
    };
}

export default Monday;