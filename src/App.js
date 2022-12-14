import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiChatQuoteFill } from 'react-icons/ri'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <RiChatQuoteFill />
          <Logo to={'/'}>My Highlights</Logo>
        </Nav>
        <Search />
        <Pages /></BrowserRouter>
    </div>
  );
}
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  color: #4f4f4f;
  font-weight: 400;
  font-family: 'Space Mono', monospace;
  color: black;
  letter-spacing: 5px;
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  color: #4f4f4f;
  display: flex;
svg {
  font-size: 3rem;
}
`
export default App;
