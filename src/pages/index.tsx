import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header/Header";
import styles from "../styles/Home.module.css";
import {logo} from './../icons/logos'
import {cart} from './../icons/logos'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <Header logo={logo} cart={cart}/>
        

      </div>
    </div>
  );
};

export default Home;
