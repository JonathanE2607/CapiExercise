"use client";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.leftSection}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Buscar..."
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            <i className="bx bx-search" />
          </button>
        </div>
      </div>

      <div className={styles.rightSection}>
        <button className={styles.notificationButton}>
          <i className="bx bx-bell" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
