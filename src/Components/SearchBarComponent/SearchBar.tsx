import React, { useState } from 'react';
import { IUserInput } from '../../Common/Interfaces'
import './SearchBar.css';

interface ISearchBarProps {
    SetUserInput: (a: any) => void;
    SetPageNumber: (a:any) => void;
}


function SearchBar(props: ISearchBarProps) {

    const [SearchQuery, setSearchQuery] = useState<string>("");

    const handleSearchQueryChange = (e:any) => {

        console.log('test')
        setSearchQuery(e.target.value);
        
    }   

     const handleSubmit = () => {
        console.log(SearchQuery);
         if(SearchQuery.length !==0){
             console.log("seach working");
             props.SetPageNumber(1)
             let query: IUserInput = {
                SearchQuery: SearchQuery
             }
             props.SetUserInput(query)
         }
        }
    
    return <div>
        <div className="search-box">
            <input className="searchBar"type="text" name="" placeholder="Type movie" value={SearchQuery} onChange={handleSearchQueryChange}></input>
            <a className="search-btn" href="#" onClick={handleSubmit}>Search</a>
        </div>
    </div>
}

export default SearchBar
