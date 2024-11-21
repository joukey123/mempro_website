import SearchIcon from "@mui/icons-material/Search";
import useFuse from "./useFuse";
import { useRecoilState } from "recoil";
import { handleSearchBar, queryKeyword } from "../../atoms";
import styled from "styled-components";

const Form = styled.form`
  position: relative;
  margin-right: 15px;
  button {
    position: absolute;
    right: 10px;
    top: 5.5px;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
`;

const MobileSearchInput = styled.input`
  border: 0;
  border-radius: 0.28571429rem;
  text-indent: 10px;
  width: 120px;
  height: 35px;
  outline: 0;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

function MobileSearchInputComponent() {
  const { handleSearch } = useFuse();
  const [isOpen, setIsOpen] = useRecoilState(handleSearchBar);
  const [query, setQuery] = useRecoilState(queryKeyword);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
    setIsOpen(false);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <MobileSearchInput
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </Form>
    </>
  );
}

export default MobileSearchInputComponent;
