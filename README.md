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
import Logo from "./avatarDefault.jpg";

function App() {
  const accounts = [
    {
      name: "Sales Team",
      position: "Example: Sales Support Unit",
      account: "98912*******",
      avatar: <img src={Logo} alt="" />,
      status: true,
    },
  ];
  return (
    <div>
      <h1>This is a test</h1>
      <WhatsApp
        tooltipTitle={"Do you have any questions about this product?"}
        tooltipDescription="Chat via WhatsApp"
        title={"${{title}}"}
        lead={"${{lead}}"}
        description={"${{description}}"}
        accountList={englishAccounts}
      />
    </div>
  );
}
```

## Informatin

![whatsapp](https://github.com/MinooTavakoli/whatsApp-react/blob/main/public/information.jpeg)

## Props

| props              | defaultValue                                               | description                                                            | status of requirements |
| ------------------ | ---------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------- |
| accountList        | []                                                         | `[{name: "", position: "", account: "", avatar: null, status: true }]` | required \*            |
| dir                | ltr                                                        | `ltr` \|\| `rtl`                                                       | optional               |
| position           | left                                                       | `left` \|\| `right`                                                    | optional               |
| tooltipTitle       | string                                                     | `The question in tooltip title`                                        | optional               |
| tooltipDescription | string                                                     | `The desired tooltip description`                                      | optional               |
| title              | string                                                     | `Text to get started`                                                  | optional               |
| lead               | string                                                     | `Text to lead`                                                         | optional               |
| description        | string                                                     | `description text`                                                     | optional               |
| color              | <span style="background:#376466;color:#fff">#ffffff</span> | `any color`                                                            | optional               |
| backgroundColor    | <span style="background:#376466;color:#fff">#376466</span> | `any color`                                                            | optional               |

### License

MIT

### Author

> Minoo Tavakoli

[license-image]: http://img.shields.io/npm/l/whatsapp-react.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.org/package/whatsapp-react
[npm-version-image]: http://img.shields.io/npm/v/whatsapp-react.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/whatsapp-react.svg?style=flat
[npm-downloads-size-image]: https://img.shields.io/bundlephobia/minzip/whatsapp-react.svg?style=flat
[downloads-url]: https://npmcharts.com/compare/whatsapp-react?minimal=true
