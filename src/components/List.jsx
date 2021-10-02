import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';
import DATA from '../data';
import ContinentItem from './ContinentItem';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

function List() {
  const {data, loading, error} = useQuery(gql(DATA), {client});
  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }
  console.log(data.countries);

  return (
    <ul>
        {data.continents.map((continent) => (
            <ContinentItem
                name={continent.name}
                key={continent.code}
                countries={data.countries.filter((item) => item.continent.code === continent.code)}
            />
          ))}
    </ul>
  );
}

export default List;
