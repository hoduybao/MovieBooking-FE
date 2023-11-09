import { Carousel } from "antd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { useRef, useState } from "react";
import Slider from "react-slick";
import { navigationMovie } from "../../utils/constant";
import { NavLink } from "react-router-dom";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const LeftArrow = {
  position: "absolute",
  top: "50%",
  left: "20px",
  transform: "translateY(-50%)",
  cursor: "pointer",
};

const RightArrow = {
  position: "absolute",
  top: "50%",
  right: "20px",
  transform: "translateY(-50%)",
  cursor: "pointer",
};

var introduces = [
  "https://image.cineplexbd.com/slider/165528738755358.webp",
  "https://image.cineplexbd.com/slider/165528741962580.webp",
  "https://image.cineplexbd.com/slider/165528735641470.webp",
  "https://image.cineplexbd.com/slider/165528732771187.webp",
  "https://image.cineplexbd.com/slider/169650183247587.webp",
];
var settings = {
  dots: false, //dấu ... ở dưới
  infinite: false,
  variableWidth :true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  swipeToSlie: true,
}; 

function Home() {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleNext = () => {
    carouselRef.current.next();
  };
  return (
    <div className="flex flex-col">
      <div className="relative">
        <Carousel
          ref={carouselRef}
          autoplay
          waitForAnimate={true}
          dotWidth={25}
          dotHeight={10}
          className="peer"
        >
          {introduces.map((el, index) => (
            <img
              style={contentStyle}
              src={el}
              key={index}
              alt="slider"
              className="filter brightness"
            />
          ))}
        </Carousel>
        <div style={LeftArrow} onClick={handlePrev}>
          <LeftCircleOutlined style={{ fontSize: "200%", color: "#31064a" }} />
        </div>
        <div style={RightArrow} onClick={handleNext}>
          <RightCircleOutlined style={{ fontSize: "200%", color: "#31064a" }} />
        </div>
      </div>
      <div className="w-full flex justify-center bg-[#31064a]">
        <div className="w-main h-[500px]">
          <div className="flex mt-8 gap-10">
            {navigationMovie.map((el) => (
              <NavLink
                to={el.path}
                key={el.id}
                className={({ isActive }) =>
                  isActive
                    ? " text-white font-semibold text-xl"
                    : `text-white font-semibold text-xl relative inline-block after:absolute after:content-'' after:w-full after:h-[3px] after:bg-white after:left-0 after:bottom-[-6px] after:scale-x-0 after:origin-right after:transform after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left`
                }
              >
                {el.value}
              </NavLink>
            ))}
          </div>
          <div className="mt-8 w-full" >
            <Slider {...settings} className="w-full">
              <div className="pr-4">
              <div className="relative w-[250px] h-[350px] overflow-hidden ">
                <img
                  alt="avatar_movie"
                  src="https://cineplex2023.s3.ap-southeast-1.amazonaws.com/web-uploads/movies/169345859857129.webp"
                  className="w-full h-full object-cover"
                />
                <button className="absolute cursor-pointer bottom-5 text-sm rounded-r items-center  bg-purple-900 hover:bg-transparent border-purple-900 border-2 h-8 text-white px-3">
                  Get tickets
                </button>
                <div className="absolute group w-full h-full top-0 left-0 bg-gradient-to-t bg-black/[.50] from-[rgba(6,15,25,0.7)] to-[rgba(255,124,209,0.5)] opacity-0 transition-opacity duration-300 hover:opacity-100 z-10">
                  <button className="absolute cursor-pointer -right-20 group-hover:animate-slide-right text-sm rounded-l border-2 items-center bg-purple-900 hover:bg-transparent border-purple-900  h-8 text-white px-3">
                    Details
                  </button>
                  <button className="absolute cursor-pointer bottom-5 text-sm rounded-r items-center bg-purple-900 hover:bg-transparent border-purple-900 border-2 h-8 text-white px-3">
                    Get tickets
                  </button>
                  <div className="absolute text-sm text-white left-4  -bottom-20 group-hover:animate-slide-bottom">
                    <h3>Jawan</h3>
                    <p className="mt-3">RELEASE: 07-09-2023</p>
                    <p>GENRE: ACTION, THRILLER</p>
                  </div>
                  <div className="absolute cursor-pointer left-[50%] -top-20   group-hover:animate-slide-top">
                    <AiOutlinePlayCircle size={45} color="white" />
                  </div>
                </div>
              </div>
              </div>
              <div className="px-4">
              <div className="relative w-[250px] h-[350px] overflow-hidden ">
                <img
                  alt="avatar_movie"
                  src="https://cineplex2023.s3.ap-southeast-1.amazonaws.com/web-uploads/movies/169345859857129.webp"
                  className="w-full h-full object-cover"
                />
                <button className="absolute cursor-pointer bottom-5 text-sm rounded-r items-center  bg-purple-900 hover:bg-transparent border-purple-900 border-2 h-8 text-white px-3">
                  Get tickets
                </button>
                <div className="absolute group w-full h-full top-0 left-0 bg-gradient-to-t bg-black/[.50] from-[rgba(6,15,25,0.7)] to-[rgba(255,124,209,0.5)] opacity-0 transition-opacity duration-300 hover:opacity-100 z-10">
                  <button className="absolute cursor-pointer -right-20 group-hover:animate-slide-right text-sm rounded-l border-2 items-center bg-purple-900 hover:bg-transparent border-purple-900  h-8 text-white px-3">
                    Details
                  </button>
                  <button className="absolute cursor-pointer bottom-5 text-sm rounded-r items-center bg-purple-900 hover:bg-transparent border-purple-900 border-2 h-8 text-white px-3">
                    Get tickets
                  </button>
                  <div className="absolute text-sm text-white left-4  -bottom-20 group-hover:animate-slide-bottom">
                    <h3>Jawan</h3>
                    <p className="mt-3">RELEASE: 07-09-2023</p>
                    <p>GENRE: ACTION, THRILLER</p>
                  </div>
                  <div className="absolute cursor-pointer left-[50%] -top-20   group-hover:animate-slide-top">
                    <AiOutlinePlayCircle size={45} color="white" />
                  </div>
                </div>
              </div>
              </div>
              <div className="px-4">
              <div className="relative w-[250px] h-[350px] overflow-hidden ">
                <img
                  alt="avatar_movie"
                  src="https://cineplex2023.s3.ap-southeast-1.amazonaws.com/web-uploads/movies/169345859857129.webp"
                  className="w-full h-full object-cover"
                />
                <button className="absolute cursor-pointer bottom-5 text-sm rounded-r items-center  bg-purple-900 hover:bg-transparent border-purple-900 border-2 h-8 text-white px-3">
                  Get tickets
                </button>
                <div className="absolute group w-full h-full top-0 left-0 bg-gradient-to-t bg-black/[.50] from-[rgba(6,15,25,0.7)] to-[rgba(255,124,209,0.5)] opacity-0 transition-opacity duration-300 hover:opacity-100 z-10">
                  <button className="absolute cursor-pointer -right-20 group-hover:animate-slide-right text-sm rounded-l border-2 items-center bg-purple-900 hover:bg-transparent border-purple-900  h-8 text-white px-3">
                    Details
                  </button>
                  <button className="absolute cursor-pointer bottom-5 text-sm rounded-r items-center bg-purple-900 hover:bg-transparent border-purple-900 border-2 h-8 text-white px-3">
                    Get tickets
                  </button>
                  <div className="absolute text-sm text-white left-4  -bottom-20 group-hover:animate-slide-bottom">
                    <h3>Jawan</h3>
                    <p className="mt-3">RELEASE: 07-09-2023</p>
                    <p>GENRE: ACTION, THRILLER</p>
                  </div>
                  <div className="absolute cursor-pointer left-[50%] -top-20   group-hover:animate-slide-top">
                    <AiOutlinePlayCircle size={45} color="white" />
                  </div>
                </div>
              </div>
              </div>
              <div className="px-4">
              <div className="relative w-[250px] h-[350px] overflow-hidden ">
                <img
                  alt="avatar_movie"
                  src="https://cineplex2023.s3.ap-southeast-1.amazonaws.com/web-uploads/movies/169345859857129.webp"
                  className="w-full h-full object-cover"
                />
                <button className="absolute cursor-pointer bottom-5 text-sm rounded-r items-center  bg-purple-900 hover:bg-transparent border-purple-900 border-2 h-8 text-white px-3">
                  Get tickets
                </button>
                <div className="absolute group w-full h-full top-0 left-0 bg-gradient-to-t bg-black/[.50] from-[rgba(6,15,25,0.7)] to-[rgba(255,124,209,0.5)] opacity-0 transition-opacity duration-300 hover:opacity-100 z-10">
                  <button className="absolute cursor-pointer -right-20 group-hover:animate-slide-right text-sm rounded-l border-2 items-center bg-purple-900 hover:bg-transparent border-purple-900  h-8 text-white px-3">
                    Details
                  </button>
                  <button className="absolute cursor-pointer bottom-5 text-sm rounded-r items-center bg-purple-900 hover:bg-transparent border-purple-900 border-2 h-8 text-white px-3">
                    Get tickets
                  </button>
                  <div className="absolute text-sm text-white left-4  -bottom-20 group-hover:animate-slide-bottom">
                    <h3>Jawan</h3>
                    <p className="mt-3">RELEASE: 07-09-2023</p>
                    <p>GENRE: ACTION, THRILLER</p>
                  </div>
                  <div className="absolute cursor-pointer left-[50%] -top-20   group-hover:animate-slide-top">
                    <AiOutlinePlayCircle size={45} color="white" />
                  </div>
                </div>
              </div>
              </div>
              <div className="px-4">
              <div className="relative w-[250px] h-[350px] overflow-hidden ">
                <img
                  alt="avatar_movie"
                  src="https://cineplex2023.s3.ap-southeast-1.amazonaws.com/web-uploads/movies/169345859857129.webp"
                  className="w-full h-full object-cover"
                />
                <button className="absolute cursor-pointer bottom-5 text-sm rounded-r items-center  bg-purple-900 hover:bg-transparent border-purple-900 border-2 h-8 text-white px-3">
                  Get tickets
                </button>
                <div className="absolute group w-full h-full top-0 left-0 bg-gradient-to-t bg-black/[.50] from-[rgba(6,15,25,0.7)] to-[rgba(255,124,209,0.5)] opacity-0 transition-opacity duration-300 hover:opacity-100 z-10">
                  <button className="absolute cursor-pointer -right-20 group-hover:animate-slide-right text-sm rounded-l border-2 items-center bg-purple-900 hover:bg-transparent border-purple-900  h-8 text-white px-3">
                    Details
                  </button>
                  <button className="absolute cursor-pointer bottom-5 text-sm rounded-r items-center bg-purple-900 hover:bg-transparent border-purple-900 border-2 h-8 text-white px-3">
                    Get tickets
                  </button>
                  <div className="absolute text-sm text-white left-4  -bottom-20 group-hover:animate-slide-bottom">
                    <h3>Jawan</h3>
                    <p className="mt-3">RELEASE: 07-09-2023</p>
                    <p>GENRE: ACTION, THRILLER</p>
                  </div>
                  <div className="absolute cursor-pointer left-[50%] -top-20   group-hover:animate-slide-top">
                    <AiOutlinePlayCircle size={45} color="white" />
                  </div>
                </div>
              </div>
              </div>
              <div className="px-4">
              <div className="relative w-[250px] h-[350px] overflow-hidden ">
                <img
                  alt="avatar_movie"
                  src="https://cineplex2023.s3.ap-southeast-1.amazonaws.com/web-uploads/movies/169345859857129.webp"
                  className="w-full h-full object-cover"
                />
                <button className="absolute cursor-pointer bottom-5 text-sm rounded-r items-center  bg-purple-900 hover:bg-transparent border-purple-900 border-2 h-8 text-white px-3">
                  Get tickets
                </button>
                <div className="absolute group w-full h-full top-0 left-0 bg-gradient-to-t bg-black/[.50] from-[rgba(6,15,25,0.7)] to-[rgba(255,124,209,0.5)] opacity-0 transition-opacity duration-300 hover:opacity-100 z-10">
                  <button className="absolute cursor-pointer -right-20 group-hover:animate-slide-right text-sm rounded-l border-2 items-center bg-purple-900 hover:bg-transparent border-purple-900  h-8 text-white px-3">
                    Details
                  </button>
                  <button className="absolute cursor-pointer bottom-5 text-sm rounded-r items-center bg-purple-900 hover:bg-transparent border-purple-900 border-2 h-8 text-white px-3">
                    Get tickets
                  </button>
                  <div className="absolute text-sm text-white left-4  -bottom-20 group-hover:animate-slide-bottom">
                    <h3>Jawan</h3>
                    <p className="mt-3">RELEASE: 07-09-2023</p>
                    <p>GENRE: ACTION, THRILLER</p>
                  </div>
                  <div className="absolute cursor-pointer left-[50%] -top-20   group-hover:animate-slide-top">
                    <AiOutlinePlayCircle size={45} color="white" />
                  </div>
                </div>
              </div>
              </div>
              
           
           
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
