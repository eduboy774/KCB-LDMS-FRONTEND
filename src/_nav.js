/* eslint-disable prettier/prettier */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilSettings,
  cilAlarm,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavGroup,
    name: 'LDMS',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Departments',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Category',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Regional Zone',
        to: '/notifications/modals',
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'Report',
    icon: <CIcon icon={cilAlarm} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'General',
        to: '/notifications/alerts',
      },
    ],
  }
  ,{
    component: CNavGroup,
    name: 'Settings',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Departments',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Category',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Regional Zone',
        to: '/notifications/modals',
      }
    ],
  },


]

export default _nav
