
import { FilterProvider } from "../context/FilterContext.jsx";
import BodyHome from "../components/Slidershome";

const HomePage = () => {
  return (
    <FilterProvider>
      <BodyHome />
    </FilterProvider>
  );
};

export default HomePage;
