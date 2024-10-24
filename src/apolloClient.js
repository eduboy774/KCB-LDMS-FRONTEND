/* eslint-disable prettier/prettier */
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import environment from '../env';

const createApolloClient = () => {

  const apiUrl = environment.apiUrl;
  const token = localStorage.getItem('accessToken');
  // const refreshToken = localStorage?.getItem('refreshToken');
  // console.log(refreshToken);


  const httpLink = createHttpLink({
    uri: apiUrl,
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return client;
};

export default createApolloClient;

