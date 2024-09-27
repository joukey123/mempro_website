import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import PageHeader from "../../components/headers/PageHeader";

function SearchResult() {
  const location = useLocation();
  const results = location.state || []; // 전달된 state 값이 없을 경우 대비

  console.log(location.state, "lState");
  return (
    <>
      <PageHeader />
      <div>
        {results.length > 0 ? (
          results.map((item, index) => (
            <li key={index} style={{ color: "black" }}>
              <strong>{item.title}</strong>
              <img src={item?.images || item?.img} width={100} height={100} />
            </li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </div>
    </>
  );
}

export default SearchResult;
