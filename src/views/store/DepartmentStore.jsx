/* eslint-disable prettier/prettier */
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { GET_KCB_DEPARTMENT } from '../graphql/queries'; // Adjust the import path as necessary

const useKcbDepartment = (variables, skipValue = false) => {

  const { loading, data, error } = useQuery(GET_KCB_DEPARTMENT, {
    variables,
    skip:skipValue,
  });

  return {
    loading,
    data,
    error,
  };
};

export default useKcbDepartment;
