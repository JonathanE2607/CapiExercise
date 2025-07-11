'use client';

import Sidebar from "./Components/Navigation/Sidebar/Sidebar";
import Card from "./Components/DataDisplay/Card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "256px", padding: "2rem", flex: 1 }}>
        <Card />
      </main>
    </div>
  );
}

