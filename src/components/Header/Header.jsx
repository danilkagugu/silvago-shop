import Logo from "../Logo/Logo";
import css from "./Header.module.css";
// import sprite from "../../assets/icons.svg";
import { CiSearch } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import ListMenu from "../ListMenu/ListMenu";

const Header = () => {
  return (
    <>
      <div className={css.header}>
        <div className={css.container}>
          <div className={css.headerList}>
            <div className={css.leftHeader}>
              <a target="blank" href="https://www.instagram.com/silvago.ua/">
                <FaInstagram
                  className={`${css.iconHeader} ${css.iconSearch}  `}
                />
              </a>
              <p>
                <CiSearch className={css.iconHeader} />
              </p>
            </div>
            <Logo />
            <div className={css.rigthHeader}>
              <button className={css.headerBtn}>
                <IoPersonOutline className={css.iconHeader} />
              </button>
              <button className={css.headerBtn}>
                <CiHeart className={css.iconHeader} />
              </button>
              <button className={css.headerBtn}>
                <IoBagHandleOutline className={css.iconHeader} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ListMenu />
    </>
  );
};

export default Header;
