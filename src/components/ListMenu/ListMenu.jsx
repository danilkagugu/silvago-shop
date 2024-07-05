import css from "./ListMenu.module.css";

const ListMenu = () => {
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
            </li>
            <li className={css.itemList}>
              <a className={css.item} href="/">
                Догляд за волоссям
              </a>
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
            </li>
            <li className={css.itemList}>
              <a className={css.item} href="/">
                Make-up
              </a>
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
            </li>
            <li className={css.itemList}>
              <a className={css.item} href="/">
                Тіло
              </a>
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

export default ListMenu;
