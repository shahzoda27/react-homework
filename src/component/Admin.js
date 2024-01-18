import React, { useEffect, useState } from 'react'
import axiosClient from './plugins/axiosClient'
import ProductModal from './ProductModal'
import DeleteProducts from './DeleteProducts';
const Admin = () => {
  const [products, setProducts]= useState([])
  const [modalProducts, setModalProducts]= useState(false)
  const [deleteModal, setDeleteModal]= useState(false)
  const [id, setId]= useState()
  const [product, setProduct]= useState("")
  useEffect(()=>{
    axiosClient.get('/products').then((res)=>{
      setProducts(res?.data?.products)
    }).catch(err=>{
      console.log(err);
    })
  },[])
  const openDeleteModal = (id)=>{
    setId(id)
    setDeleteModal(true)
  }
  const openEditModal = (item)=>{
    setProduct({...item})
   setModalProducts(true)
  }
   const toggle = ()=>{
    setModalProducts(false)
    setProduct('')
   }
  return (
    <div className='container'>
      <ProductModal open={modalProducts} toggle={toggle} product={product}/>
      <DeleteProducts open={deleteModal} toggle={()=>setDeleteModal(false)} id={id}/>
      <div className="row">
        <div className="col-md-3">
        <button className='btn btn-info' onClick={()=>setModalProducts(true)}>Add user</button>
        </div>
      </div>
      <div class="row">
        <div className="col-md-10 offset-1">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>T/R</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Group</th>
              <th>Price</th>
              <th>Arrival_price</th>
              <th>Selling_price</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {
            products.map((item,index)=>{
              return <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>{item.group}</td>
                <td>{item.price}</td>
                <td>{item.arrival_price}</td>
                <td>{item.selling_price}</td>
                <td>{item.description}</td>
                <td>
                  <button className='btn btn-info' onClick={()=>openEditModal(item)}>Edit</button>
                  <button className='btn btn-danger' onClick={()=>openDeleteModal(item._id)}>Delete</button>
            </td>
              </tr>
            })
           }
          </tbody>
        </table>
        </div>
      </div>
      
    </div>
   
  )
}

export default Admin
