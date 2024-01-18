import React from 'react'
import { Modal,ModalBody,ModalFooter } from 'reactstrap'
import axiosClient from './plugins/axiosClient'
const DeleteProducts = ({open,toggle,id}) => {
    const deleteProducts=()=>{
        axiosClient.delete(`/products/${id}`).then(res=>{
            if (res.status === 202) {
                window.location.reload()
            }
        })
    }
  return (
    <Modal isOpen={open} toggle={toggle}>
        <ModalBody>
            <h1>Are you sure you want to delete?</h1>
        </ModalBody>
        <ModalFooter>
            <button  className='btn btn-info' onClick={toggle}>cancel</button>
            <button className='btn btn-danger' onClick={deleteProducts}>delete</button>
        </ModalFooter>
    </Modal>
  )
}

export default DeleteProducts
