'use client';

import Link from 'next/link';
import styles from '@/styles/navbar.module.css';
import Image from 'next/image';
import { navbarLinks } from '@/data/constData';

import NavbarMobile from './NavbarMobile';
// Images
import logo from 'public/images/logo.svg';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <ul className={styles.list}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={logo} width={40} height={40} alt="logo" />
            </Link>
            <h2>Site name</h2>
          </div>

          <div className={styles.menu}>

            {/* Menu links start */}
            {navbarLinks.map((link) => {
              return (
                <li key={link.id}>
                  <Link className={styles.link} href={link.url}>
                    {link.title}
                  </Link>
                </li>
              );
            })}
            {/* Menu links end */}
            
          </div>
          {/* Navbar mobile */}
          <NavbarMobile />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
