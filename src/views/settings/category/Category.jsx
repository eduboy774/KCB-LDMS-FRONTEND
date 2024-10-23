/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from 'react'
import Layout from '../../../components/Layout/Layout'
import useKcbCategories from '../../../views/store/CategoryStore'; // Adjust the import path as necessary

const Category = () => {
  const title ='List of Category'

  const [getKcbCategories,setKcbCategories] =useState(null)
  const [getLoadingKcbCategories,setLoadingKcbCategories] =useState(false)
  const valuetobeChecked =false;

  const variables = {
    filtering: {
      uuid: null,
      categoryName: null,
    },
  };

  const headers = [
    { label: 'Id', key:'id' ,className: 'bg-body-tertiary text-center' },
    { label: 'Category Name', key:'categoryName', className: 'bg-body-tertiary' },
    { label: 'Active', key:'isActive',className: 'bg-body-tertiary',formatter:(value) => (value ? 'YES' :'NO') },
    { label: 'Actions', key:'Action', className:'' },
  ];

  const { loading, data, error } = useKcbCategories(variables, valuetobeChecked);

  useEffect(() => {
    if (data) {
      setKcbCategories(data?.getAllKcbCategories?.data);
    }
    setLoadingKcbCategories(loading);
  }, [data, loading]);



  return (
    <Layout title={title} headers={headers} data ={getKcbCategories} />
  )
}

export default Category
