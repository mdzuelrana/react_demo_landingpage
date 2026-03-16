import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper/modules";
import { motion } from "motion/react"
import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    name: "Headphone",
    price: "$120",
    image: "https://picsum.photos/200?1",
  },
  {
    id: 2,
    name: "Laptop",
    price: "$950",
    image: "https://picsum.photos/200?2",
  },
  {
    id: 3,
    name: "Watch",
    price: "$80",
    image: "https://picsum.photos/200?3",
  },
  {
    id: 4,
    name: "Camera",
    price: "$500",
    image: "https://picsum.photos/200?4",
  },
  {
    id: 5,
    name: "Shoes",
    price: "$60",
    image: "https://picsum.photos/200?5",
  },
  {
    id: 6,
    name: "Headphone",
    price: "$120",
    image: "https://picsum.photos/200?6",
  },
  {
    id: 7,
    name: "Laptop",
    price: "$950",
    image: "https://picsum.photos/200?7",
  },
  {
    id: 8,
    name: "Watch",
    price: "$80",
    image: "https://picsum.photos/200?8",
  },
  {
    id: 9,
    name: "Camera",
    price: "$500",
    image: "https://picsum.photos/200?9",
  },
  {
    id: 10,
    name: "Shoes",
    price: "$60",
    image: "https://picsum.photos/200?10",
  },
];

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        navigation
        loop={true}
        centeredSlides={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white shadow-2xl rounded-lg p-6 m-6 text-center transition transform hover:-translate-y-1 hover:shadow-lg">
              {/* <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
              /> */}
              <motion.img
                className="w-full h-48 object-cover rounded"
                src={product.image}
                alt={product.name}
                animate={{ y: [0, -15, 0] }}
                transition={{
                    duration: 4,
                    repeat: Infinity
                }}
                />
              <h3 className="mt-3 font-semibold">{product.name}</h3>
              <p className="text-blue-500 font-bold">{product.price}</p>

              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;