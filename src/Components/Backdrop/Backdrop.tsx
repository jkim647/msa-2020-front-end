import React from 'react';
import './Backdrop.css'

interface IBackdropProps{
    show: boolean;
    closeBackdrop:any;
    closeModal:any;
}

const Backdrop =(props:IBackdropProps)=>(
props.closeModal? <div className="Backdrop" onClick={props.closeBackdrop}></div>: null
);

export default Backdrop;