import React, { useState } from "react";
import NavHeader from "../header/NavHeader";
import "../style/Home.css";
import { Carousel } from "@material-tailwind/react";

import { IoIosTimer } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
function Home() {
  const allmenu = [
    {
      id: "1",
      imgURL:
        "https://res.cloudinary.com/dh3rxo5xv/image/upload/v1728992570/img14_qdywmj.png",
      title: "GRILL`D BURGERS",
      descripation: "Beetroot water spinach okra water chestnut ricebean pea.",
    },
    {
      id: "2",
      imgURL:
        "https://res.cloudinary.com/dh3rxo5xv/image/upload/v1728992705/img15_o1ufpx.png",
      title: "VEGGIE OPTIONS",
      descripation: "Water spinach arugula pea tatsoi aubergine spring onion.",
    },
    {
      id: "3",
      imgURL:
        "https://res.cloudinary.com/dh3rxo5xv/image/upload/v1728992769/img16_ggmwwc.png",
      title: "MILKSHAKES",
      descripation:
        "Dandelion zucchini burdock yarrow chickpea dandelion sorrel.",
    },
    {
      id: "4",
      imgURL:
        "https://res.cloudinary.com/dh3rxo5xv/image/upload/v1728992804/img17_igusri.png",
      title: "DESSERTS",
      descripation:
        "Chickweed okra pea winter purslane coriander yarrow sweet.",
    },
  ];
  const choose = [
    {
      id: "1",
      imgURL:
        "https://res.cloudinary.com/dh3rxo5xv/image/upload/v1728999871/img1_hdorjq.jpg",
      title: "BEEF BURGERS",
      descripation: "Beetroot water spinach okra water chestnut ricebean pea.",
    },
    {
      id: "2",
      imgURL:
        "https://res.cloudinary.com/dh3rxo5xv/image/upload/v1728999871/img1_hdorjq.jpg",
      title: "CHICKEN BURGERS",
      descripation: "Water spinach arugula pea tatsoi aubergine spring onion.",
    },
    {
      id: "3",
      imgURL:
        "https://res.cloudinary.com/dh3rxo5xv/image/upload/v1728999871/img1_hdorjq.jpg",
      title: "VEGAN OPTIONS",
      descripation:
        "Dandelion zucchini burdock yarrow chickpea dandelion sorrel.",
    },
    {
      id: "4",
      imgURL:
        "https://res.cloudinary.com/dh3rxo5xv/image/upload/v1728999970/img4_ebiaey.jpg",
      title: "SALADS & WRAPS",
      descripation: "Water spinach arugula pea tatsoi aubergine spring onion.",
    },
    {
      id: "5",
      imgURL:
        "https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729000017/img5_ptfufx.jpg",
      title: "FRENCH FRIES",
      descripation:
        "Dandelion zucchini burdock yarrow chickpea dandelion sorrel.",
    },
    {
      id: "6",
      imgURL:
        "https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729000058/img6_onqtdn.jpg",
      title: "GREAT DESSERTS",
      descripation:
        "Chickweed okra pea winter purslane coriander yarrow sweet.",
    },
  ];

  const farmhouse = [
    {
      id: "1",
      imgURL:
        "https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729002329/img9_1_hctkes.jpg",
        special:"New",
      heading:"FARMHOUSE BURGER",
      description:"This burger’s name explains itself. Of course, you can also top it with crisp lettuce, tomatoes, ketchup, barbecue sauce and anything else.",
      price:"$2.46",
      price1:"$2.99"
    },
    {
      id: "2",
      imgURL:
        "https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729002072/img8_k5f6ug.jpg",
        special:"New",
        heading:"QUINOA & BLACK BEAN BURGER",
        description:"We can’t think of a better way to celebrate summer than with these omg-worthy hamburgers. Plus, try our over-the-top creative cheeseburgers.",
        price:"$3.99"
    },
    {
      id: "3",
      imgURL:
        "https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729002442/img10_1_ygdxwc.jpg",
        special:"New",
        heading:"CHOCOLATE MILKSHAKE",
        description:"Milkshakes always taste good if you are a chocolate lover. You can throw one together with a cream or experiment with all kinds of extra flavors.",
        price:"$3.99"
    },
    {
      id: "4",
      imgURL:
        "https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729003048/img11_1_lpicsi.jpg",
        special:"New",
        heading:"STANDARD BURGER MEAL",
        description:"These incredible burger meal offer a unique twist to the classic hamburger, incorporating ingredients like pimento cheese and sesame.",
    price:"$3.99",
    price1:"$4.99"
    },
    {
      id: "5",
      imgURL:
        "https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729003148/img12_1_boc9qe.jpg",
        special:"New",
        heading:"CHECKOUT OUR CATERING MENU",
        description:"Throwing the party is never been easier. Order now and let us spice up your party. Burger meals, french fries and cheeseburgers will cheer up your friends.",
        price:"$13.99"
    },
    {
      id: "6",
      imgURL:
        "https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729003228/img13_hvgviz.jpg",
        special:"New",
        heading:"HOW TO MAKE A PERFECT BURGER",
        description:"We will tell you a little secret. Mixing best quality steak and pork and serves them on homemade herb-butter rolls is the best version we know",
        price:"$5.99",
        
    },

  ];
 
  
  return (
    <div>



<div
  className="relative h-screen bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://res.cloudinary.com/dh3rxo5xv/image/upload/v1728978099/img7_ec49ju.jpg')",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
  }}
>
  <NavHeader />
  <div className="container mx-auto h-full flex flex-col justify-center items-start text-left p-8 space-y-4">
    <p className="text-white text-lg md:text-2xl font-bold bg-[#fc0100] p-2 slide-in-left">
      Fast Food Burgers
    </p>
    <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-semibold mt-2 slide-in-left">
      Best Burgers in
      <br /> the Galaxy
    </h1>
    <button className="bg-[#fc0100] text-white font-semibold py-2 md:py-4 px-4 md:px-6 hover:bg-white hover:text-black transition duration-300 mt-4 slide-in-left">
      Our Menu
    </button>
  </div>
</div>



<div className="flex justify-center  bg-[#fc0100] p-5 ">
  <div className="flex flex-wrap w-screen justify-center w-full gap-5 text-center container mx-auto">
    {allmenu.map((items) => (
      <div key={items.id} className="flex flex-col gap-2 items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <div className="w-32 h-32 md:w-40 md:h-40 flex justify-center items-center">
          <img
            src={items.imgURL}
            alt="imgURL"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-white text-xl md:text-2xl">{items.title}</h1>
        <p className="text-[#FF8484] text-sm md:text-base">{items.descripation}</p>
      </div>
    ))}
  </div>
</div>




  
<div className="bg-[#f7f8fa] text-white p-8">
  <div className="bg-white text-black flex flex-col items-center w-full justify-center p-10">
    <h6 className="text-white text-xl bg-[#fc0100] p-2 mb-5">
      Fast Food Burgers
    </h6>
    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold p-2 mb-3 text-center">
      Choose & Enjoy
    </h2>
    <p className="text-lg text-[#71808c] p-2 mb-3 text-center">
      Inspired by recipes and creations of the world’s best chefs
    </p>

  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full text-center items-center">
      {choose.map((items) => (
        <div key={items.id} className="flex flex-col gap-4 items-center">
          <div className="w-60 h-60 flex justify-center items-center">
            <img
              src={items.imgURL}
              alt="imgURL"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-black text-2xl">{items.title}</h1>
          <p className="text-[#71808c]">{items.descripation}</p>
        </div>
      ))}
    </div>

   
    <div className="mt-8">
      <button className="border-2 border-[#fc0100] text-[#fc0100] py-4 px-6 hover:bg-[#fc0100] hover:text-white transition-all duration-300">
        VIEW OUR FULL MENU
      </button>
    </div>
  </div>
</div>


<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
  {farmhouse.map((item, index) => (
    <div key={item.id} className="relative flex flex-col items-center">
      <div className="relative w-full h-72 sm:h-96 md:h-[28rem] lg:h-[32rem] flex justify-center items-center">
        <img
          src={item.imgURL}
          alt={item.title}
          className="w-full h-full object-cover"
        />

    
        <div className="absolute inset-0 flex flex-col justify-center items-start p-4 sm:p-6 bg-black bg-opacity-50">
          <p className="text-white text-sm sm:text-lg font-bold bg-[#fc0100] px-2 py-1 mb-1 sm:mb-2">
            {item.special}
          </p>

          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 font-bold">
            {item.heading}
          </h2>
          <p className="text-[#b1a194] text-xs sm:text-md lg:text-lg mb-2 sm:mb-3">
            {item.description}
          </p>
          <h3 className="text-white mb-2 sm:mb-3 text-2xl sm:text-3xl lg:text-4xl font-bold">
            {item.price} <span className="text-[#514c49]">{item.price1}</span>
          </h3>
          <button className="border-solid border-2 border-white text-white px-3 sm:px-4 py-2 hover:bg-white hover:text-black">
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  ))}
</div>




<div className="relative  overflow-hidden">
<Carousel
  className="h-screen"
  navigation={({ setActiveIndex, activeIndex, length }) => (
    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
      {new Array(length).fill("").map((_, i) => (
        <span
          key={i}
          className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
            activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
          }`}
          onClick={() => setActiveIndex(i)}
        />
      ))}
    </div>
  )}
>
  <div
    className="w-full h-full bg-center  p-12 text-center text-white bg-cover object-cover   flex flex-col justify-end "
    style={{
      backgroundImage: "url('https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729002442/img10_1_ygdxwc.jpg')",
    }}
  >
    <h2 className="text-white mb-2 text-2xl font-bold">CHOCOLATE MILKSHAKE</h2>
    <p>Milkshakes always taste good if you are a chocolate lover. You can throw one together with a cream or experiment with all<br/> kinds of extra flavors.</p>
    
  </div>

  <div
    className="w-full h-full bg-center  p-12 text-center text-white flex flex-col bg-cover  justify-end "
    style={{
      backgroundImage: "url('https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729003048/img11_1_lpicsi.jpg')",
    }}
  >
    <h2 className="text-white mb-2 text-2xl font-bold">CHECKOUT OUR CATERING MENU</h2>
    <p>This is Amazing Menu</p>
    
  </div>
  <div
    className="w-full h-full bg-center  p-12 text-center text-white flex flex-col bg-cover  justify-end "
    style={{
      backgroundImage: "url('https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729003148/img12_1_boc9qe.jpg')",
    }}
  >
    <h2 className="text-white mb-2 text-2xl font-bold">STANDARD BURGER MEAL</h2>
    <p>This is Amazing Deal</p>
    
  </div>
</Carousel>

</div>





      
<div class="bg-[#232323] ">
  <div class="container mx-auto max-h-dvh" >
    <div class="flex flex-col md:flex-row ">
      <div class="w-full md:w-1/2 px-4">
        <div class="ml-3 pt-4">
          <span class="mt-5 text-white font-bold p-1 bg-[#fc0100] ">
            CALL US
          </span>
          <p class="text-white text-2xl font-bold pt-2">+1-202-555-016</p>

          <div class="flex mt-4">
            <div class="text-4xl text-[#fc0100]">
              <IoIosTimer />
            </div>
            <div class="pl-4 ml-2 text-[#858585]">
              Mon-Thu: 11.00 – 23.00
              <br />
              Sat: 12.00 – 23.00
              <br />
              Sun: 12.00 – 21.00
            </div>
          </div>

          <div class="flex mt-3">
            <div class="text-4xl text-[#fc0100]">
              <CiLocationOn />
            </div>
            <div class="pl-5 ml-2 text-[#858585]">
              60 East 65th Street
              <br />
              New York City
              <br />
              NY 10065
            </div>
          </div>

          <div class="pt-4 pb-5 ml-4">
            <span class="text-[#232323] border bg-white border-white rounded-full p-2 h-8 w-8 inline-block hover:text-white  hover:bg-[#232323]">
              <FaFacebookF />
            </span>
            <span class="text-[#232323]  bg-white border border-white rounded-full p-2 h-8 w-8 inline-block ml-2 hover:text-white  hover:bg-[#232323]">
              <FaTwitter />
            </span>
            <span class="text-[#232323]  bg-white border border-white rounded-full p-2 h-8 w-8 inline-block ml-2 hover:text-white  hover:bg-[#232323]">
              <FaInstagram />
            </span>
            <span class="text-[#232323]  bg-white border border-white rounded-full p-2 h-8 w-8 inline-block ml-2 hover:text-white  hover:bg-[#232323]">
              <FaFacebookMessenger />
            </span>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/2 flex justify-end "> 
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.82331630051!2d74.23897181447937!3d31.391434960639707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919018a8ea548c1%3A0x4a52db69c2c814f!2sThe%20University%20of%20Lahore!5e0!3m2!1sen!2s!4v1613506992728!5m2!1sen!2s"
          className="w-full max-h-vh"
        ></iframe>
      </div>
    </div>
  </div>
</div>

      <div className="bg-[#fc0100]  ">
        <div className="container mx-auto flex justify-between p-6 co ">
          <h1 className="text-white text-2xl font-semibold mb-0">
            DOWNLOAD OUR MENU
          </h1>
          <button className="border-solid border-2 border-white text-white font-semibold py-4 px-6 hover:bg-white hover:text-black ">
            Our Menu
          </button>
        </div>
      </div>
      <div className="container mx-auto ">
        <nav class="text-black py-4">
          <div class="flex justify-between items-center">
            <address class="text-black">Copyright sohaib 2024.</address>
            <div class="hidden sm:flex">
              <ul class="flex space-x-6 ml-auto">
                <li class="nav-item hov1">
                  <a class="text-black hover:text-gray-300 p-3" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item hov1">
                  <a class="text-black hover:text-gray-300 p-3" href="#">
                    Pages
                  </a>
                </li>
                <li class="nav-item hov1">
                  <a class="text-black hover:text-gray-300 p-3" href="#">
                    Our Offer
                  </a>
                </li>
                <li class="nav-item hov1">
                  <a class="text-black hover:text-gray-300 p-3" href="#">
                    Galleries
                  </a>
                </li>
                <li class="nav-item hov1">
                  <a class="text-black hover:text-gray-300 p-3" href="#">
                    Blog
                  </a>
                </li>
                <li class="nav-item hov1">
                  <a class="text-black hover:text-gray-300 p-3" href="#">
                    Shop
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
<div>
  
</div>
    </div>
  );
}

export default Home;
