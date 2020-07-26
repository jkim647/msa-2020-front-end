import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCardComponent/MediaCard';
import { Grid} from '@material-ui/core';

import {API,IMAGE_BASE_URL,POSTER_SIZE} from '../../API/apiKey'
import './MediaGrid.css';


interface IState {

}
interface IMediaGridProps {
    SearchQuery: (any);
    Page:(any);
}
function MediaGrid(props: IMediaGridProps) {
    const [ItemArray, setItemArray] = useState<IState[]>([{links:[],data:[]}]);

    useEffect(() => {   
        console.log("component mounted")
        apiFetch(props.Page)
        

    }, [props.SearchQuery,props.Page]);

    const apiFetch = (pageNumber:number) => {
        
        console.log("fetch api")
        if(props.SearchQuery.length !==0){
            
            fetch(`
            https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&query=${props.SearchQuery}&page=${pageNumber}&include_adult=false`)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setItemArray(response.results)
                console.log(ItemArray)
                
            })
            .catch(() => console.log("it didn't work")
            );
            
        }
        else{
            console.log("popular movie")
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API}&page=${pageNumber}&region=US`)
            .then(response => response.json())
            .then(response => {
                //console.log(response.results)
                setItemArray(response.results)
                
                
            })
            .catch(() => console.log("it didn't work")
            );
        }
        
        
    }

    
    var Cards: JSX.Element[] = [];
    
    console.log(ItemArray)

        ItemArray.map((el:any, i:Number) => {
            if (!el) {
                return;
            }
            return Cards.push(
                <Grid key={"card_"+i} item sm={6} md={4} lg={3} className="MediaGridCard">
                    <MediaCard Topic={el.original_title} ImageUrl={el.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${el.poster_path}`:'./images/no_image.jpg'}
                               Description={el.overview} id={el.id}/>
                   
                </Grid>)
            })


    
     
    return (
        <div>
            <Grid container spacing={3} className="MediaGridContainer"> 
                {Cards}
            </Grid>
            
        </div>
    )
}

export default MediaGrid
