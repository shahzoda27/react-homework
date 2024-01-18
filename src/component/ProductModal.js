import React from 'react'
import { Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap'
import axiosClient from './plugins/axiosClient'
const ProductModal = ({open,toggle,product}) => {
    const addProduct =(e)=>{
        e.preventDefault()
        let loading ={
          name: e.target[0].value,
          brand: e.target[1].value,
          group: e.target[2].value,
          price: +e.target[3].value,
          arrival_price: +e.target[4].value,
          selling_price: +e.target[5].value,
          description: e.target[6].value
      }
        if (product !== "") {
            axiosClient.patch(`/products/update/${product._id}`,{...loading}).then(res=>{
                console.log(res);
                if (res.status === 202) {
                    window.location.reload()
                }
            })
        }else{
            axiosClient.post('/products/add',{...loading}).then((res)=>{
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
          <form id='product' onSubmit={addProduct}>
              <input type="text" defaultValue={product.name}  placeholder='name' className='form-control my-2' />
              <select className='form-control my-2' defaultValue={product.brand}>
                  <option value="" hidden>Select your brand</option>
                  <option value="apple">Apple</option>
                  <option value="samsung">Samsung</option>
                  <option value="acer">Acer</option>
              </select>
              <select className='form-control my-2' defaultValue={product.group}>
                  <option value="" hidden>Select your group</option>
                  <option value="mobile">Mobile</option>
                  <option value="laptop">Laptop</option>
                  <option value="tv">Tv</option>
              </select>
              <input type="number" defaultValue={product.price} placeholder='price' className='form-control my-2' />
              <input type="number" defaultValue={product.arrival_price} placeholder='arrival_price' className='form-control my-2' />
              <input type="number" defaultValue={product.selling_price} placeholder='selling_price' className='form-control my-2' />
              <textarea defaultValue={product.description} className='form-control' cols="30" rows="10" placeholder='Description'></textarea>
          </form>
        </ModalBody>
        <ModalFooter>
          {
              product !== "" ?
              <button type='submit' form='product' className='btn btn-success'>Edit User</button> :
              <button type='submit' form='product' className='btn btn-primary'>Add User</button>
  
          }
        </ModalFooter>
      </Modal>
    )
}

export default ProductModal
