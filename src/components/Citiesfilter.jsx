import { useDispatch, useSelector } from "react-redux";
import { setContinent, setSearch, getCities, getContinents } from "../store/actions/cityActions";
import { useEffect } from "react";

const CityFilter = () => {
  const { continent, search, continents } = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContinents());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
    dispatch(getCities({ search: e.target.value, continent })); // Despacha la acción con los nuevos filtros
  };

  const handleContinentChange = (e) => {
    dispatch(setContinent(e.target.value));
    dispatch(getCities({ search, continent: e.target.value })); // Despacha la acción con los nuevos filtros
  };

  return (
    <div className="mb-5 flex gap-5 items-center">
      <label className="flex flex-col text-sm">
      <span className="mb-1">Continent:</span>
        <select value={continent} onChange={handleContinentChange} className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="All">Todos</option>
          {continents.map((cont) => (
            <option key={cont} value={cont}>{cont}</option>
          ))}
        </select>
      </label>
      <label className="flex flex-col text-sm">
        Search:
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Buscar ciudades..."
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
    </div>
  );
};

export default CityFilter;
