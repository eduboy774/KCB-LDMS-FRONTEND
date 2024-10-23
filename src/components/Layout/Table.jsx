/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React from "react";
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,

} from '@coreui/react'
import NoDataFound from '../../components/Layout/NoData'

const CustomTable =({headers,data})=>{


  return (
    <CTable align="middle" className="mb-0 border" bordered borderColor="primary" hover responsive>
      <CTableHead className="text-nowrap">
        <CTableRow>
          {headers?.map((header, index) => (
            <CTableHeaderCell className="bg-body-tertiary text-center" key={index}>
              {header.label}
            </CTableHeaderCell>
          ))}
        </CTableRow>
      </CTableHead>
     {data &&(<CTableBody>
        {data?.map((item, rowIndex) => (
          <CTableRow key={rowIndex}>
            {headers.map((header, colIndex) => {
              let cellValue = item[header.key];
              if (header.formatter) {
                cellValue = header.formatter(cellValue);
              }
              return (
                <CTableDataCell className="text-center" key={colIndex}>
                  {cellValue != null ? cellValue : ''}
                </CTableDataCell>
              );
            })}
          </CTableRow>
        ))}
      </CTableBody>)}
      {(data === undefined) &&(
         <NoDataFound/>
        )}
    </CTable>
  );
};

export default CustomTable
