// Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css'; // Import the CSS file

const Header = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/contact')
};

const handleMemberClick = () => {
    navigate("/contact");
};
  return (
    <header className={styles.CustomBox}>
        <section className={styles.CustomTitle}><h1>The need not to journey, to sit still, is the greatest journey</h1></section>
        <button varient='contained' className={styles.CustomButtonContained} onClick={handleLoginClick}>Login</button>
        <button varient='outlined' className={styles.CustomButtonOutlined} onClick={handleMemberClick}>Become a member</button>
    </header>
  );
}

export default Header;
