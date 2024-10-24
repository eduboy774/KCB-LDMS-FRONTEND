/* eslint-disable prettier/prettier */
import React, { useState,useEffect } from 'react'
import  Layout from '../../../components/Layout/Layout'
import useKcbZones from '../../store/ZoneStore'

const Zones =()=>{
  const title ='List of Zones'

  const [getKcbZones,setKcbZones] =useState(null)
  const [getLoadingKcbZones,setLoadingKcbZones] =useState(false)
  const valuetobeChecked =false;

  const variables = {
    filtering: {
      uuid: null,
      zoneName: null,
      zoneCode: null,
    },
  };

  const headers = [
    { label: 'Id', key:'id' ,className: 'bg-body-tertiary text-center' },
    { label: 'Zone Name', key:'zoneName', className: 'bg-body-tertiary' },
    { label: 'Zone Code', key:'zoneCode', className: 'bg-body-tertiary',formatter:(value)=>(value.replaceAll('_',' ')) },
    { label: 'Zone Name', key:'zoneDescription', className: 'bg-body-tertiary' },
    { label: 'Active', key:'isActive',className: 'bg-body-tertiary',formatter:(value) => (value ? 'YES' :'NO') },
  ];

  const actions = [
    { label: 'Edit', onClick: (item) => alert(`Edit ${item.categoryName}`) },
    { label: 'Delete', onClick: (item) => alert(`Delete ${item.categoryName}`) },
  ];

  const { loading, data, error } = useKcbZones(variables, valuetobeChecked);

  useEffect(() => {
    if (data) {
      setKcbZones(data?.getAllKcbRegionalZone?.data);
    }
    setLoadingKcbZones(loading);
  }, [data, loading]);



  return (
    <Layout
    title={title}
    headers={headers}
    data ={getKcbZones}
    actions={actions}

    />
  )
}

export default Zones
