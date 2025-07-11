import Card from "./Components/DataDisplay/Card";
import GroupedBarChart from "./Components/DataDisplay/Charts";
import styles from "@/app/page.module.css";
import { TYPES_CARDS } from "./utils/TypesCards";

export default function Home() {
  return (
    <div className={styles.body}>
      <section>
        <h1 className={styles.sectionTitle}>Health Overview</h1>
        <p className={styles.sectionDate}>August 12, 2021</p>

        <div className={styles.containerCards}>
          <Card variant={TYPES_CARDS.ORANGE} title="Blood Sugar" secondText="80" secondTextSmall="mg/dL" />
          <Card variant={TYPES_CARDS.RED} title="Heard Rate" secondText="98" secondTextSmall="bpm"/>
          <Card variant={TYPES_CARDS.BLUE} title="Blood Presure" secondText="92" secondTextSmall="/mmhg " />
        </div>

        <GroupedBarChart />
      </section>
    </div>
  );
}
