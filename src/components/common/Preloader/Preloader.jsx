import React from 'react';
//import preloader from '../../../assets/images/spinner.gif'
import c from './Preloader.module.css';

const Preloader = () => {
    return <div className={c.preloader} >
        <img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"></img>
        </div>
}

export default Preloader;