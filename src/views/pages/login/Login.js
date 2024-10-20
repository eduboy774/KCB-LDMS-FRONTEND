/* eslint-disable prettier/prettier */
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CToast,
  CToastBody,
  CToastClose
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import enviroment from '../../../../env';
import { useNavigate } from "react-router-dom";
import { GET_USER_PROFILE } from '../../../views/graphql/queries';
import {delayForExecution} from '../../Utils/utils'
import createApolloClient from '../../../apolloClient';



const Login = () => {

  const client = createApolloClient();
  const navigate = useNavigate();
  const [getUsername,setUsername]=useState(null);
  const [getPassword,setPassword] = useState(null)
  const [getData,setData] = useState(null)
  const onClickLoginAsNormalUser = () => navigate(`/dashboard`);
  const onClickLoginAsSuperUser = () => navigate(`/500`);



  const getUserProfileAndRole = async(accessToken) => {
       console.log({accessToken});

    try {
        const { loading, error, data } = await client.query({
          query: GET_USER_PROFILE,
          context: {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        });

      if (loading) {
        // Handle loading state
      }

      if (error) {
        // Handle error state
      }

      if (data) {
        const userProfileAndRoleData = data.getUserProfileAndRole;

        //store user Profile locally
        const userProfile= data?.getUserProfileAndRole?.data?.userProfile;
        const userProfileJSON = JSON.stringify(userProfile);
        localStorage.setItem("userProfileAndRoleData",userProfileJSON)

        if(userProfileAndRoleData?.response?.code === 9000 ){

          //this for Location
          localStorage.setItem("locationUniqueId",userProfileAndRoleData?.data?.locationScan?.locationUniqueId);
          localStorage.setItem("initialDataDepartment",userProfileAndRoleData?.data?.locationScan?.department?.departmentName);
          localStorage.setItem("departmentType",userProfileAndRoleData?.data?.locationScan?.department?.departmentType);
          localStorage.setItem("departmentName",userProfileAndRoleData?.data?.locationScan?.department?.departmentName);
          localStorage.setItem("initialDataRegion",userProfileAndRoleData?.data?.locationScan?.region?.regionName);

          //this for user
          localStorage.setItem("userFirstName",userProfileAndRoleData?.data?.userProfile?.userFirstName);
          localStorage.setItem("userLastName",userProfileAndRoleData?.data?.userProfile?.userLastName);
          localStorage.setItem("rolePermissions",userProfileAndRoleData?.data?.userRoles?.rolePermissions);

          const  listOfPersmission =  userProfileAndRoleData?.data?.userRoles?.map(
               (userRole) => userRole?.rolePermissions.map( (perm) => perm?.permissionCode)
          )

              // Convert the permissions array to a string
                const permissionsString = JSON.stringify(listOfPersmission);

                // Store the permissions string in localStorage
                localStorage.setItem('userPermissions', permissionsString);

           // start of commissioner
           if(userProfileAndRoleData?.data?.userProfile?.profileType ==="NORMAL_PROFILE"){

               onClickLoginAsNormalUser();
               delayForExecution(500).then( () => {window.location.reload();})

           }
           else if(userProfileAndRoleData?.data?.userProfile?.profileType ==="ADMIN_PROFILE")
           {
               onClickLoginAsSuperUser();
               delayForExecution(500).then( () => {window.location.reload();

               })

           }


        }
        // Process the data as needed
        return userProfileAndRoleData;
      }
    } catch (error) {
      console.error('Error executing GraphQL query:', error);
      throw error;
    }
  }


    async function authenticate(username, password) {

        const endpoint = enviroment.endpoint;
        const CLIENT_ID = enviroment.clientId;
        const CLIENT_SECRET = enviroment.clientSecret;

        const body = new URLSearchParams();
        body.append('grant_type', 'password');
        body.append('username', username);
        body.append('password', password);
        body.append('client_id', CLIENT_ID);
        body.append('client_secret', CLIENT_SECRET);

        return fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: body.toString(),
        })
          .then((response) => response.json())
          .then(async (data) => {

            if (data) setData(data)
            // Handle the authentication response
            let  accessToken = data?.access_token ;
            let  refreshToken = data?.refresh_token;
            let  expiresIn = data?.expires_in;

            // Store the access token for future API requests
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('expiresIn', expiresIn);

            if(accessToken){
                onClickLoginAsNormalUser()
                // onClickLoginAsSuperUser()
                //  check User Profile
                //  const userProfileAndRoleData    =  await getUserProfileAndRole(accessToken) ;
                  // console.log({userProfileAndRoleData});
             }
             else{
                // toast.error('Login failed!');
             }

          })
          .catch((error) => {
            // Handle any errors that occurred during the login process
            console.error('Login Error:', error);
            // toast.error("Error While login");
          });
      }

  const handlePasswordChange =(event)=>{
    setPassword(event.target.value)
  }

  const handleUserNameChange = (event) =>{
    setUsername(event.target.value)
  }

const handleLogin = async (event) => {

    event.preventDefault(); // Prevent form submission

     // Handle the username and password as needed
      await  authenticate(getUsername,getPassword);

};
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        {getData &&(<CToast autohide={false} visible={true} className="align-items-center">
          <div className="d-flex">
            <CToastBody>Login Success Full.</CToastBody>
            <CToastClose className="me-2 m-auto" />
          </div>
        </CToast>)}
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={e=>{handleLogin(e)}}>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                        name='username'
                        onChange={(e)=>handleUserNameChange(e)}
                        required
                      />

                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={e=>handlePasswordChange(e)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                        color="primary"
                        className="px-4"
                         type='submit'
                        >
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                     KCB LDMS
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
