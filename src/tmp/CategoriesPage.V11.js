import { useLocation } from "react-router-dom";

export default function CategoriesPage() {
  // location.search===?queries
  // .../categories?skip=0&limit=10
  const location = useLocation();
  console.log(location);
  const query = new URLSearchParams(location.search);
  console.log(query);
  //   val1 || val2 == val1 otherwise val2
  const skip = query.get("skip") || 0;
  const limit = query.get("limit") || 10;

  const handleNext = () => {
    query.set("skip", "100");
    query.set("limit", "200");
  };
  return (
    <div>
      <h1>Categories Page</h1>
      <h2>Skip : {skip}</h2>
      <h2>Limit : {limit} </h2>

      <button onClick={handleNext}>Next</button>
    </div>
  );
}
