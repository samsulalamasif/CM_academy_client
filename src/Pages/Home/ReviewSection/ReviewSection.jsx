import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeftCircle, BsArrowRightCircleFill } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ReviewSection.css";
import { Rating, StickerStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  // const swiperRef = useRef(null); // Reference to the Swiper instance

  useEffect(() => {
    // Fetch the JSON data
    fetch(
      "https://cm-academy-test-server-production.up.railway.app/ratingAndFeedback"
    )
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  // const handleLeftButtonClick = () => {
  //   if (swiperRef.current) {
  //     swiperRef.current.slidePrev(); // Move the slider to the previous slide
  //   }
  // };

  // const handleRightButtonClick = () => {
  //   if (swiperRef.current) {
  //     swiperRef.current.slideNext(); // Move the slider to the next slide
  //   }
  // };

  // Swiper breakpoints for responsive design
  const breakpoints = {
    768: {
      slidesPerView: 3,
    },
    0: {
      slidesPerView: 1,
    },
  };

  const myStyles = {
    itemShapes: StickerStar,
    activeFillColor: "#DFCF41",
    inactiveFillColor: "#1bbf7240",
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-left mb-1 ml-2">Students Review</h1>
      </div>
      <Swiper
        // ref={swiperRef} // Set the Swiper instance reference
        loop={true}
        slidesPerView={2}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper "
        breakpoints={breakpoints}
      >
        <div className="w-full mx-auto md:w-3/4 grid grid-cols-1  gap-6">
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 items-center  border rounded-md p-4 relative pt-10">
                <div className="w-1/2">
                  <img
                    className="w-1/2"
                    src={review.studentImage}
                    alt={review.studentName}
                  />
                </div>
                <div>
                  <div className="text-start">
                    <h1 className="font-bold text-xl my-2">
                      {review.courseTitle}
                    </h1>
                    <p>{review.feedback}</p>
                    <div className="flex items-center justify-start my-4 gap-1">
                      <p className="font-bold text-gray-600">{review.rating}</p>
                      <Rating
                        className=""
                        style={{ maxWidth: 80 }}
                        value={review.rating}
                        readOnly
                        itemStyles={myStyles}
                      />

                      {/* <FiUsers className="text-[#1bbf72fb]" /> */}
                    </div>
                  </div>
                  <hr className="my-2" />
                  <div className="text-start">
                    <h3 className="text-xl font-bold">{review.studentName}</h3>
                  </div>
                </div>
              </div>
              <div className="w-1/12 absolute top-4 right-10">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/56/56826.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      {/* <div className='flex justify-end gap-4 items-center text-4xl ml-6 bg-white p-3 rounded-xl'>
        <button >
          <BsArrowLeftCircle className='hover:scale-105 duration-300' />
        </button>
        <button >
          <BsArrowRightCircleFill className='hover:scale-105 duration-300' />
        </button>
      </div> */}
    </div>
  );
};

export default ReviewSection;
