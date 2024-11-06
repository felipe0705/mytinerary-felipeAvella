import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItineraries } from "../store/actions/itinerarieActions";
const ItinerariePage = () => {
  const selectedCity = useSelector((state) => state.itinerarie.selectedCity);

  return (
    <>
      {selectedCity ? (
        <>
          <img
            src={selectedCity.photo}
            className="h-screen absolute w-full  object-cover object-center brightness-[.65] shadow-lg false"
          />
          <section className="flex relative flex-col gap-4 items-center h-screen">
            <div className="h-screen flex flex-col justify-center items-center text-neutral-100 text-center max-w-2xl gap-4">
              <h1 className="text-5xl font-bold"> {selectedCity.city}</h1>
              <p className="text-2xl italic font-light">
                {selectedCity.description}
              </p>
            </div>
          </section>
        </>
      ) : (
        <p>No city selected</p>
      )}
    </>
  );
};
const Itinerarie = () => {
  const dispatch = useDispatch();
  const selectedCity = useSelector((state) => state.itinerarie.selectedCity);
  const itineraries = useSelector((state) => state.itinerarie.itineraries);
  const loading = useSelector((state) => state.itinerarie.loading);
  const error = useSelector((state) => state.itinerarie.error);
  useEffect(() => {
    if (selectedCity) {
      dispatch(fetchItineraries(selectedCity.city));
    }
  }, [dispatch, selectedCity]);
  return (
    <>
      {selectedCity ? (
        <>
          <section className="space-y-8 text-black dark:text-neutral-300">
            <h1 className="text-center text-3xl font-bold">FEATURES</h1>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="dark:border-sky-500 dark:shadow-sky-500 from-sky-500/50 via-sky-400 to-sky-200 shadow-lg text-neutral-600 dark:text-neutral-300 shadow-slate-400 dark:bg-none dark:border w-[min(100%,15rem)] xs:h-[25rem] grid gap-2 bg-gradient-to-tl p-2 rounded-lg">
                <img
                  src="./poblacion.png"
                  className="w-full aspect-square dark:brightness-85 m-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.35)]"
                />
                <h3 className="text-xl font-medium text-center">
                  Population: {selectedCity.population}
                </h3>
              </div>
              <div className="dark:border-sky-500 dark:shadow-sky-500 from-sky-500/50 via-sky-400 to-sky-200 shadow-lg text-neutral-600 dark:text-neutral-300 shadow-slate-400 dark:bg-none dark:border w-[min(100%,15rem)] xs:h-[25rem] grid gap-2 bg-gradient-to-tl p-2 rounded-lg">
                <img
                  src="./moneda.png"
                  className="w-full aspect-square dark:brightness-85 m-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.35)]"
                />
                <h3 className="text-xl font-medium text-center">
                  Currency: {selectedCity.currency}
                </h3>
              </div>
              <div className="dark:border-sky-500 dark:shadow-sky-500 from-sky-500/50 via-sky-400 to-sky-200 shadow-lg text-neutral-600 dark:text-neutral-300 shadow-slate-400 dark:bg-none dark:border w-[min(100%,15rem)] xs:h-[25rem] grid gap-2 bg-gradient-to-tl p-2 rounded-lg">
                <img
                  src="./country.png"
                  className="w-full aspect-square dark:brightness-85 m-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.35)]"
                />
                <h3 className="text-xl font-medium text-center">
                  Country: {selectedCity.country}
                </h3>
              </div>
            </div>
            {loading ? (
              <p>Loading itineraries...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <div className="space-y-8 text-black dark:text-neutral-300">
                <h1 className="text-center text-3xl font-bold">ITINERARIES</h1>
                <div className="grid justify-items-center gap-8">
                  {itineraries.map((itinerary, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden w-[min(100%,34rem)] border bg-slate-50 dark:bg-black dark:border dark:border-slate-700 rounded-lg shadow-xl"
                    >
                      <div className="absolute left-0 top-0 px-4 py-2 rounded-lg text-2xl gap-2 text-neutral-100 flex bg-neutral-600/50 m-4">
                        <button
                          className=" drop-shadow-sm fa-heart active:animate-ping fa-solid"
                          aria-hidden="true"
                        >
                          {itinerary.likes}
                        </button>
                        
                      </div>
                      {itinerary.itinerary.map((itinerary, index) => (
                        <img
                          src={itinerary.site_photo}
                          key={index}
                          className="w-full aspect-video object-cover"
                        />
                      ))}

                      <div className="flex p-4 pb-0 gap-4">
                        <div className="flex flex-col items-center min-w-[5rem]">
                          <img src={itinerary.userphoto} alt="" />
                          <p className="text-xs font-light mt-1">Created by</p>
                          <p className="leading-3 font-bold text-center">
                            {itinerary.username}
                          </p>
                        </div>

                        <div className="grid w-full"></div>
                      </div>
                      <div className="flex flex-col"></div>
                      <h3 className="text-xl font-medium text-center">
                        {itinerary.username}
                      </h3>
                      <p className="text-center">{itinerary.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        </>
      ) : (
        <p>No city selected</p>
      )}
    </>
  );
};

export { ItinerariePage, Itinerarie };
