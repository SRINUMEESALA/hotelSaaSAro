import "./index.css";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const navitems = [
  { item: "Home", path: "/" },
  { item: "Hotels", path: "/hotels" },
  { item: "Cart", path: "/cart" },
];

const Header = () => (
  <div className="HeaderCon d-flex justify-content-center p-1">
    <nav className="navCon p-2 d-flex text-white justify-content-between align-items-center">
      <h1 className="h2 text-white">
        SaaS<span className="text-primary">Aro</span>
      </h1>
      <ul className="d-flex list-unstyled m-0 navListCon justify-content-around flex-wrap">
        {navitems.map((obj) => (
          <li key={uuidv4()} className="">
            <NavLink to={obj.path} className="routerLinkUnsetStyles h6">
              {obj.item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Header;
