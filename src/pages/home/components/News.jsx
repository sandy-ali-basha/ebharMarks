import React, { useRef } from "react";
// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
function News() {
  const sliderRef = useRef(null);

  const SlidesContent = [
    {
      title: "1 The General Transport Authority - in partnership with..",
      description:
        "The General Transport Authority, in partnership with the General Directorate of Border Guards, announced the adoption of electronic The General Transport Authority, in partnership with the General ctro",
    },
    {
      title: "2 The General Transport Authority - in partnership with..",
      description:
        "The General Transport Authority, in partnership with the General Directorate of Border Guards, announced the adoption of electronic The General Transport Authority, in partnership with the General ctro",
    },
    {
      title: "3 The General Transport Authority - in partnership with..",
      description:
        "The General Transport Authority, in partnership with the General Directorate of Border Guards, announced the adoption of electronic The General Transport Authority, in partnership with the General ctro",
    },
    {
      title: "4 The General Transport Authority - in partnership with..",
      description:
        "The General Transport Authority, in partnership with the General Directorate of Border Guards, announced the adoption of electronic The General Transport Authority, in partnership with the General ctro",
    },
    {
      title: "5 The General Transport Authority - in partnership with..",
      description:
        "The General Transport Authority, in partnership with the General Directorate of Border Guards, announced the adoption of electronic The General Transport Authority, in partnership with the General ctro",
    },
  ];

  return (
    <>
      <div className="News animate__animated animate__fadeIn">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="NewsSwiper"
          slidesPerView={3}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          ref={sliderRef}
          dir="rtl"
        >
          {SlidesContent.map((item, index) => (
            <SwiperSlide key={index}>
              {" "}
              <article className="slide">
                <h4>{item.title}</h4>

                <p>{item.description}</p>
              </article>{" "}
            </SwiperSlide>
          ))}
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default News;
