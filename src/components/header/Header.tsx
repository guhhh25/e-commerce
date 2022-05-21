import { useEffect, useState } from 'react';
import styles from './../header/styles.module.css'
import {menu} from '../../icons/logos.jsx'
import {closeIcon} from '../../icons/logos.jsx'

interface HeaderProps {
    logo: any
    cart: any  
}

export default function Header(props:HeaderProps) {

    const [openMenuModal, setOpenMenu] = useState<boolean>(false);
    const [windowWidth, setWindowWitdh] = useState<number>(500);
  
    const handleModal = () => {
      setOpenMenu(!openMenuModal);
      console.log(openMenuModal)
    };
  
    useEffect(() => {
      if (typeof window !== "undefined") {
        setInterval(() => {
          setWindowWitdh(window.innerWidth);
        }, 2000);
      }
  
      window.addEventListener("resize", () => {
        if (windowWidth >= 800) {
          setOpenMenu(false);
        }
      });
    }, [windowWidth]);
  
  
    console.log(windowWidth)

    return(
        <div className={styles.container}>
      <div className={styles.closeMenu} id="closeMenu" onClick={handleModal}>
        {openMenuModal ? closeIcon : menu}
        
       
      </div>

      <div
        id="menu"
        className={
          openMenuModal
            ? styles.headerContainerOpen
            : styles.headerContainerClose
        }
      >
        <div className={styles.logo}>
          {props.logo}
          <span
            style={{
              color: "#FFD700",
              fontWeight: "bold",
              letterSpacing: "1.2px",
              marginLeft: "10px",
            }}
          >
            Ferra
          </span>
          <span
            style={{
              color: "white",
              fontWeight: "bold",
              letterSpacing: "1.2px",
            }}
          >
            Delivery
          </span>
        </div>

        <ul className={styles.list}>
          <li>Inicio</li>
          <li>Sobre</li>
          <li>Contato</li>
          <li>Restaurantes</li>
          <li>Local</li>
        </ul>
        <div className={styles.phone}>
          <p>Faça seu pedido</p>
          <span>43356079</span>
        </div>

        <div className={styles.cart}>
          {props.cart}
          <div className={styles.quantity}>0</div>
        </div>
      </div>
    </div>
    )
}