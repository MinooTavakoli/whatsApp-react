# WhatsApp Package For React

![whatsapp](https://github.com/MinooTavakoli/whatsApp-react/blob/main/public/whatsApp-logo.jpg)

[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-size-image]][npm-url] [![NPM downloads][npm-downloads-image]][downloads-url] [![MIT License][license-image]][license-url]

#### whatsApp chat begins here!

More than 2 billion people in over 180 countries use WhatsApp1 to stay in touch with friends and family, anytime and anywhere. WhatsApp is free2 and offers simple, secure, reliable messaging and calling, available on phones all over the world.

- [Installation](#installation)
- [Demo](#demo)
- [Usage](#use-whatsapp-package)
- [Information](#information)
- [Props](#props)
- [License](#license)
- [Author](#author)
- [TODO](#todo)

### Installation

```bash
npm i whatsapp-react
```

### Demo

![whatsapp](https://github.com/MinooTavakoli/whatsApp-react/blob/main/public/whatsapp-demo.gif)

## USE WhatsApp Package

```js
import React from "react";
import WhatsApp from "whatsapp-react";
import userOne from "./lib/components/user_one.jpg";
import userTwo from "./lib/components/user_two.jpg";
import userThree from "./lib/components/user_three.jpg";
import userFour from "./lib/components/user_four.jpg";
import sendIcon from "./lib/components/img/send.png";

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
      <WhatsApp
        tooltipTitle={"Do you have any questions about this product?"}
        tooltipDescription="Chat via WhatsApp"
        title={"chat start"}
        lead={"Please chat on WhatsApp"}
        description={"Responsive, usually responds in minutes"}
        accountList={englishAccounts}
        phoneNumber="98912*******"
        textareaPlaceholder="send message ..."
        widthSendIcon={42}
      />
      <WhatsApp
        phoneNumber="98912*******"
        textareaPlaceholder="پیامی ارسال کنید ..."
        sendIcon={sendIcon}
        widthSendIcon={42}
        dir="rtl"
        position="right"
        tooltipTitle={"در مورد این محصول سوالی دارید؟"}
        tooltipDescription="چت از طریق واتس‌اپ"
        title={"شروع مکالمه"}
        lead={"لطفا در واتس‌اپ چت نمایید."}
        description={"پاسخگو،‌به طور معمول در چند دقیقه پاسخ می‌دهد"}
        accountList={persianAccounts}
      />
    </div>
  );
}
```

## Informatin

![whatsapp](https://github.com/MinooTavakoli/whatsApp-react/blob/main/public/information.jpeg)

## Props

| props               | defaultValue                                               | description                                                            | status of requirements |
| ------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------- |
| accountList         | []                                                         | `[{name: "", position: "", account: "", avatar: null, status: true }]` | required \*            |
| dir                 | ltr                                                        | `ltr` \|\| `rtl`                                                       | optional               |
| phoneNumber         | string                                                     | `phone number to send in the first texterea`                           | optional               |
| textareaPlaceholder | string                                                     | `textareaPlaceholder to send in the first texterea`                    | optional               |
| sendIcon            | string                                                     | `send icon image to send in the first texterea`                        | optional               |
| widthSendIcon       | string                                                     | `width send icon to send in the first texterea`                        | optional               |
| position            | left                                                       | `left` \|\| `right`                                                    | optional               |
| tooltipTitle        | string                                                     | `The question in tooltip title`                                        | optional               |
| tooltipDescription  | string                                                     | `The desired tooltip description`                                      | optional               |
| title               | string                                                     | `Text to get started`                                                  | optional               |
| lead                | string                                                     | `Text to lead`                                                         | optional               |
| description         | string                                                     | `description text`                                                     | optional               |
| color               | <span style="background:#376466;color:#fff">#ffffff</span> | `any color`                                                            | optional               |
| backgroundColor     | <span style="background:#376466;color:#fff">#376466</span> | `any color`                                                            | optional               |

### License

MIT

### Author

> Minoo Tavakoli

### TODO

- [x] Determining props
- [x] Ability to send the first chat on the current page
- [ ] Ability to Avatar Groups and max Show Avatar
- [ ] Ability to show online avatar

[license-image]: http://img.shields.io/npm/l/whatsapp-react.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.org/package/whatsapp-react
[npm-version-image]: http://img.shields.io/npm/v/whatsapp-react.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/whatsapp-react.svg?style=flat
[npm-downloads-size-image]: https://img.shields.io/bundlephobia/minzip/whatsapp-react.svg?style=flat
[downloads-url]: https://npmcharts.com/compare/whatsapp-react?minimal=true
