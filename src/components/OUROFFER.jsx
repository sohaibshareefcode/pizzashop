import React from 'react'
import NavHeader from '../header/NavHeader'

function OUROFFER() {
  return (
    <div>
   <div
  className="relative h-screen bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729681853/img1_2_iotmyc.jpg')",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
  }}
>
  <NavHeader />
  <div className="container mx-auto h-full flex flex-col justify-center items-center text-left p-8 space-y-4">
    <p className="text-red-500 text-lg md:text-2xl font-bold  p-2 slide-in-left">
    PIZZA OF THE DAY
    </p>
    <h1 className="text-white text-2xl md:text-6xl lg:text-8xl font-semibold mt-2 slide-in-left">
    SPICY SICILIANA
    </h1>
    <button className="bg-[#75d007] hover:text-white border border-[#75d007] text-white font-semibold py-2 md:py-3 px-2 md:px-6 hover:bg-transparent hover:text-black transition duration-300 mt-4 slide-in-left">
  Our Menu
</button>


  </div>
</div>
 
    </div>
  )
}

export default OUROFFER
