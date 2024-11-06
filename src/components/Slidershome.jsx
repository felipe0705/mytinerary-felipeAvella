import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaAngleLeft, FaAngellist, FaAngleRight } from "react-icons/fa";
import { getSlides } from "../store/actions/homeActions";

function Carousel() {
  const dispatch = useDispatch();
  const { slides, loading, error } = useSelector((state) => state.slides);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(getSlides());
  }, [dispatch]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  if (loading) return <div>Cargando...</div>; if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div
        className="flex aspect-video duration-10000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-86  p-2 grid md:grid-cols-2  gap-2"
          >
            {slide.map((image, idx) => (
              <div
                key={idx}
                className="flex relative text-neutral-100 shadow-lg overflow-hidden rounded-2xl"
              >
                <img
                  src={image.photo}
                  alt={image.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute right-0 top-0 px-4 m-4 py-2 rounded-lg text-2xl gap-2 flex bg-black/20">
                  <button
                    className="drop-shadow-sm fa-heart fa-solid text-white"
                    aria-hidden="true"
                  >
                    <FaAngellist></FaAngellist>
                  </button>
                </div>
                <h1 className="absolute bottom-0 xs:text-lg py-2 px-4 bg-gradient-to-tr from-blue-800 to-blue-600 font-medium rounded-tr-lg shadow-lg">
                  {image.name}
                </h1>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="absolute w-full mt-10 justify-between flex hover:[&>*]:bg-white/50 [&>*]:px-4 [&>*]:py-2 [&>*]:rounded-full text-neutral-100 text-3xl  sm:text-5xl">
        <button
          onClick={prevSlide}
          className=" transform -translate-y-1/2 bg-gray-800 bg-opacity-75 text-white p-1"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={nextSlide}
          className=" transform -translate-y-1/2 bg-gray-800 bg-opacity-75 text-white p-1"
        >
          <FaAngleRight />
        </button>
      </div>
    </>
  );
}

export default function BodyHome() {
  return (
    <>
      <section
        className="flex p-10 max-md:flex-wrap-reverse gap-8 justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url('/2.jpeg')` }}
      >
        <div className="flex flex-col h-full items-center backdrop-blur  md:w-5/12 gap-6 xs:gap-12 bg-slate-700 p-8 rounded-lg shadow-xl">
          <div className="font-bold text-white text-3xl sm:text-4xl">
            WELCOME
          </div>
          <div className="text-white text-2xl">
            Here you will find the perfect route for an unforgettable trip
          </div>
          <a
            className="disabled:cursor-not-allowed disabled:brightness-75 hover:bg-blue-600 active:scale-95 disabled:active:scale-100  transition-all bg-blue-700 text-white shadow-lg font-bold rounded-lg p-3 text-center  max-w-xs w-full text-xl"
            href="/cities"
          >
            View more
          </a>
        </div>

        <div className="flex flex-col w-full   grow justify-center items-center gap-4">
          <h2 className="text-center font-bold text-3xl sm:text-4xl">
            Popular Itineraries
          </h2>
          <div className="flex justify-center h-full  items-center overflow-hidden  relative">
            <Carousel></Carousel>
          </div>
        </div>
      </section>
    </>
  );
}
