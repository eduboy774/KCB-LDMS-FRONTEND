/* eslint-disable prettier/prettier */
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { GET_KCB_CATEGORIES } from '../../views/graphql/queries'; // Adjust the import path as necessary

const useKcbCategories = (variables, skipValue = false) => {

  const { loading, data, error } = useQuery(GET_KCB_CATEGORIES, {
    variables,
    skip:skipValue,
  });

  return {
    loading,
    data,
    error,
  };
};

export default useKcbCategories;
