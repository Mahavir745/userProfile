import { act, createContext, useReducer, useState } from "react";

export const dataContextProvider = createContext({
  userList: [],
  loginList: [],
  validation: [],
  addUser: () => { },
  validationData : ()=>{},
  loginData: () => { }
})

const HandleRegisterProvider = (currentData, action) => {
  let newUpdatedData = currentData
  if (action.type === "ADD_USER") {
    newUpdatedData = [action.payload, ...currentData]
  }
  return newUpdatedData;
}

const HandleLogin = (currentData, action) => {
  let newUpdatedData = currentData
  if (action.type === "LOGIN_USER") {
    newUpdatedData = {email: action.payload.email, password: action.payload.password}
  }
  return newUpdatedData;
}

const HandleValidation = ()=>{

}

const StoreDataProvider = ({ children }) => {
  const [userList, dispatchedRegister] = useReducer(HandleRegisterProvider, [])
  const [loginList, dispatchedLogin] = useReducer(HandleLogin, {email:'',password:""})
  const [validation, dispatchedData] = useReducer(HandleValidation, [])



  const addUser = (userinfo) => {
    dispatchedRegister({
      type: 'ADD_USER',
      payload: userinfo
    })
  }

  const loginData = (loginData) =>{
    dispatchedLogin({
      type: "LOGIN_USER",
      payload: loginData
    })
  }

  const validationData = (valid)=>{
    dispatchedData({
      type: "VALIDATION_TYPE",
      payload: valid
    })
  }
  


  return (
    <dataContextProvider.Provider value={{
      userList,
      loginList,
      loginData,
      addUser,
      validationData,
      validation,
    }}>
      {children}
    </dataContextProvider.Provider>
  )
};


const DEFAULT_DATA = [
  { 
    username: "mahavir",
    email: "mahavir@gmail.com",
    contact: 987498093 ,
    id: 1
  },
  { 
    username: "KumarMahavir",
    email: "mahavir@gmail.com",
    contact: 987498093 ,
    id: 2
  },
]

export default StoreDataProvider;