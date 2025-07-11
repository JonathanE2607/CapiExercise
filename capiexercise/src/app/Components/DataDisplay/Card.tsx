import ChardCard from "../../utils/ChardCard";
import styles from "@/app/Components/DataDisplay/card.module.css";
import ChardCardRed from "@/app/utils/ChardCardRed";
import { TYPES_CARDS } from "@/app/utils/TypesCards";
import { BiDonateBlood } from "react-icons/bi";
import ChardCardBlue from "../../utils/ChardCard";

type CardTypes = {
  variant: TYPES_CARDS;
  title: string;
  secondText: string;
  secondTextSmall: string;
};
export default function Card({
  variant,
  title,
  secondText,
  secondTextSmall,
}: CardTypes) {
  let CardElement: React.ReactElement = <></>;
  switch (variant) {
    case TYPES_CARDS.ORANGE:
      CardElement = (
        <div className={styles.container}>
          <div>
            <div className={styles.ContainerIcon}>
              <div className={styles.icon}>
                <BiDonateBlood className={styles.reactIcon} />
              </div>
              <h4 className={styles.title}>{title}</h4>
            </div>
            <div className={styles.containerSecondText}>
              <h2 className={styles.secondText}>{secondText}</h2>
              <p className={styles.secondTextSmall}>{secondTextSmall}</p>
            </div>
            <div className={styles.containerOtherText}>
              <span className={styles.textContaineOther}>Normal</span>
            </div>
          </div>
          <ChardCard />
        </div>
      );
      break;
    case TYPES_CARDS.RED:
      CardElement = (
        <div className={styles.container}>
          <div>
            <div className={styles.ContainerIcon}>
              <div className={styles.icon}>
                <BiDonateBlood className={styles.reactIcon} />
              </div>
              <h4 className={styles.title}>{title}</h4>
            </div>
            <div className={styles.containerSecondText}>
              <h2 className={styles.secondText}>{secondText}</h2>
              <p className={styles.secondTextSmall}>{secondTextSmall}</p>
            </div>
            <div className={styles.containerOtherText}>
              <span className={styles.textContaineOther}>Normal</span>
            </div>
          </div>
          <ChardCardRed />
        </div>
      );
      break;
    case TYPES_CARDS.BLUE:
      CardElement = (
        <div className={styles.container}>
          <div>
            <div className={styles.ContainerIcon}>
              <div className={styles.icon}>
                <BiDonateBlood className={styles.reactIcon} />
              </div>
              <h4 className={styles.title}>{title}</h4>
            </div>
            <div className={styles.containerSecondText}>
              <h2 className={styles.secondText}>{secondText}</h2>
              <p className={styles.secondTextSmall}>{secondTextSmall}</p>
            </div>
            <div className={styles.containerOtherText}>
              <span className={styles.textContaineOther}>Normal</span>
            </div>
          </div>
          <ChardCardBlue />
        </div>
      );
      break;
  }
  return CardElement;
}
