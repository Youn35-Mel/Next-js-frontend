import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <h2>dj events</h2>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <h2>events</h2>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
