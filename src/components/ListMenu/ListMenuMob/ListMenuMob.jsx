import { useState } from "react";
import css from "./ListMenuMob.module.css";
import { HiMiniChevronRight } from "react-icons/hi2";
import { BsChevronLeft } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";

const ListMenuMob = () => {
  const [menuStates, setMenuStates] = useState({
    new: false,
    brend: false,
    face: false,
    heir: false,
    makeup: false,
    body: false,
    sale: false,
  });

  const toggleMenu = (menu) => {
    setMenuStates((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className={css.listMenu}>
      <div className={css.container}>
        <nav className={css.navigation}>
          <ul className={css.menuBar}>
            <li className={css.itemList}>
              <a className={css.item} href="/">
                Новинки
              </a>
            </li>
            <li className={css.itemList}>
              <a className={css.item} href="/">
                Бренди
              </a>
            </li>
            <li className={css.itemList}>
              <a className={css.item} href="/">
                Догляд за обличчям
              </a>
              <button className={css.btnChevron}>
                <HiMiniChevronRight
                  className={css.chevronRight}
                  onClick={() => {
                    toggleMenu("face");
                  }}
                />
              </button>
              {menuStates["face"] && (
                <Modal
                  className={css.menuBox}
                  isOpen={menuStates["face"]}
                  ariaHideApp={false}
                >
                  <div className={css.headerDropDownMenu}>
                    <BsChevronLeft
                      onClick={() => {
                        toggleMenu("face");
                      }}
                    />
                    <h3>Догляд за обличчям</h3>
                    <IoMdClose />
                  </div>

                  <ul className={css.dropDownMenu}>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Креми для обличчя
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Креми під очі
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Захист від сонця SPF
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Маски, пілінгі
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Очищення
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                  </ul>
                </Modal>
              )}
            </li>
            <li className={css.itemList}>
              <a className={css.item} href="/">
                Догляд за волоссям
              </a>
              <button className={css.btnChevron}>
                <HiMiniChevronRight
                  className={css.chevronRight}
                  onClick={() => {
                    toggleMenu("heir");
                  }}
                />
              </button>
              {menuStates["heir"] && (
                <Modal
                  className={css.menuBox}
                  isOpen={menuStates["heir"]}
                  ariaHideApp={false}
                >
                  <div className={css.headerDropDownMenu}>
                    <BsChevronLeft
                      onClick={() => {
                        toggleMenu("heir");
                      }}
                    />
                    <h3>Догляд за волоссям</h3>
                    <IoMdClose />
                  </div>
                  <ul className={css.dropDownMenu}>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                  </ul>
                </Modal>
              )}
            </li>
            <li className={css.itemList}>
              <a className={css.item} href="/">
                Make-up
              </a>
              <button className={css.btnChevron}>
                <HiMiniChevronRight
                  className={css.chevronRight}
                  onClick={() => {
                    toggleMenu("makeup");
                  }}
                />
              </button>
              {menuStates["makeup"] && (
                <Modal
                  className={css.menuBox}
                  isOpen={menuStates["makeup"]}
                  ariaHideApp={false}
                >
                  <div className={css.headerDropDownMenu}>
                    <BsChevronLeft
                      onClick={() => {
                        toggleMenu("makeup");
                      }}
                    />
                    <h3>Make-up</h3>
                    <IoMdClose />
                  </div>
                  <ul className={css.dropDownMenu}>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                  </ul>
                </Modal>
              )}
            </li>
            <li className={css.itemList}>
              <a className={css.item} href="/">
                Тіло
              </a>
              <button className={css.btnChevron}>
                <HiMiniChevronRight
                  className={css.chevronRight}
                  onClick={() => {
                    toggleMenu("body");
                  }}
                />
              </button>
              {menuStates["body"] && (
                <Modal
                  className={css.menuBox}
                  isOpen={menuStates["body"]}
                  ariaHideApp={false}
                >
                  <div className={css.headerDropDownMenu}>
                    <BsChevronLeft
                      onClick={() => {
                        toggleMenu("body");
                      }}
                    />
                    <h3>Тіло</h3>
                    <IoMdClose />
                  </div>
                  <ul className={css.dropDownMenu}>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                    <li>
                      <a className={css.dropdownItem} href="/">
                        Патчі
                      </a>
                    </li>
                  </ul>
                </Modal>
              )}
            </li>
            <li className={css.itemList}>
              <a className={css.item} href="/">
                Sale
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ListMenuMob;
