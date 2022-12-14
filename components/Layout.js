import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Footer.module.css";
export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={description} />
      </Head>
      <Header />
      <div className={styles.container}>
        {children}
        <Footer />
      </div>
    </div>
  );
}

Layout.defaultProps = {
  title: `Dj events | find the hottest parties`,
  description: "find the latest dj and other musical events",
  keywords: "music, dj, edm, events",
};
