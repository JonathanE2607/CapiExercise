import ChardCard from "./ChardCard";
import styles from "@/app/Components/DataDisplay/card.module.css";
import { BiDonateBlood } from "react-icons/bi";

export default function Card() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.ContainerIcon}>
          <div className={styles.icon}>
            <BiDonateBlood className={styles.reactIcon} />
          </div>
          <h4 className={styles.title}>Blood Sugar</h4>
        </div>

        <div className={styles.containerSecondText}>
          <h2 className={styles.secondText}>80</h2>
          <p className={styles.secondTextSmall}>mg/dL</p>
        </div>

        <div className={styles.containerOtherText}>
          <span className={styles.textContaineOther}>Normal</span>
        </div>
      </div>

      <ChardCard />
    </div>
  );
}
