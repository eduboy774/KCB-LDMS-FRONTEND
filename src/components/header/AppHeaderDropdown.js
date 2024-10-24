/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'
import { useNavigate } from "react-router-dom";
import {delayForExecution} from '../../views/Utils/utils'
const AppHeaderDropdown = () => {

  const navigate = useNavigate();
  const onClicknNavigateToHome = () => navigate(`/#`);


 const  handleLogout =(event)=>{
     localStorage.clear()
     if(event) onClicknNavigateToHome()
      delayForExecution(500).then( () =>{ window.location.reload();});

 }
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Account</CDropdownHeader>
        <CDropdownItem>
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem onClick={e=>{handleLogout(e)}}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Log out
        </CDropdownItem>

      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
