import React from 'react';
import { FiHome, FiTag, FiPackage, FiPocket, FiMenu } from 'react-icons/fi';
import styles from './BottomNav.module.css';
import Home from '../../assets/icons/Home.png';
import Buy from '../../assets/icons/Buy.png';
import Deals from '../../assets/icons/deals.png';
import Wallet from '../../assets/icons/Wallet.png';
import Hamburger from '../../assets/icons/hamburger.png';

const BottomNav = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <img src={Home} alt='home' />
          <span>Home</span>
        </li>
        <li className={styles.active}>
          <img src={Buy} alt='buy' />
          <span>Buy</span>
        </li>
        <li>
          <img src={Deals} alt='deals' />
          <span>Deals</span>
        </li>
        <li>
          <img src={Wallet} alt='wallet' />
          <span>Wallet</span>
        </li>
        <li>
          <img src={Hamburger} alt='hamburger' />
          <span>More</span>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
