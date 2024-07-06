import Logo from "../Logo/Logo";
import css from "./Header.module.css";
// import sprite from "../../assets/icons.svg";
import { CiSearch } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import ListMenu from "../ListMenu/ListMenu";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import ListMenuMob from "../ListMenu/ListMenuMob/ListMenuMob";
import Registration from "../Registration/Registration";
import LoginForm from "../LoginForm/LoginForm";

const Header = () => {
  const [input, setInput] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openRegistration, setOpenRegistration] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const toggleForm = () => {
    setOpenRegistration((prevState) => !prevState);
    setOpenLogin((prevState) => !prevState);
  };

  return (
    <>
      <div className={css.header}>
        <div className={css.container}>
          <div className={css.headerList}>
            <div className={css.leftHeader}>
              <button
                className={css.btnOpenMenu}
                onClick={() => {
                  setModalIsOpen(true);
                }}
              >
                <AiOutlineMenu className={css.iconHeader} />
              </button>
              <a target="blank" href="https://www.instagram.com/silvago.ua/">
                <FaInstagram
                  className={`${css.iconHeader} ${css.iconInstagram}  `}
                />
              </a>
              <div
                className={`${css.inputBox} ${input ? css.borderBottom : ""}`}
              >
                <button
                  className={css.btnSeatch}
                  onClick={() => {
                    setInput(true);
                  }}
                >
                  <CiSearch
                    className={`${css.iconHeader} ${css.iconSearch}  `}
                  />
                </button>
                {input && (
                  <input
                    className={css.inputSearch}
                    type="text"
                    placeholder="Пошук"
                  />
                )}
              </div>
            </div>
            <Logo />
            <div className={css.rigthHeader}>
              <button
                className={css.headerBtn}
                onClick={() => {
                  setOpenLogin(true);
                }}
              >
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
      <div className={css.listMenuDesk}>
        <ListMenu />
      </div>
      <Modal
        className={css.menuBox}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        ariaHideApp={false}
      >
        <div>
          <div className={css.modalTopMenuHeader}>
            <a className={css.logoHeader} href="index.html">
              <Logo />
            </a>
            <button
              className={css.iconClose}
              onClick={() => setModalIsOpen(false)}
            >
              <IoMdClose />
            </button>
          </div>
          <ListMenuMob />
        </div>
      </Modal>
      {openLogin && (
        <LoginForm
          toogleForm={toggleForm}
          closeLogin={() => setOpenLogin(false)}
        />
      )}
      {openRegistration && (
        <Registration
          closeRegistration={() => setOpenRegistration(false)}
          toogleForm={toggleForm}
        />
      )}
    </>
  );
};

export default Header;
