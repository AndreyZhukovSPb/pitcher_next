import React from "react";
import styles from "../styles/Contacts.module.css";
import Header from "../components/Header";
import StoreData from "../components/StoreData";
import Image from "next/image";
import SectionLine from "../components/SectionLine";
import { baseURL } from "../utils/constatnts";

const Contacts = ({ data }) => {
  return (
    <>
      <SectionLine isMain={false} />
      <section className={styles.contacts}>
        <div className={styles.contacts__container}>
          <StoreData data={data.park} />
          <StoreData data={data.mayak} />
        </div>
        <ul className={styles.contacts__data}>
          <li className={styles.contacts__contactbox}>
            <Image
              src={"/phone.svg"}
              alt="icon phone"
              className={styles.contacts__icon}
              fill
            />
            <a href='tel:+79313393043' className={styles.contacts__content}>+7-931-339-30-43</a>
          </li>
          <li className={styles.contacts__contactbox}>
            <Image
              src={"/email.svg"}
              alt="icon email"
              className={styles.contacts__icon}
              fill
            />
            <a href='mailto:pitcherbar@gmail.com' className={styles.contacts__content}>pitcherbar@gmail.com</a>
          </li>
          <li className={styles.contacts__contactbox}>
            <Image
              src={"/instagram.svg"}
              alt="icon email"
              className={styles.contacts__icon}
              fill
            />
            <a href='https://www.instagram.com/pitcherbar/' target='_blank' className={styles.contacts__content}>pitcherbar</a>
          </li>
        </ul>
        <p className={styles.contacts__message}>
          2014 - 2023 Picther loves you
        </p>
      </section>
    </>
  );
};

export default Contacts;

export async function getStaticProps() {
  const res = await fetch(`${baseURL}/contacts`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}