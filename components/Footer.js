import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
export default function Footer() {
  return (
    <footer>
      <p>Copyright &copy; Dj events 2022</p>
      <p>
        <Link href="/about">about this project</Link>
      </p>
    </footer>
  );
}
