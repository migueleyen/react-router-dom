import { useLocation, useHistory } from "react-router-dom";

export default function CategoriesPage() {
  const history = useHistory();
  // location.search===?queries
  // .../categories?skip=0&limit=10
  const location = useLocation();
  console.log(location);
  const query = new URLSearchParams(location.search);
  console.log(query, ">>> query");
  //   val1 || val2 == val1 otherwise val2
  const skip = query.get("skip") || 0;
  const limit = query.get("limit") || 10;

  const handleNext = () => {
    query.set("skip", "100");
    query.set("limit", "200");
    console.log(query.toString(), ">>> query string");
    history.push({ search: query.toString() });
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
