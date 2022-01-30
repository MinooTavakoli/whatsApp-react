import WhatsApp from "./lib/components/ChatExtension";
import userOne from "./lib/components/user_one.jpg";
import userTwo from "./lib/components/user_two.jpg";
import userThree from "./lib/components/user_three.jpg";
import userFour from "./lib/components/user_four.jpg";
import userFive from "./lib/components/user_five.jpg";
import whatsAppBg from "./lib/components/whatsApp-bg.png";
import "./App.css";

function App() {
  const englishAccounts = [
    {
      name: "Jeffrey Brown",
      position: "creative leader",
      account: "98912*******",
      avatar: <img src={userOne} alt="" />,
      status: false,
    },
    {
      name: "${{accountList.*.name}}",
      position: "${{accountList.*.position}}",
      account: "98912*******",
      avatar: <img src={userFive} alt="" />,
      status: true,
    },
    {
      name: "Alex Grinfield",
      position: "programming guru",
      account: "98912*******",
      avatar: <img src={userThree} alt="" />,
      status: true,
    },
    {
      name: "Roxie Swanson",
      position: "Sales Manager",
      account: "98912*******",
      avatar: <img src={userFour} alt="" />,
      status: true,
    },
  ];
  const persianAccounts = [
    {
      name: "نیما کاویانی",
      position: "مدیر محصول",
      account: "98912*******",
      avatar: <img src={userOne} alt="" />,
      status: false,
    },
    {
      name: "سارا لطیفی ",
      position: "مدیر پشتیبانی",
      account: "98912*******",
      avatar: <img src={userTwo} alt="" />,
      status: true,
    },
    {
      name: "علی عزیزی",
      position: "مدیر برنامه نویسی",
      account: "98912*******",
      avatar: <img src={userThree} alt="" />,
      status: true,
    },
    {
      name: "سحر کیانی",
      position: "مدیر فروش",
      account: "98912*******",
      avatar: <img src={userFour} alt="" />,
      status: true,
    },
  ];

  return (
    <div>
      <div
        style={{
          color: "#999",
          marginTop: "200px",
          float: "left",
          textAlign: "center",
        }}
      >
        <img src={whatsAppBg} alt="" style={{ width: "400px" }} />
        <h1>WhatsApp React Chat</h1>
      </div>
      <WhatsApp
        tooltipTitle={"Do you have any questions about this product?"}
        tooltipDescription="Chat via WhatsApp"
        title={"${{title}}"}
        lead={"${{lead}}"}
        description={"${{description}}"}
        accountList={englishAccounts}
      />
      <WhatsApp
        dir="rtl"
        position="right"
        tooltipTitle={"در مورد این محصول سوالی دارید؟"}
        tooltipDescription="چت از طریق واتس‌اپ"
        title={"شروع مکالمه"}
        lead={"لطفا در واتس‌اپ چت نمایید."}
        description={"پاسخگو،‌به طور معمول در چند دقیقه پاسخ می‌دهد"}
        accountList={persianAccounts}
        // backgroundColor="red"
      />
    </div>
  );
}

export default App;