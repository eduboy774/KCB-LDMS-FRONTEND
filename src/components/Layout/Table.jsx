// /* eslint-disable react/prop-types */
// /* eslint-disable react/jsx-key */
// /* eslint-disable prettier/prettier */
// import React from "react";
// import {
//   CTable,
//   CTableBody,
//   CTableDataCell,
//   CTableHead,
//   CTableHeaderCell,
//   CTableRow,
//   CDropdown,
//   CDropdownToggle,
//   CDropdownMenu,
//   CDropdownItem,
// } from '@coreui/react';
import CIcon from '@coreui/icons-react'
// import NoDataFound from '../../components/Layout/NoData';
// import { cilOptions } from '@coreui/icons'; // Adjust the import path as necessary

// const CustomTable = ({ headers, data, actions }) => {

//   const [openOptions, setOpenOptions] = React.useState({});
//   console.log(openOptions);

//   const toggleOptions = (index) => {
//     setOpenOptions((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//   };

//   return (
//     <CTable align="middle" className="mb-0 border" bordered borderColor="dark" hover responsive>
//       <CTableHead className="text-nowrap">
//         <CTableRow>
//           {headers?.map((header, index) => (
//             <CTableHeaderCell className="bg-body-tertiary text-center" key={index}>
//               {header.label}
//             </CTableHeaderCell>
//           ))}
//           {actions && <CTableHeaderCell className="bg-body-tertiary text-center">Actions</CTableHeaderCell>}
//         </CTableRow>
//       </CTableHead>
//       {data && (
//         <CTableBody>
//           {data?.map((item, rowIndex) => (
//             <CTableRow key={rowIndex}>
//               {headers.map((header, colIndex) => {
//                 let cellValue = item[header.key];
//                 if (header.formatter) {
//                   cellValue = header.formatter(cellValue);
//                 }
//                 return (
//                   <CTableDataCell className="text-center" key={colIndex}>
//                     {cellValue != null ? cellValue : ''}
//                   </CTableDataCell>
//                 );
//               })}
//               {actions && (
//                 <CTableDataCell className="text-center">
//                   <CIcon icon={cilOptions} onClick={() => toggleOptions(rowIndex)} style={{ cursor: 'pointer' }} />
//                   {openOptions[rowIndex] && (

//                     <CDropdown>
//                       <CDropdownToggle caret={false} />
//                       <CDropdownMenu>
//                         {actions.map((action, actionIndex) => (
//                           <CDropdownItem
//                             className="d-flex align-items-center"
//                             as="button"
//                             type="button"
//                             key={actionIndex}
//                             onClick={() => action.onClick(item)}
//                           >
//                             {action.label}
//                           </CDropdownItem>
//                         ))}
//                       </CDropdownMenu>
//                     </CDropdown>

//                   )}

//                 </CTableDataCell>
//               )}
//             </CTableRow>
//           ))}
//         </CTableBody>
//       )}
//       {data === undefined && <NoDataFound />}
//     </CTable>
//   );
// };

// export default CustomTable;
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from '@coreui/react';
import NoDataFound from '../../components/Layout/NoData';
import { cilOptions } from '@coreui/icons'; // Adjust the import path as necessary

const CustomTable = ({ headers, data, actions }) => {
  const [openOptions, setOpenOptions] = useState(null);

  const toggleOptions = (index) => {
    console.log({index});
    console.log({openOptions});

    setOpenOptions((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <CTable align="middle" className="mb-0 border" bordered borderColor="primary" hover responsive>
      <CTableHead className="text-nowrap">
        <CTableRow>
          {headers?.map((header, index) => (
            <CTableHeaderCell className="bg-body-tertiary text-center" key={index}>
              {header.label}
            </CTableHeaderCell>
          ))}
          {actions && <CTableHeaderCell className="bg-body-tertiary text-center">Actions</CTableHeaderCell>}
        </CTableRow>
      </CTableHead>
      {data && (
        <CTableBody>
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
              {actions && (
                <CTableDataCell className="text-center">
                  <CIcon icon={cilOptions} onClick={() => toggleOptions(rowIndex)} style={{ cursor: 'pointer' }} />
                  {openOptions === rowIndex && (
                    <CDropdown>
                      <CDropdownToggle caret={false} style={{ display: 'none' }} />
                      <CDropdownMenu>
                        {actions.map((action, actionIndex) => (
                          <CDropdownItem
                            className="d-flex align-items-center"
                            as="button"
                            type="button"
                            key={actionIndex}
                            onClick={() => {
                              action.onClick(item);
                              setOpenOptions(null); // Close the dropdown after action is clicked
                            }}
                          >
                            {action.label}
                          </CDropdownItem>
                        ))}
                      </CDropdownMenu>
                    </CDropdown>
                  )}
                </CTableDataCell>
              )}
            </CTableRow>
          ))}
        </CTableBody>
      )}
      {data === undefined && <NoDataFound />}
    </CTable>
  );
};

export default CustomTable;
