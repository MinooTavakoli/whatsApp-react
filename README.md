# WhatsApp Package For React

![whatsapp](https://github.com/MinooTavakoli/whatsApp-react/blob/main/public/whatsApp-logo.jpg)

[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-size-image]][npm-url] [![NPM downloads][npm-downloads-image]][downloads-url] [![MIT License][license-image]][license-url]

#### The new online chat experience begins here!

Give your customer experience a human touch
The all-in-one multichannel messaging platform that connects companies & customers.

- [Installation](#installation)
- [Usage](#use-whatsapp-package)
- [Props](#props)
- [License](#license)
- [Author](#author)

### Installation

```bash
npm i whatsapp-react
```

## USE WhatsApp Package

```js
import React from "react";
import WhatsApp from "whatsapp-react";
import Logo from "./avatarDefault.jpg";

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
    <div>
      <h1>This is a test</h1>
      <WhatsApp accountList={accounts} />
    </div>
  );
}
```

## Props

| props           | defaultValue                                               | description                                                            |
| --------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------- |
| accountList     | []                                                         | `[{name: "", position: "", account: "", avatar: null, status: true }]` |
| dir             | ltr                                                        | `ltr` \|\| `rtl`                                                       |
| position        | left                                                       | `left` \|\| `right`                                                    |
| color           | <span style="background:#376466;color:#fff">#ffffff</span> | `any color`                                                            |
| backgroundColor | <span style="background:#376466;color:#fff">#376466</span> | `any color`                                                            |

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
