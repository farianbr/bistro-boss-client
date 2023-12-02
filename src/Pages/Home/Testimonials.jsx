import { Rating } from "@mui/material";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="px-32 mb-32">
      <SectionTitle
        subHeading="What Our Clients Say"
        heading="testimonials"
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center justify-center mx-32">
              <Rating
                name="read-only"
                value={review.rating}
                readOnly
                size="large"
              />
              <FontAwesomeIcon className="fa-4x my-8" icon={faQuoteLeft} />
              <p className="text-neutral-700 text-xl font-normal font-['Inter'] leading-[35px]">{review.details}</p>
              <h3 className="text-yellow-600 text-[32px] font-medium font-['Inter']">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
