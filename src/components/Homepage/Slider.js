import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Slider() {
  return (
    <>
      <Swiper
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="popular-info"
      >

        <SwiperSlide className="swiper-slide-1">
          <div>
            <h2>Takamine</h2>
            <p>Vintage 12 strings<br/> GJ72CE - 12BSB</p>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
