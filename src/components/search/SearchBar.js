import styled from "styled-components";
import navLogo from "../../img/nav_logo.svg";
import CloseIcon from "@mui/icons-material/Close";
import SearchInputBar from "./SearchInputBar";
import { useRecoilState } from "recoil";
import { handleSearchBar, searchIsClose } from "../../atoms";

const ModalWarpper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 999999;
`;
const SearchWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f1f3f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 90px 0;
`;
const Logo = styled.img`
  width: 15%;
`;
const SearchBarHeader = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
  button {
    width: 25px;
    height: 25px;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    svg {
      font-size: 1.5rem;
    }
  }
`;

function SearchBar() {
  const [isOpen, setIsOpen] = useRecoilState(handleSearchBar);

  return (
    <ModalWarpper>
      <SearchWrapper>
        <SearchBarHeader>
          <Logo src={navLogo} />
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <CloseIcon />
          </button>
        </SearchBarHeader>
        <SearchInputBar width={60} />
      </SearchWrapper>
    </ModalWarpper>
  );
}

export default SearchBar;
