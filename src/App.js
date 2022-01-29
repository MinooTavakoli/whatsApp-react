import WhatsApp from "./lib/components/ChatExtension";
import Logo from "./lib/components/avatardefault.jpg";
import "./App.css";

function App() {
  const accounts = [
    {
      name: "مثال: فروش",
      position: "مثال: واحد پشتیبانی فروش",
      account: "98912*******",
      avatar: <img src={Logo} alt="" />,
      status: true,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "5rem",
      }}
    >
      <p>Test whatsApp.</p>
      <WhatsApp accountList={accounts} />
    </div>
  );
}

export default App;
