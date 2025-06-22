import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import customer from '../../public/customer-top.png'
const testimonials = [
  {
    text: "Their delivery speed is unmatched. My package arrived in just 4 hours inside Dhaka!",
    name: "Nusrat Jahan",
    passion: "Small Business Owner",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    text: "Loved the live tracking feature. I knew exactly when to expect my parcel.",
    name: "Riyad Hasan",
    passion: "eCommerce Seller",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    text: "Even during rush hour, they managed to deliver on time. Super reliable service!",
    name: "Tasnim Haque",
    passion: "Online Boutique Owner",
    image: "https://i.pravatar.cc/150?img=13",
  },
  {
    text: "My fragile items were delivered safely without a single scratch. Highly recommended!",
    name: "Fahim Rahman",
    passion: "Electronics Retailer",
    image: "https://i.pravatar.cc/150?img=14",
  },
  {
    text: "Cash on delivery service helped me grow trust with my customers.",
    name: "Lamia Karim",
    passion: "Social Media Seller",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    text: "I booked delivery from Khulna to Dhaka and it reached within 2 days!",
    name: "Sajjadul Islam",
    passion: "Freelancer",
    image: "https://i.pravatar.cc/150?img=16",
  },
]

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)

  return (
    <section className="py-24 px-4 md:px-10 lg:px-20 overflow-hidden">
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-14">
          <div className="flex mb-5 justify-center">
           <img src={customer} alt="" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            What Our Customers Are {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
              Saying
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Discover how our delivery service has transformed businesses across Bangladesh. Real stories from real
            customers who trust us with their most important deliveries.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative pb-24">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={40}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper
            }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              renderBullet: (index, className) => `<span class="${className} custom-bullet"></span>`,
            }}
            className="testimonial-swiper pb-16"
            breakpoints={{
              640: {
                slidesPerView: 1.4,
                spaceBetween: 32,
              },
              768: {
                slidesPerView: 1.8,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2.4,
                spaceBetween: 48,
              },
              1280: {
                slidesPerView: 2.8,
                spaceBetween: 56,
              },
            }}
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                {({ isActive }) => (
                  <div
                    className={`transition-all duration-700 ease-out transform ${
                      isActive 
                        ? "translate-y-0 opacity-100 scale-100" 
                        : "translate-y-16 opacity-30 scale-90 blur-sm"
                    }`}
                  >
                    <div
                      className={`bg-white rounded-3xl p-8 md:p-10 transition-all duration-700 relative overflow-hidden ${
                        isActive
                          ? "shadow-2xl shadow-blue-500/20 border-2 border-blue-200 ring-4 ring-blue-100/50"
                          : "shadow-lg border border-gray-200"
                      }`}
                      style={{ minHeight: "350px" }}
                    >
                      {/* Decorative gradient overlay for active card */}
                      {isActive && (
                        <>
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20 pointer-events-none"></div>
                        </>
                      )}

                      {/* Quote Icon */}
                      <div className="mb-8 relative z-10">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                          isActive 
                            ? "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30" 
                            : "bg-gray-100"
                        }`}>
                          <svg 
                            className={`w-7 h-7 transition-colors duration-300 ${
                              isActive ? "text-white" : "text-gray-400"
                            }`} 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className={`text-lg md:text-xl leading-relaxed mb-10 font-medium relative z-10 transition-colors duration-300 ${
                        isActive ? "text-gray-800" : "text-gray-600"
                      }`}>
                        "{item.text}"
                      </blockquote>

                      {/* Customer Info */}
                      <div className="flex items-center gap-5 pt-8 border-t border-gray-100 relative z-10">
                        <div className="relative">
                          <img
                            src={item.image || "/placeholder.svg?height=64&width=64"}
                            alt={item.name}
                            className={`w-16 h-16 rounded-full object-cover transition-all duration-500 ${
                              isActive 
                                ? "ring-4 ring-blue-200 shadow-xl shadow-blue-500/20" 
                                : "ring-2 ring-gray-200"
                            }`}
                          />
                          <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-3 border-white transition-colors duration-300 ${
                            isActive ? "bg-green-500" : "bg-gray-400"
                          }`}></div>
                        </div>
                        <div>
                          <h4 className={`font-bold text-xl transition-colors duration-300 ${
                            isActive ? "text-gray-900" : "text-gray-700"
                          }`}>
                            {item.name}
                          </h4>
                          <p className={`font-semibold transition-colors duration-300 ${
                            isActive ? "text-blue-600" : "text-gray-500"
                          }`}>
                            {item.passion}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <div className="w-fit mx-auto flex gap-3 items-center mt-10">
            {/* Previous Button */}
            <button className="prev-btn group flex items-center justify-center rounded-full bg-white border-2 border-gray-200 text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95">
              <ChevronLeft className="w-12 h-12 p-3 group-hover:-translate-x-0.5 transition-transform duration-200" />
            </button>

            {/* Custom Pagination Dots */}
            <div className="custom-pagination"></div>

            {/* Next Button */}
            <button className="next-btn group flex items-center justify-center rounded-full bg-white border-2 border-gray-200 text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95">
              <ChevronRight className="w-12 h-12 p-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
    
    </section>
  )
}