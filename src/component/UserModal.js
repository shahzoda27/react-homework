import React from 'react'
import { Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap'
import axiosClient from './plugins/axiosClient'
const UserModal = ({open,toggle,user}) => {
    const addUsers =(e)=>{
        e.preventDefault()
        let payload ={
            name: e.target[0].value,
            surname: e.target[1].value,
            age: +e.target[2].value,
            is_diploma: JSON.parse(e.target[3].value) ,
            address: e.target[4].value
        }
        if (user !== "") {
            axiosClient.patch(`/users/update/${user._id}`,{...payload}).then(res=>{
                console.log(res);
                if (res.status === 200) {
                    window.location.reload()
                }
            })
        }else{
            axiosClient.post('/users/add',{...payload}).then((res)=>{
                if (res.status === 201) {
                    window.location.reload()
                }
            }).catch((err)=>{
                console.log(err);
            })
        }
        
    }
  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalHeader>
        <h1>Add User</h1>
      </ModalHeader>
      <ModalBody>
        <form id='users' onSubmit={addUsers}>
            <input type="text" defaultValue={user.name} placeholder='name' className='form-control my-2' />
            <input type="text" defaultValue={user.surname} placeholder='surname' className='form-control my-2' />
            <input type="number" defaultValue={user.age} placeholder='age' className='form-control my-2' />
            <input type="text" defaultValue={user.is_diploma} placeholder='diploma' className='form-control my-2' />
            <input type="text" defaultValue={user.address} placeholder='address' className='form-control my-2' />
        </form>
      </ModalBody>
      <ModalFooter>
        {
            user !== "" ?
            <button type='submit' form='users' className='btn btn-success'>Edit User</button> :
            <button type='submit' form='users' className='btn btn-primary'>Add User</button>

        }
      </ModalFooter>
    </Modal>
  )
}

export default UserModal
