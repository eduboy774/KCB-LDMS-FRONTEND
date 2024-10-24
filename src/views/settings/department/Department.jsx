/* eslint-disable prettier/prettier */
import React,{useEffect,useState} from 'react'
import Layout from '../../../components/Layout/Layout'
import useKcbDepartment from '../../store/DepartmentStore'

const Department = () => {
  const title ="List of Department"

  const [getKcbDepartment,setKcbDepartment] =useState(null)
  const [getLoadingKcbDepartment,setLoadingKcbDepartment] =useState(false)
  const valuetobeChecked =false;

  const variables = {
    filtering: {
      uuid: null,
      departmentName: null,
      departmentCode: null,
    },
  };

  const headers = [
    { label: 'Id', key:'id' ,className: 'bg-body-tertiary text-center' },
    { label: 'Department Name', key:'departmentName', className: 'bg-body-tertiary' },
    { label: 'Department Code', key:'departmentCode', className: 'bg-body-tertiary' },
    { label: 'Department Name', key:'departmentDescription', className: 'bg-body-tertiary' },
    { label: 'Active', key:'isActive',className: 'bg-body-tertiary',formatter:(value) => (value ? 'YES' :'NO') },
    { label: 'Actions', key:'Action', className:''  },
  ];

  const { loading, data, error } = useKcbDepartment(variables, valuetobeChecked);

  useEffect(() => {
    if (data) {
      setKcbDepartment(data?.getAllKcbDepartments?.data);
    }
    setLoadingKcbDepartment(loading);
  }, [data, loading]);



  return (
    <Layout title={title} headers={headers} data ={getKcbDepartment} />
  )
}

export default Department
