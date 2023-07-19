'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/navbarMobile.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { navbarLinks } from '@/data/constData';

// Images
import logo from 'public/images/logo.svg';
import menuMobile from 'public/images/navbar/menu-mobile.svg';
import menuMobileClose from 'public/images/navbar/menu-mobile__close.svg';

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  // function close menu on press escape key

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }
  , []);

  return (
    <nav className={styles.navbarMobile}>
      <div className={styles.menu}>
        <button
          aria-label="Navbar mobile toggle button"
          onClick={() => setIsOpen(!isOpen)}
          className={styles.menuBtn}
        >
          {isOpen ? (
            <Image
              src={menuMobileClose}
              width={40}
              height={40}
              alt="menu"
              className={styles.menuBtn}
            />
          ) : (
            <Image
              src={menuMobile}
              width={40}
              height={40}
              alt="menu"
              className={styles.menuBtn}
            />
          )}
        </button>
      </div>

      <div className={`${styles.menuMobile} ${isOpen ? `${styles.open}` : ''}`}>
        <ul className={styles.menuList}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/">
              <Image src={logo} width={35} height={35} alt="logo" />
            </Link>
            <h2 className={styles.logoTitle}>Site name</h2>
          </div>
          {/* Menu links */}
          {navbarLinks.map((link) => {
            return (
              <li key={link.id} className={styles.item}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            );
          })}

        </ul>
      </div>
    </nav>
  );
};

export default NavbarMobile;
