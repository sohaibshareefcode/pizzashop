import React from "react";
import Navheadergreen from "../header/Navheadergreen";
import { IoCalendarOutline } from "react-icons/io5";
import { MdPhoneCallback } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaAppleAlt } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { Carousel } from "@material-tailwind/react";
import { FaLeaf } from "react-icons/fa";
function PAGES() {
  return (
    <div>
      <div
        className="relative min-h-[120vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729146387/backimg_wkmhqq.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <Navheadergreen />
        <div className="container mx-auto h-auto max-w-6xl flex flex-col md:flex-row justify-between items-center px-2 md:px-0">
          {" "}
          {/* Added padding for mobile */}
          <div className="flex flex-col justify-center items-start text-left space-y-4 w-full md:w-1/2">
            <p className="text-[#8ec63f] text-lg md:text-2xl font-bold p-2 slide-in-left">
              VEGAN TAVERNA
            </p>
            <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-semibold mt-2 slide-in-left">
              <span
                className="text-[#8ec63f] underline"
                style={{
                  textUnderlineOffset: "30px",
                  textDecorationThickness: "5px",
                }}
              >
                Go
              </span>
              Green
            </h1>
            <p className="text-white text-sm md:text-lg lg:text-xl mt-2 slide-in-left pt-4">
              Fresh, organic ingredients. Carefully prepared.
              <br />
              Eat green for a reason.
            </p>
            <div className="flex gap-2 mt-4">
              <button className="bg-[#8ec63f] hover:bg-none hover:border-white hover:text-black text-white py-2 px-4 rounded-full">
                GET STARTED
              </button>
              <button className="bg-none border text-white border-white hover:bg-white hover:text-black py-2 px-4 rounded-full">
                Our Menu
              </button>
            </div>
          </div>
          <div className="w-full max-w-sm bg-[#030303] shadow-md rounded px-10 pt-8 pb-12 mt-9 md:mt-10 md:w-1/2 mb-10 md:mb-0">
            {" "}
            <form>
              <div className="mb-6">
                <div className="flex gap-4 mb-4">
                  <div>
                    <IoCalendarOutline className="h-14 w-14 text-[#7baa38]" />
                  </div>
                  <div className="text-[#d1d3d2]">
                    <h3>Book a table</h3>
                    <h5>Powered by OpenTable</h5>
                  </div>
                </div>
                <input
                  className="shadow appearance-none bg-[#dddddd] border rounded w-full py-3 px-4 text-[#5d5e60] leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="17-10-2024"
                />
              </div>
              <div className="mb-6">
                <input
                  className="shadow appearance-none border bg-[#dddddd] rounded w-full py-3 px-4 text-[#5d5e60] mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="1:06 pm"
                />
              </div>
              <div className="mb-6">
                <input
                  className="shadow appearance-none border bg-[#dddddd] rounded w-full py-3 px-4 text-[#5d5e60] mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="2 people"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-[#8ec63f] hover:bg-white font-bold hover:text-black text-white font-bold py-3 w-full px-5 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Find a Table
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#1b1718]">
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto justify-between items-center pt-6 pb-6 px-2 md:px-8 text-center md:text-left">
          <div>
            <p className="text-white text-sm md:text-base">
              <span className="text-[#ac1918]">TODAY’S SPECIAL:</span> Dinner
              for two at our exclusive location. Drinks are on the house.
            </p>
          </div>
          <div className="text-[#8ec63f] text-sm md:text-base mt-4 md:mt-0">
            <h2>FULL MENU</h2>
          </div>
        </div>
      </div>

      <div className="bg-[#f7f8fa] pt-14 pb-14">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          <div className="col-span-1">
            <img
              src="https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729158241/img1_1_zbzre9.jpg"
              alt=""
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="col-span-1 flex flex-col justify-center p-4">
            <h3 className="text-[#8ec63e] mb-6 text-2xl">WE OFFER</h3>
            <h2 className="text-5xl mb-6">
              <span className="text-[#8ec63e]">Free</span> Delivery!
            </h2>
            <p className="text-[#98999c] text-1xl mb-6 leading-7">
              Celery potato scallion desert raisin horseradish spinach carrot
              soko. Lotus root water spinach fennel kombu maize bamboo shoot
              green bean swiss chard seakale pumpkin onion chickpea gram corn
              nuts salsify bunya pie sprout coriander water.
            </p>

            <button className="mt-4 w-full md:w-1/2 p-3 bg-[#8ec543] border-2 border-transparent hover:border-[#8ec543] hover:bg-white hover:text-[#8ec543] text-white rounded flex items-center gap-3">
              ORDER NOW: 0800-5557654 <MdPhoneCallback />
            </button>
          </div>
        </div>

        <div className="bg-white max-w-6xl mx-auto pt-12 pb-12 pl-8 pr-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center">
              <FaMapLocationDot className="h-16 w-16 text-[#8ec63f]" />
              <div className="ml-2">
                <h3 className="text-2xl font-bold">Great location</h3>
                <p className="text-[#888888]">
                  Turnip greens yarrow
                  <br />
                  ricebean rutabaga
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <FaHome className="h-16 w-16 text-[#8ec63f]" />
              <div className="ml-2">
                <h3 className="text-2xl font-bold">Home made</h3>
                <p className="text-[#888888]">
                  Water spinach arugula
                  <br />
                  pea tatsoi abendria
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <FaGlobeAmericas className="h-16 w-16 text-[#8ec63f]" />
              <div className="ml-2">
                <h3 className="text-2xl font-bold">Nature first</h3>
                <p className="text-[#888888]">
                  Turnip greens yarrow
                  <br />
                  ricebean rutabaga
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <FaAppleAlt className="h-16 w-16 text-[#8ec63f]" />
              <div className="ml-2">
                <h3 className="text-2xl font-bold">Healthy food</h3>
                <p className="text-[#888888]">
                  Turnip greens yarrow
                  <br />
                  ricebean rutabaga
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-[#f7f8fa] pt-14 pb-14 mt-2">
          <div className="w-full flex flex-col max-w-6xl mx-auto bg-white p-5">
            <div className="flex flex-col text-center content-center gap-3 mt-5">
              <h5 className="text-[#8ec83f]">TASTY & CRUNCHY</h5>
              <h2 className="text-4xl md:text-3xl sm:text-2xl">
                Choose & enjoy
              </h2>
              <p className="text-xl sm:text-base md:text-2xl text-[#bab9b7]">
                Inspired by recipes and creations of the world’s best chefs
              </p>
            </div>

            <div className="flex flex-wrap mt-8 justify-between">
              <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
                <img
                  className="w-full"
                  src="https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729166962/img2_ezvhif.jpg"
                  alt="Gorgeous appetizers"
                />
                <div className="px-2 py-2 text-center">
                  <div className="font-bold text-xl mb-2">
                    <h2>Gorgeous appetizers</h2>
                  </div>
                  <p className="text-gray-700 text-base">
                    Water spinach arugula pea tatsoi aubergine spring onion.
                  </p>
                  <h5 className="mt-4 border-b-4 border-gray-300 pb-4 hover:text-[#90c63c]">
                    OUR FULL MENU
                  </h5>
                </div>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
                <img
                  className="w-full"
                  src="https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729167211/img3_ok8wgi.jpg"
                  alt="Reinvented vegan meals"
                />
                <div className="px-2 py-2 text-center">
                  <div className="font-bold text-xl mb-2">
                    <h2>Reinvented vegan meals</h2>
                  </div>
                  <p className="text-gray-700 text-base">
                    Beetroot water spinach okra water chestnut ricebean pea.
                  </p>
                  <h5 className="mt-4 border-b-4 border-gray-300 pb-4 hover:text-[#90c63c]">
                    BOOK YOUR TABLE
                  </h5>
                </div>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
                <img
                  className="w-full"
                  src="https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729167270/img4_1_x3tkqo.jpg"
                  alt="Beautiful pasta"
                />
                <div className="px-2 py-2 text-center">
                  <div className="font-bold text-xl mb-2">
                    <h2>Beautiful pasta</h2>
                  </div>
                  <p className="text-gray-700 text-base">
                    Dandelion zucchini burdock yarrow chickpea dandelion.
                  </p>
                  <h5 className="mt-4 border-b-4 border-gray-300 pb-4 hover:text-[#90c63c]">
                    CONTACT US
                  </h5>
                </div>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
                <img
                  className="w-full"
                  src="https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729167311/img5_1_yammzq.jpg"
                  alt="Gluten-free meals"
                />
                <div className="px-2 py-2 text-center">
                  <div className="font-bold text-xl mb-2">
                    <h2>Gluten-free meals</h2>
                  </div>
                  <p className="text-gray-700 text-base">
                    Chickweed okra pea winter purslane coriander yarrow.
                  </p>
                  <h5 className="mt-4 border-b-4 border-gray-300 pb-4 hover:text-[#90c63c]">
                    MORE DETAILS
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pt-14 pb-14 mt-2">
        <div className="w-full flex flex-col max-w-6xl mx-auto p-5">
          <div className="flex flex-col text-center content-center gap-3 mt-5 mb-5">
            <h5 className="text-[#8ec83f]">TASTY & CRUNCHY</h5>
            <h2 className="text-5xl sm:text-4xl md:text-2xl">OUR MENU</h2>

            <p className="text-lg sm:text-xl md:text-2xl text-[#bab9b7]">
              Our talented chefs prepare the best meals for you
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <div className="w-full sm:w-6/12">
              <div className="flex justify-between mb-5">
                <div className="flex items-center">
                  <FaLeaf className="h-8 w-8 text-[#8ec63f] mr-2" />
                  {/* <h2 className="font-bold text-2xl">TOMATO CAPRESE</h2> */}
                  <h2 className="font-bold text-xl sm:text-2xl">
                    TOMATO CAPRESE
                  </h2>
                </div>
                <h2 className="text-[#bab9b7] font-bold">$ 4.00</h2>
              </div>
              <h5 className="border-b-2 text-[#bab9b7] border-gray-300 pb-4 hover:text-[#90c63c] mb-4">
                Heirloom cherry tomatoes, high-quality extra-virgin olive oil
              </h5>

              <div className="flex justify-between mb-5">
                <div className="flex items-center">
                  <FaLeaf className="h-8 w-8 text-[#8ec63f] mr-2" />
                  <h2 className="font-bold  text-xl sm:text-2xl">
                    SICILIAN BALLS
                  </h2>
                </div>
                <h2 className="text-[#bab9b7] font-bold">$ 4.00</h2>
              </div>
              <h5 className="border-b-2 text-[#bab9b7] border-gray-300 pb-4 hover:text-[#90c63c] mb-4">
                Heirloom cherry tomatoes, high-quality extra-virgin olive oil
              </h5>

              <div className="flex justify-between mb-5">
                <div className="flex items-center">
                  <FaLeaf className="h-8 w-8 text-[#8ec63f] mr-2" />
                  <h2 className="font-bold  text-xl sm:text-2xl">
                    HOT SOYA BURGERS
                  </h2>
                </div>
                <h2 className="text-[#bab9b7] font-bold">$ 4.00</h2>
              </div>
              <h5 className="border-b-2 text-[#bab9b7] border-gray-300 pb-4 hover:text-[#90c63c] mb-4">
                Heirloom cherry tomatoes, high-quality extra-virgin olive oil
              </h5>
            </div>

            <div className="w-full sm:w-6/12">
              <div className="flex justify-between mb-5">
                <div className="flex items-center">
                  <h2 className="font-bold  text-xl sm:text-2xl">
                    VEGAN POTATO
                  </h2>
                </div>
                <h2 className="text-[#bab9b7] font-bold">$ 4.00</h2>
              </div>
              <h5 className="border-b-2 text-[#bab9b7] border-gray-300 pb-4 hover:text-[#90c63c] mb-4">
                Heirloom cherry tomatoes, high-quality extra-virgin olive oil
              </h5>

              <div className="flex justify-between mb-5">
                <div className="flex items-center">
                  <FaLeaf className="h-8 w-8 text-[#8ec63f] mr-2" />
                  <h2 className="font-bold  text-xl sm:text-2xl">
                    GRILLED CHEESE
                  </h2>
                </div>
                <h2 className="text-[#bab9b7] font-bold">$ 4.00</h2>
              </div>
              <h5 className="border-b-2 text-[#bab9b7] border-gray-300 pb-4 hover:text-[#90c63c] mb-4">
                Heirloom cherry tomatoes, high-quality extra-virgin olive oil
              </h5>
              <div className="flex justify-between mb-5">
                <div className="flex items-center">
                  <h2 className="font-bold  text-xl sm:text-2xl">
                    GRILLED CHEESE
                  </h2>
                </div>
                <h2 className="text-[#bab9b7] font-bold">$ 4.00</h2>
              </div>
              <h5 className="border-b-2 text-[#bab9b7] border-gray-300 pb-4 hover:text-[#90c63c] mb-4">
                Heirloom cherry tomatoes, high-quality extra-virgin olive oil
              </h5>
            </div>
          </div>

          <div className="flex items-center justify-center mt-8">
            <button
              className="border-2 border-[#8ec63f] hover:bg-[#8ec63f] font-bold hover:text-white text-[#8ec63f] py-3 px-5 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              FULL VIEW MENU
            </button>
          </div>
        </div>
      </div>

      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729172769/backimg2_fecdnk.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col text-center content-center gap-3 pt-5 pb-14">
          <h5 className="text-[#8ec83f] text-xl md:text-2xl">
            TASTY & CRUNCHY
          </h5>
          <h2 className="text-4xl md:text-6xl text-white">
            Our Taverna in Numbers
          </h2>
          <p className="text-lg md:text-2xl text-[#bab9b7]">
            Override the digital with clickthroughs
          </p>
        </div>

        <div className="flex flex-wrap justify-between max-w-6xl mx-auto mt-10">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 text-center">
            <div className="px-6 py-2">
              <div className="font-bold text-white text-6xl md:text-8xl mb-2">
                <h2>370</h2>
              </div>
              <p className="text-[#8ec63f] text-lg md:text-2xl">
                Cases Complete
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 text-center">
            <div className="px-6 py-2">
              <div className="font-bold text-6xl md:text-8xl mb-2 text-white">
                <h2>97</h2>
              </div>
              <p className="text-[#8ec63f] text-lg md:text-2xl">
                Expert Working
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 text-center">
            <div className="px-6 py-2">
              <div className="font-bold text-6xl md:text-8xl mb-2 text-white">
                <h2>100%</h2>
              </div>
              <p className="text-[#8ec63f] text-lg md:text-2xl">
                Satisfied Clients
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 text-center">
            <div className="px-6 py-2">
              <div className="font-bold text-6xl md:text-8xl mb-2 text-white">
                <h2>128</h2>
              </div>
              <p className="text-[#8ec63f] text-lg md:text-2xl">
                Award Winning
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-6xl mx-auto mt-10 mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="relative group w-full">
              <img
                src="https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729168859/gridimg5_ovuzxj.jpg"
                alt=""
                className="h-72 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white text-lg">Overlay Text 1</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative group w-full">
                <img
                  src="https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729168859/gridimg5_ovuzxj.jpg"
                  alt=""
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white text-lg">Overlay Text 2</span>
                </div>
              </div>
              <div className="relative group w-full">
                <img
                  src="https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729168859/gridimg5_ovuzxj.jpg"
                  alt=""
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white text-lg">Overlay Text 3</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-3 relative group flex justify-center items-center w-full">
              <img
                src="https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729168859/gridimg5_ovuzxj.jpg"
                alt=""
                className="h-72 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white text-lg">Overlay Text 4</span>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-6 relative group flex justify-center items-center w-full">
              <img
                src="https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729168859/gridimg5_ovuzxj.jpg"
                alt=""
                className="h-72 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white text-lg">Overlay Text 5</span>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-3 relative group flex justify-center items-center w-full">
              <img
                src="https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729168859/gridimg5_ovuzxj.jpg"
                alt=""
                className="h-72 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white text-lg">Overlay Text 6</span>
              </div>
            </div>
          </div>
        </div>
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
              backgroundImage:
                "url('https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729168859/gridimg5_ovuzxj.jpg')",
            }}
          >
            <h2 className="text-white mb-2 text-2xl font-bold">
              CHOCOLATE MILKSHAKE
            </h2>
            <p>
              {" "}
              cream or experiment with all
              <br /> kinds of extra flavors.
            </p>
          </div>

          <div
            className="w-full h-full bg-center  p-12 text-center text-white flex flex-col bg-cover  justify-end "
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729168939/gridimg2_ozjwbe.jpg')",
            }}
          >
            <h2 className="text-white mb-2 text-2xl font-bold">
              CHECKOUT OUR CATERING MENU
            </h2>
            <p>This is Amazing Menu</p>
          </div>
          <div
            className="w-full h-full bg-center  p-12 text-center text-white flex flex-col bg-cover  justify-end "
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729169002/gridimg6_mi5h1w.jpg')",
            }}
          >
            <h2 className="text-white mb-2 text-2xl font-bold">
              STANDARD BURGER MEAL
            </h2>
            <p>This is Amazing Deal</p>
          </div>
        </Carousel>
      </div>
   

      <div className="">
        {/* Main Container */}
        <div className="bg-[#232323]  pb-24 md:mb-0 ">
          {/* Map Section */}
          <div className="max-h-dvh">
            <div className="flex flex-col md:flex-row flex-wrap">
              <div className="w-full md:w-1/2 px-4">
                <div className="ml-3 pt-4">
                  <span className="mt-5 text-white font-bold p-1 bg-[#8dc546]">
                    CALL US
                  </span>
                  <p className="text-white text-2xl font-bold pt-2">
                    +1-202-555-016
                  </p>

                  <div className="flex mt-4 items-start">
                    <div className="text-4xl text-[#8dc546]">
                      <IoIosTimer />
                    </div>
                    <div className="pl-4 ml-2 text-[#858585]">
                      Mon-Thu: 11.00 – 23.00
                      <br />
                      Sat: 12.00 – 23.00
                      <br />
                      Sun: 12.00 – 21.00
                    </div>
                  </div>

                  <div className="flex mt-3 items-start">
                    <div className="text-4xl text-[#8dc546]">
                      <CiLocationOn />
                    </div>
                    <div className="pl-5 ml-2 text-[#858585]">
                      60 East 65th Street
                      <br />
                      New York City
                      <br />
                      NY 10065
                    </div>
                  </div>

                  <div className="pt-4 pb-5 ml-4 flex flex-wrap">
                    <span className="text-[#232323] border bg-white border-white rounded-full p-2 h-8 w-8 inline-block hover:text-white hover:bg-[#232323]">
                      <FaFacebookF />
                    </span>
                    <span className="text-[#232323] bg-white border border-white rounded-full p-2 h-8 w-8 inline-block ml-2 hover:text-white hover:bg-[#232323]">
                      <FaTwitter />
                    </span>
                    <span className="text-[#232323] bg-white border border-white rounded-full p-2 h-8 w-8 inline-block ml-2 hover:text-white hover:bg-[#232323]">
                      <FaInstagram />
                    </span>
                    <span className="text-[#232323] bg-white border border-white rounded-full p-2 h-8 w-8 inline-block ml-2 hover:text-white hover:bg-[#232323]">
                      <FaFacebookMessenger />
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex justify-end">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.82331630051!2d74.23897181447937!3d31.391434960639707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919018a8ea548c1%3A0x4a52db69c2c814f!2sThe%20University%20of%20Lahore!5e0!3m2!1sen!2s!4v1613506992728!5m2!1sen!2s"
                  className="w-full max-h-[500px] md:max-h-vh" 
                  style={{ border: 0 }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="bg-[#8fc83d] mt-24 md:mt-0">
          {" "}
       
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center p-4 md:p-6">
            <h1 className="text-white text-xl font-semibold mb-4 sm:mb-0">
              DOWNLOAD OUR MENU
            </h1>
            <button className="rounded-full border-2 border-white text-white font-semibold py-2 px-4 hover:bg-white hover:text-black transition duration-300">
              Our Menu
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
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
    </div>
  );
}

export default PAGES;
