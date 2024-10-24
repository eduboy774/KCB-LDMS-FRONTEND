/* eslint-disable prettier/prettier */
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { GET_KCB_REGIONAL_ZONES } from '../graphql/queries'; // Adjust the import path as necessary

const useKcbZones = (variables, skipValue = false) => {

  const { loading, data, error } = useQuery(GET_KCB_REGIONAL_ZONES, {
    variables,
    skip:skipValue,
  });

  return {
    loading,
    data,
    error,
  };
};

export default useKcbZones;
