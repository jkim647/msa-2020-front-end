import React,{useState} from 'react';
import SearchBar from './Components/SearchBarComponent/SearchBar';
import MediaGrid from './Components/MediaGridComponent/MediaGrid';
import { IUserInput } from './Common/Interfaces';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import './App.css';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

function App() {

  // searchquery가 없을떄는 popular movie 로,
  // searchquery가 있을떄는 specific movie로
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "",
  });
  let [PageNumber, pageSetup] = useState<number>(1);



  
  function SetUserInput(a: IUserInput ) {
    setUserInput(a);  
    console.log(UserInput.SearchQuery)  
  }

  function SetpageSetup(a:number){
    pageSetup(a);
  }
  
  function nextPage(){
    pageSetup(prev => prev+1)
  }

  return (
    <div className="App" >
      <MuiThemeProvider theme={theme}>
          <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)} SetPageNumber={(a:number) => SetpageSetup(a)}/>
          <button className="nextPage" color="primary" onClick={nextPage}>Next Page</button>
          <MediaGrid SearchQuery={UserInput.SearchQuery} Page={PageNumber}/>
          
      </MuiThemeProvider>
    </div>
  );
}

export default App;
