import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {gql, useQuery} from '@apollo/client';

function App() {

  const getResults = gql`
    query GetResults {
      text {
        text
      }
    }
  `

  const SearchRequest = (input: String) => {
  
    const {loading, error, data} = useQuery(getResults);    
    console.log('loading',loading);
    console.log('error', error);
    console.log('data', data);

  }

  const handleKeyPress = (event: String) => {

  }

  return (
    <div className="App">
      <h1>RATEMYLANDLORDS</h1>
      <h2>Enter your city, zip code, or address to get started</h2>
      <form noValidate autoComplete="off">
        {/* <TextField id="standard-basic" label="Standard" /> */}
        {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
        <TextField id="addresssearchbar" label="Address" variant="outlined" />
        <TextField id="citysearchbar" label="City" variant="outlined" />
        <TextField id="zipsearchbar" label="Zip Code" variant="outlined" />
        
      </form>
      <Button variant="contained">Search</Button>
    </div>
  );
}

export default App;
