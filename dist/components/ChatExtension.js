"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./ChatExtension.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ChatExtension(_ref) {
  let {
    dir = "rtl",
    position = "right",
    color = "#ffffff",
    backgroundColor = "#376466",
    backgroundIcon = "#009299",
    accountList = []
  } = _ref;
  const [active, setActive] = (0, _react.useState)(false);
  if (!(accountList && accountList[0])) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "inline",
      direction: dir
    }
  }, /*#__PURE__*/_react.default.createElement("style", null, "\n            .wa__stt_offline {\n                pointer-events: none;\n              }\n              \n              .wa__button_text_only_me .wa__btn_txt {\n                padding-top: 16px !important;\n                padding-bottom: 15px !important;\n              }\n              \n              .wa__popup_content_item .wa__cs_img_wrap {\n                width: 48px;\n                height: 48px;\n              }\n              \n              .wa__popup_chat_box .wa__popup_heading {\n                background: ".concat(backgroundIcon, ";\n              }\n              \n              .wa__btn_popup .wa__btn_popup_icon {\n                background: ").concat(backgroundIcon, ";\n              }\n              \n              .wa__popup_chat_box .wa__popup_heading .wa__popup_title {\n                color: ").concat(color, ";\n              }\n              \n              .wa__popup_chat_box .wa__popup_heading .wa__popup_intro {\n                color: ").concat(color, ";\n                opacity: 0.8;\n              }\n              \n              .wa__popup_chat_box .wa__popup_heading .wa__popup_intro strong {\n                color: ").concat(color, ";\n              }\n            ")), /*#__PURE__*/_react.default.createElement("div", {
    className: "wa__btn_popup".concat(active ? " wa__active" : ""),
    style: {
      left: position === "left" ? "30px" : "auto",
      right: position === "left" ? "auto" : "30px"
    },
    onClick: () => setActive(!active)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "wa__btn_popup_txt",
    style: {
      left: position === "left" ? "100%" : "auto",
      right: position === "left" ? "auto" : "100%",
      padding: dir === "rtl" ? "7px 12px 7px 0px" : "7px 0 7px 12px",
      marginLeft: position === "left" ? "7px" : "auto",
      marginRight: position === "left" ? "auto" : "7px"
    }
  }, "\u062F\u0631 \u0645\u0648\u0631\u062F \u0627\u06CC\u0646 \u0645\u062D\u0635\u0648\u0644 \u0633\u0648\u0627\u0644\u06CC \u062F\u0627\u0631\u06CC\u062F\u061F", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("strong", null, "\u0686\u062A \u0627\u0632 \u0637\u0631\u06CC\u0642 \u0648\u0627\u062A\u0633\u200C\u0627\u067E")), /*#__PURE__*/_react.default.createElement("div", {
    className: "wa__btn_popup_icon"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "wa__popup_chat_box".concat(active ? " wa__pending wa__active wa__lauch" : ""),
    style: {
      left: position === "left" ? "25px" : "auto",
      right: position === "left" ? "auto" : "25px"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "wa__popup_heading wa__popup_heading_".concat(dir),
    style: {
      padding: dir === "ltr" ? "15px 74px 17px 43px" : "15px 43px 17px 74px"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "wa__popup_title"
  }, "\u0634\u0631\u0648\u0639 \u0645\u06A9\u0627\u0644\u0645\u0647"), /*#__PURE__*/_react.default.createElement("div", {
    className: "wa__popup_intro"
  }, accountList && accountList.length > 1 ? /*#__PURE__*/_react.default.createElement("span", null, "\u06CC\u06A9\u06CC \u0627\u0632 \u0627\u0639\u0636\u0627 \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u0648") : /*#__PURE__*/_react.default.createElement("span", null, " \u0644\u0637\u0641\u0627 "), "\u062F\u0631 ", /*#__PURE__*/_react.default.createElement("strong", null, "\u0648\u0627\u062A\u0633\u200C\u0627\u067E"), " \u06AF\u0641\u062A\u06AF\u0648 \u06A9\u0646\u06CC\u062F")), /*#__PURE__*/_react.default.createElement("div", {
    className: "wa__popup_content wa__popup_content_left",
    style: {
      textAlign: dir === "ltr" ? "left" : "right"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "wa__popup_notice"
  }, "\u067E\u0627\u0633\u062E\u06AF\u0648\u060C \u0628\u0647 \u0637\u0648\u0631 \u0645\u0639\u0645\u0648\u0644 \u062F\u0631 \u0686\u0646\u062F \u062F\u0642\u06CC\u0642\u0647 \u067E\u0627\u0633\u062E \u0645\u06CC \u062F\u0647\u0646\u062F."), /*#__PURE__*/_react.default.createElement("div", {
    className: "wa__popup_content_list"
  }, accountList.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "wa__popup_content_item ",
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      target: "_blank",
      href: "\n                    ".concat(("whatsapp://", "https://web.whatsapp.com/"), "send?phone=").concat(item.account),
      className: "wa__stt wa__stt_online",
      style: {
        borderLeft: dir === "rtl" ? item.status ? "2px solid #2db742" : "2px solid #ff0000" : "none",
        borderRight: dir === "rtl" ? "none" : item.status ? "2px solid #2db742" : "2px solid #ff0000"
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "wa__popup_avatar nta-default-avt",
      style: {
        left: dir === "ltr" ? "12px" : "auto",
        right: dir === "ltr" ? "auto" : "12px"
      }
    }, item.avatar || /*#__PURE__*/_react.default.createElement("svg", {
      width: "48px",
      height: "48px",
      className: "nta-whatsapp-default-avatar",
      version: "1.1",
      id: "Layer_1",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      viewBox: "0 0 512 512",
      style: {
        enableBackground: "new 0 0 512 512"
      }
    }, /*#__PURE__*/_react.default.createElement("path", {
      style: {
        fill: "#EDEDED"
      },
      d: "M0,512l35.31-128C12.359,344.276,0,300.138,0,254.234C0,114.759,114.759,0,255.117,0 S512,114.759,512,254.234S395.476,512,255.117,512c-44.138,0-86.51-14.124-124.469-35.31L0,512z"
    }), /*#__PURE__*/_react.default.createElement("path", {
      style: {
        fill: "#55CD6C"
      },
      d: "M137.71,430.786l7.945,4.414c32.662,20.303,70.621,32.662,110.345,32.662 c115.641,0,211.862-96.221,211.862-213.628S371.641,44.138,255.117,44.138S44.138,137.71,44.138,254.234 c0,40.607,11.476,80.331,32.662,113.876l5.297,7.945l-20.303,74.152L137.71,430.786z"
    }), /*#__PURE__*/_react.default.createElement("path", {
      style: {
        fill: "#FEFEFE"
      },
      d: "M187.145,135.945l-16.772-0.883c-5.297,0-10.593,1.766-14.124,5.297 c-7.945,7.062-21.186,20.303-24.717,37.959c-6.179,26.483,3.531,58.262,26.483,90.041s67.09,82.979,144.772,105.048 c24.717,7.062,44.138,2.648,60.028-7.062c12.359-7.945,20.303-20.303,22.952-33.545l2.648-12.359 c0.883-3.531-0.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-0.883-10.593,2.648l-22.069,28.248 c-1.766,1.766-4.414,2.648-7.062,1.766c-15.007-5.297-65.324-26.483-92.69-79.448c-0.883-2.648-0.883-5.297,0.883-7.062 l21.186-23.834c1.766-2.648,2.648-6.179,1.766-8.828l-25.6-57.379C193.324,138.593,190.676,135.945,187.145,135.945"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "wa__popup_txt",
      style: {
        paddingLeft: dir === "ltr" ? "48px" : "auto",
        paddingRight: dir === "ltr" ? "auto" : "48px"
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "wa__member_name"
    }, item.name), /*#__PURE__*/_react.default.createElement("div", {
      className: "wa__member_duty"
    }, item.position))));
  })))));
}

var _default = ChatExtension;
exports.default = _default;