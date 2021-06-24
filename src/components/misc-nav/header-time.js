import React, { useState } from 'react';
import styles from './header-time.module.css';
import Battery from '../../assets/icons/Battery.png';
import Wifi from '../../assets/icons/Wi-Fi.png';
import Network from '../../assets/icons/Combined Shape.png';

const HeaderTime = () => {
  let time = new Date().toLocaleTimeString().slice(0, 5);
  const [ctime, setCtime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <>
      <nav className={styles.nav}>
        <header className={styles.header}>
          <div className={styles.header_time_minute}>{time}</div>
          <div className={styles.network__container}>
            <div>
              <img src={Network} alt='network_icon' />
            </div>
            <div className={styles.icon_spacing}>
              <img src={Wifi} alt='wifi_icon' />
            </div>
            <div className={styles.icon_spacing}>
              <img src={Battery} alt='battery_icon' />
            </div>
          </div>
        </header>
      </nav>
    </>
  );
};

export default HeaderTime;
