import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react'; // Import useState hook


export default function Home() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" /> 
      </Head>

     <h1 className={styles.title}>
          Ryan Custer Welcomes <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <h2>Counter: {count}</h2>

        <button onClick={incrementCounter} className={styles.button}>
        Increment Counter
      </button>
    </div>
  );
}
