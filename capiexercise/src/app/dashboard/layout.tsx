import Navbar from "../Components/Navigation/Navbar";
import Sidebar from "../Components/Navigation/Sidebar/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main
        style={{
          marginLeft: "256px",
          padding: "2rem",
          flex: 1,
          backgroundColor: "#fdfcfc",
        }}
      >
        {children}
      </main>
      <Navbar />
    </div>
  );
}
