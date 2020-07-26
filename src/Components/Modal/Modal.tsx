import React from 'react';
import Backdrop from '../Backdrop/Backdrop'
import './Modal.css'


interface IModalProps {
    test:any;
    close:any;
    closeModal:any;
}

function Movie(props: IModalProps) {


    return(
        <div>
        <Backdrop show={true} closeBackdrop={props.close} closeModal={props.closeModal}/>
        <div className="Modal">
            <div className="modalbox">
                <p><b>Realise Date: </b>{props.test.release_date}</p>
                <p><b>Watch here: </b> {props.test.homepage}</p>
                <p><b>Duration time: </b>{props.test.runtime}</p>
            </div>
            
        </div>
        </div>
    )

}

export default Movie