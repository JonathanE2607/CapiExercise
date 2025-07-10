import ChardCard from "./ChardCard";
import styles from "@/app/Components/DataDisplay/card.module.css";
import { BiDonateBlood } from "react-icons/bi";

export default function Card() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.ContainerIcon}>
            <div className={styles.icon}><BiDonateBlood className={styles.reactIcon} /></div>
            <h2 className={styles.title}>Blod Sugar</h2>
        </div>
      </div>
      <div className={styles.containerSecondText}>
        <h3 className={styles.secondText}>80</h3>
        <p className={styles.secondTextSmall}>mg/dL</p>
      </div>
      <div className={styles.containerOtherText}>
        <p className={styles.textContaineOther}>Normal</p>
      </div>
      <div style={{width: "70%", height:"250px"}}>
        <ChardCard />
      </div>
    </div>
  );
}
