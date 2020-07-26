import React, { useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import {Button} from '@material-ui/core';
import {API} from '../../API/apiKey';
import Modal from '../../Components/Modal/Modal';
import './MediaCard.css';

interface IMediaCardProps {
    ImageUrl: string | undefined;
    Topic: string | undefined;
    Description: string | undefined;
    id: string | undefined;
}
interface IState {
    
}

function MediaCard(props: IMediaCardProps) {

     const [ItemArray, setItemArray] = useState<IState>({});
     const [openModal, setModal] = useState<IState>(false);
     const [closeModal, close] = useState<IState>(false);
    

    const GetMoreDetails = () => {
        console.log(props.id)
        let setMovieInfo = {}
        fetch(`https://api.themoviedb.org/3/movie/${props.id}?api_key=${API}&language=en-US`)
            .then(response => response.json())
            .then(response => {
                setMovieInfo = {
                    release_date:response.release_date,
                    homepage:response.homepage,
                    runtime:response.runtime
                }
             setItemArray(setMovieInfo) 
             setModal(true)
             close(true)             
            })
            .catch(() => console.log("it didn't work")
            );        
    }
    const closeBackdrop = () => {
        close(false)
        setModal(false)

    }

    
    return (
        <div>
            <Card className="MediaCardContainer">
                <CardActionArea>
                    <CardMedia
                        className="MediaCardImage"
                        image={props.ImageUrl}
                    />
                    <CardContent className="MediaCardContent">
                        <Typography variant="body2" color="textSecondary" component="p" className="MediaCardDescription">
                                {props.Topic}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="MediaCardDescription">
                            {props.Description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={GetMoreDetails}>
                        More Details    
                    </Button>
                </CardActions>
            </Card>
            {openModal && <Modal test={ItemArray} close={closeBackdrop} closeModal={closeModal}/>}
        </div>
    )
}

export default MediaCard
