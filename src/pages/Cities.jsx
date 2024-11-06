import { FilterProvider } from "../context/FilterContext.jsx";
import Cities from "../components/Cities.jsx";

const CityPage = () => {
  return (
    <FilterProvider>
      <Cities />
    </FilterProvider>
  );
};

export default CityPage;
