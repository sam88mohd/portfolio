import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Samsudin Mohamad</title>
        <meta name="description" content="Samsudin Mohamad Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
