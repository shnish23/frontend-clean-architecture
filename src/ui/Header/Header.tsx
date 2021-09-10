import { Link } from "react-router-dom";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        Co0o0o0o0okie!!!1 🍪
      </Link>
    </header>
  );
}
