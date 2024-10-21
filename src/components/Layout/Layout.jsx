/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react'
import {CCard,CCardBody,CCardHeader,CCol,CRow} from '@coreui/react'
import CustomTable from '../../components/Layout/Table'

const Layout =({title})=>{
   return(
    <CRow>
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>{title}</strong>
        </CCardHeader>
        <CCardBody>
        <CustomTable/>
        </CCardBody>
      </CCard>
    </CCol>
    </CRow>
   )
}


export default Layout
