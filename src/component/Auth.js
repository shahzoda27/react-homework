import axiosClient from './plugins/axiosClient'
import React, { useState } from 'react'
import ModalApp from './ModalApp'
const Auth = () => {
    const [roles,setRoles] =  useState([])
    const [modalVisible,setModalVisible] =  useState(false)
    const  handleSubmit =(e)=>{
        e.preventDefault()
        let username = e.target[0].value
        let password = e.target[1].value
        axiosClient.post('/admins/login',{
            username:username,
            password:password
        }).then((res)=>{
            localStorage.setItem('token', res?.data?.token)
            setRoles(res?.data?.roles)
            if (res.status === 202) {
                setModalVisible(true)
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div className='container'>
        <ModalApp open={modalVisible} toggle={()=>setModalVisible(false)} roles={roles}/>
      <div className="row">
        <div className="col-md-6 offset-3">
            <div className="card">
                <div className="card-header">
                    <h1 className='text-center'>Auth</h1>
                </div>
                <div className="card-body">
                    <form id='form' onSubmit={handleSubmit}>
                        <input type="text" placeholder='Username' className='form-control my-2' />
                        <input type="password" placeholder='Password' className='form-control my-2' />
                    </form>
                </div>
                <div className="card-footer">
                    <button form='form' className='btn btn-success'>Login</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
