import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';
import React, { useState } from 'react';
import DATA from '../data';
import ContinentItem from './ContinentItem';
import closedContext from '../closedAllContext';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

function List() {
  const [closed, setClosed] = useState(false);

  const {data, loading, error} = useQuery(gql(DATA), {client});
  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  return (
    <closedContext.Provider value={{ closed, setClosed }}>
      <ul>
        {data.continents.map((continent) => (
            <ContinentItem
                name={continent.name}
                key={continent.code}
                closed={closed}
                countries={data.countries.filter((item) => item.continent.code === continent.code)}
            />
          ))}
      </ul>
    </closedContext.Provider>
  );
}

export default List;
