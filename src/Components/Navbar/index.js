import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list-item navigation__list-item--active">
          <a
            className="navigation__link"
            href="index.html"
            aria-label="go to home page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewbox="0 0 24 24"
              width="24px"
            >
              <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
            </svg>
          </a>
        </li>
        <li className="navigation__list-item">
          <a
            className="navigation__link"
            href="pages/bookmarks.html"
            aria-label="go to bookmarks page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewbox="0 0 24 24"
              width="24px"
            >
              <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
            </svg>
          </a>
        </li>
        <li className="navigation__list-item">
          <a
            className="navigation__link"
            href="pages/form.html"
            aria-label="create new card"
          >
            <img
              src="assets/add-Icon.png"
              height="24px"
              viewbox="0 0 24 24"
              width="24px"
            >
              <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
            </img>
          </a>
        </li>
        <li className="navigation__list-item">
          <a
            className="navigation__link"
            href="pages/profile.html"
            aria-label="go to profile page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewbox="0 0 24 24"
              width="24px"
            >
              <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}
