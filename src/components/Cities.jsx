import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCity } from "../store/reducers/itinerarieReducer";
import { TbHomeSearch } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import { getCities } from "../store/actions/cityActions";
import CityFilter from "./Citiesfilter";


function CityButton ({ city }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    dispatch(setSelectedCity(city));
    navigate("/itinerarie");
  };

  return (
    <button
      onClick={handleNavigate}
      className="bg-blue-700 text-white shadow-lg font-bold rounded-lg p-3 text-center w-40"
    >
      More information
    </button>
  );
}

function Cities() {
  const dispatch = useDispatch();
  
  const {
    cities = [],
    loading,
    error,
    search,
    continent,
  } = useSelector((state) => state.cities);

  useEffect(() => {
    dispatch(getCities({ search, continent }));
  }, [dispatch, search, continent]);

  

  return (
    <>
      <section className="flex justify-center  items-center">
        <div className="flex ">
          <CityFilter />
          <div className="flex ml-4 justify-center  items-center">
            <NavLink to="/">
              <TbHomeSearch className=" text-2xl" />
            </NavLink>
          </div>
        </div>
      </section>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      {Array.isArray(cities) && cities.length > 0 && (
        <section className="flex flex-wrap gap-8 justify-center">
          {cities.map((city) => (
            <div
              key={city.city}
              className="rounded-lg shadow-lg relative flex overflow-hidden w-96 h-60"
            >
              <img
                className="w-full h-full object-cover absolute inset-0 brightness-75"
                src={city.photo}
                alt={city.name}
              />
              <div className="relative flex flex-col w-full justify-between p-4 text-neutral-100">
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold">{city.city}</h1>
                </div>
                <CityButton city={city} />
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
}


export default Cities ;
