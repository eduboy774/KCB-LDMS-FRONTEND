/* eslint-disable prettier/prettier */
import { gql } from '@apollo/client';

export const GET_USER_PROFILE =gql `
query GetUserProfileAndRole {
  getUserProfileAndRole {
    response {
      id
      status
      code
      message
    }
    data {
      id
      userProfile {
        id
        profileUniqueId
        userFirstName
        userLastName
        userEmail
        profilePhone
        profileTitle
        profilePhoto
        profileIsActive
        profileType
        profileLevel
      }
      userRoles {
        id
        roleUniqueId
        roleName
        roleDescription
        rolePermissions {
          id
          permissionUniqueId
          permissionName
          permissionCode
        }
      }
    }
  }
}
`
export const GET_KCB_DEPARTMENT =gql
`
	query GetAllKcbDepartments($filtering: KcbDepartmentFilteringInputObject){
    getAllKcbDepartments(filtering: $filtering){
      data{
        id
        uuid
        departmentName
        departmentCode
        departmentDescription
      }
      response{
        id
        status
        code
        message
      }
    }
  }
`
export const GET_KCB_CATEGORIES=gql
`
query GetAllKcbCategories($filtering: KcbCategoryFilteringInputObject){
getAllKcbCategories(filtering: $filtering){
   data{
    id
    uuid
    categoryName
  }
  response{
    id
    status
    code
    message
  }
}
}
`
export const GET_KCB_REGIONAL_ZONES=gql
`
query GetAllKcbRegionalZone($filtering: KcbRegionalZonalFilteringInputObject){
      getAllKcbRegionalZone(filtering: $filtering){
     data{
      id
      uuid
      zoneName
      zoneCode
      zoneDescription
    }
    response{
      id
      status
      code
      message
    }
  }
}
`
;
