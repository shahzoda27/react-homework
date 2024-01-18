import React from 'react'
import img1 from  "../img/img1.svg"
import img2 from  "../img/img.png"
import img3 from  "../img/img3.png"
import img4 from  "../img/img2.png"
import img5 from  "../img/Footer.png"
import { useNavigate } from 'react-router-dom'
export default function Tailwinds() {
  const navigate = useNavigate()
  const component =()=>{
    navigate("/login")
}
  return (
  <div>
    <header className='w-full h-screen'>
      <nav className='flex justify-end p-[20px] gap-[15px]'>
        <h6>Work</h6>
        <h6>Blog</h6>
        <h6>Contact</h6>
        <button className='btn btn-info' onClick={component}>login</button>
      </nav>
      <div className='flex justify-center items-center p-[25px] gap-[100px]'>
        <div className='flex flex-col gap-[40px]'>
            <h1 className='w-[370px] text-[#21243D]'>Hi, I am John, Creative Technologist</h1>
            <p className='w-[467px] text-[#21243D]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button className='w-[200px] h-[35px] bg-[#FF6464] text-[#fff]'>Download Resume</button>
        </div>
        <div>
          <img src={img1} alt="" />
        </div>
      </div>
    </header>
    <section className='w-full h-screen p-[20px] bg-[#EDF7FA;]'>
      <div className='w-full flex  justify-around '>
      <h4 className='text-[#21243D]'>Recent posts</h4>
      <p className='text-[#13bcff]'>View all</p>
      </div>
      <div className='flex justify-center items-center gap-[30px]  mt-[30px]'>
    <div className='bg-white w-[300px] p-[20px] m-[30px]'>
    <h4 className='text-[#21243D] mb-[17px]'>Making a design system from scratch</h4>
    <p className='text-[#21243D] mb-[11px]'>12 Feb 2020 | Design Pattern</p>
    <p className='text-[#21243D]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
    <div className='bg-white w-[300px] p-[20px] m-[30px]'>
    <h4 className='text-[#21243D] mb-[17px]'>Creating pixel perfect icons in Figma</h4>
    <p className='text-[#21243D] mb-[11px]'>12 Feb 2020 | Design Pattern</p>
    <p className='text-[#21243D]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
      </div>
    </section>
    <section className='w-full h-screen flex justify-start flex-col pl-[60px] gap-[20px] p-[15px]'>
      <h5>Featured works</h5>
      <div className='flex gap-[15px]'>
        <div><img src={img2} alt="" className='mt-[10px]' /></div>
        <div>
          <h3 className='text-[#21243D] mb-[10px]'>Designing Dashboards</h3>
          <span className='flex mb-[10px] text-[#8695A4]'><h6 className='bg-[#21243D] rounded-[25px] p-[5px] text-[#fff] mr-[18px]'>2020</h6>Dashboard</span>
          <p className='text-[#21243D]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </div>
      <div className='flex gap-[15px]'>
        <div><img src={img3} alt="" className='mt-[10px]' /></div>
        <div>
          <h3 className='text-[#21243D] mb-[10px]'>Vibrant Portraits of 2020</h3>
          <span className='flex mb-[10px] text-[#8695A4]'><h6 className='bg-[#21243D] rounded-[25px] p-[5px] text-[#fff] mr-[18px]'>2018</h6>Illustration</span>
          <p className='text-[#21243D]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </div>
      <div className='flex gap-[15px]'>
        <div><img src={img4} alt="" className='mt-[10px]' /></div>
        <div>
          <h3 className='text-[#21243D] mb-[10px]'>36 Days of Malayalam type</h3>
          <span className='flex mb-[10px] text-[#8695A4]'><h6 className='bg-[#21243D] rounded-[25px] p-[5px] text-[#fff] mr-[18px]'>2018</h6>Typography</span>
          <p className='text-[#21243D]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </div>
    </section>
      <footer className='w-full p-[30px] mt-[50px]'><img src={img5} alt="" /></footer>
  </div>
  )
}
