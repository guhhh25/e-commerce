import styles from "./../mainContent/styles.module.css";
import hamburguerImg from "./../../images/burguer.png";
import { deliveryMan } from "./../../icons/logos";
import Image from "next/image";
import { google } from "./../../icons/logos";
import { apple } from "./../../icons/logos";
import {logo} from './../../icons/logos'




export default function MainContent() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.mainTitle}>
        <div className={styles.ferraResponsiveLogo}>
          <p>{logo}</p>
          <p style={{
              color: "#FFD700",
              fontWeight: "bold",
              letterSpacing: "1.2px",
              marginLeft: "10px",
            }}>Ferra</p> <p style={{
              color: "white",
              fontWeight: "bold",
              letterSpacing: "1.2px",
            }}>Delivery</p>
        </div>
        <p className={styles.deliveryFast}>
          {deliveryMan}
          Entrega rapida garantida!
        </p>
        <span className={styles.firstTitle}>Venha provar os melhores</span>
        <br></br>
        <span className={styles.secondTitle}>LANCHES DO BAIRRO!</span>
        <br></br>
        <span className={styles.discount}>
          Consiga 10% de desconto na sua primeira compra!
        </span>
        <div className={styles.getDownload}>
          <div className={styles.google}>
            {google}
            <div style={{ marginLeft: "10px" }}>
              <p>Instale nosso app na</p>
              <p style={{ fontSize: "18px" }}>Play Store</p>
            </div>
          </div>
          <div className={styles.apple}>
            {apple}
            <div style={{ marginLeft: "10px" }}>
              <p>Instale nosso app na</p>
              <p style={{ fontSize: "18px" }}> Apple Store</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hamburguerDiv}>
        <div>
          <Image
            alt="MainImg"
            src={hamburguerImg}
            height={500}
            width={500}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
