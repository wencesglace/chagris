import { NavLink } from "react-router-dom";
import "./header.css";
import Icon from "../icon/Icon";

export default function Header() {
  return (
    <>
      <header className="layout-full bg-blue-contrasted header-desktop">
        <div className="header-content">
          <nav aria-label="Menu principal" className=" layout-half no-padding">
            <ul>
              <li>
                <NavLink to="/" end className="nav-link">
                  {({ isActive }) => (
                    <>
                      <Icon name={isActive ? "homeFilled" : "home"} />
                      Accueil
                    </>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/adopt" end className="nav-link">
                  {({ isActive }) => (
                    <>
                      <Icon name={isActive ? "pawFilled" : "paw"} />
                      Adoptions
                    </>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" end className="nav-link">
                  {({ isActive }) => (
                    <>
                      <Icon name={isActive ? "messageFilled" : "message"} />
                      Questions
                    </>
                  )}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <nav className="bottom-nav bg-blue-contrasted">
        <NavLink to="/" end className="nav-link">
          {({ isActive }) => (
            <>
              <Icon name={isActive ? "homeFilled" : "home"} size={24} />
              Accueil
            </>
          )}
        </NavLink>
        <NavLink to="/adopt" className="nav-link">
          {({ isActive }) => (
            <>
              <Icon name={isActive ? "pawFilled" : "paw"} size={24} />
              Adoptions
            </>
          )}
        </NavLink>
        <NavLink to="/faq" end className="nav-link">
          {({ isActive }) => (
            <>
              <Icon name={isActive ? "messageFilled" : "message"} size={24} />
              Questions
            </>
          )}
        </NavLink>
      </nav>
    </>
  );
}
