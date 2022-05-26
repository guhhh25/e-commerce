import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header/Header";
import MainContent from "../components/mainContent/mainContent";
import PromotionItems from "../components/promotionItems/promotionItem";

import styles from "../styles/Home.module.css";
import {logo} from './../icons/logos'
import {cart} from './../icons/logos'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <Header logo={logo} cart={cart}/>
        <MainContent/>
        <PromotionItems/>

      </div>
    </div>
  );
};

export default Home;
