import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading="From 11:00am to 10:00pm"
        heading="ORDER ONLINE"
      ></SectionTitle>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="" src={img1} alt="" srcSet="" />
          <h3 className="text-center text-white -mt-20 font-serif text-4xl drop-shadow-lg">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" srcSet="" />
          <h3 className="text-center text-white -mt-20 font-serif text-4xl drop-shadow-lg">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" srcSet="" />
          <h3 className="text-center text-white -mt-20 font-serif text-4xl drop-shadow-lg">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" srcSet="" />
          <h3 className="text-center text-white -mt-20 font-serif text-4xl drop-shadow-lg">
            Deserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" srcSet="" />
          <h3 className="text-center text-white -mt-20 font-serif text-4xl drop-shadow-lg">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" srcSet="" />
          <h3 className="text-center text-white -mt-20 font-serif text-4xl drop-shadow-lg">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" srcSet="" />
          {/* <h3 className="text-center text-white -mt-20 font-serif text-4xl drop-shadow-lg">
            Soups
          </h3> */}
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
