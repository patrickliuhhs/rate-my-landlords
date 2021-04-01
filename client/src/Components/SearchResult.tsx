import React, { useRef, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { getResults, QueryObj} from './Utils'
import ResultsTable from './ResultsTable'

function SearchResult ( props: QueryObj | any | undefined ){

  const { loading, data } = useQuery<any, QueryObj>(
    getResults,
    {variables: props.location.state.query}
  );
  
  // if (loading) {
  //   return (
  //     <div>LOADING</div>
  //   )
  // }
  
  return (
    <div>
      <ResultsTable/>
    </div>
  )
}

export default SearchResult