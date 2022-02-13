/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import sendIconImage from "./img/send.png";
import "./ChatExtension.css";

const checkMobile = (isMobile, other) => {
  const mobileCheck = function () {
    let check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };
  if (mobileCheck()) {
    return isMobile;
  } else {
    return other;
  }
};

function ChatExtension({
  dir = "ltr",
  phoneNumber = "",
  textareaPlaceholder = "",
  sendIcon="",
  widthSendIcon="42",
  position = "left",
  color = "#ffffff",
  backgroundColor = "#009299",
  accountList = [],
  tooltipTitle = "",
  tooltipDescription = "",
  title = "",
  lead = "",
  description = "",
  target = "_blank",
}) {
  const [active, setActive] = useState(false);
  const [renderKey, setRenderKey] = useState("");
  const [valueErea, setValueErea] = useState();

  useEffect(() => {
    setRenderKey(`${Math.floor(Math.random() * 1000000)}`);
  }, []);

  if (!(accountList && accountList[0] && renderKey)) return null;

  return (
    <div style={{ display: "inline", direction: dir }}>
      <style>
        {`
            .wa__stt_offline {
                pointer-events: none;
              }
              
              .wa__button_text_only_me .wa__btn_txt {
                padding-top: 16px !important;
                padding-bottom: 15px !important;
              }
              
              .wa__popup_content_item .wa__cs_img_wrap {
                width: 48px;
                height: 48px;
              }
              
              .wa__popup_chat_box .wa__popup_heading.wp_${renderKey} {
                background: ${backgroundColor};
              }
              
              .wa__btn_popup .wa__btn_popup_icon.wp_${renderKey} {
                background: ${backgroundColor};
              }
              
              .wa__popup_chat_box .wa__popup_heading.wp_${renderKey} .wa__popup_title {
                color: ${color};
              }
              
              .wa__popup_chat_box .wa__popup_heading.wp_${renderKey} .wa__popup_intro{
                color: ${color};
                opacity: 0.8;
              }
              
              .wa__popup_chat_box .wa__popup_heading.wp_${renderKey} .wa__popup_intro strong {
                color: ${color};
              }
            `}
      </style>
      <div
        className={`wa__btn_popup${active ? " wa__active" : ""}`}
        style={{
          left: position === "left" ? "30px" : "auto",
          right: position === "left" ? "auto" : "30px",
        }}
        onClick={() => setActive(!active)}
      >
        <div
          className="wa__btn_popup_txt"
          style={{
            left: position === "left" ? "100%" : "auto",
            right: position === "left" ? "auto" : "100%",
            padding: dir === "rtl" ? "7px 12px 7px 0px" : "7px 0 7px 12px",
            marginLeft: position === "left" ? "7px" : "auto",
            marginRight: position === "left" ? "auto" : "7px",
          }}
        >
          {tooltipTitle}
          <br />
          <br />
          <strong>{tooltipDescription}</strong>
          <br />
        </div>
        <div className={`wa__btn_popup_icon wp_${renderKey}`}></div>
      </div>
      <div
        className={`wa__popup_chat_box${
          active ? " wa__pending wa__active wa__lauch" : ""
        }`}
        style={{
          left: position === "left" ? "25px" : "auto",
          right: position === "left" ? "auto" : "25px",
        }}
      >
        <div
          className={`wa__popup_heading wa__popup_heading_${dir} wp_${renderKey}`}
          style={{
            padding:
              dir === "ltr" ? "15px 74px 17px 43px" : "15px 43px 17px 74px",
          }}
        >
          <div className="wa__popup_title">{title}</div>
          <div className="wa__popup_intro">
            {/* {accountList && accountList.length > 1 ? (
              <span>{selectMember || ""}</span>
            ) : ( */}
            <strong>{lead}</strong>
            {/* )} */}
          </div>
        </div>
        {/* <!-- /.wa__popup_heading --> */}
        <div
          className="wa__popup_content wa__popup_content_left"
          style={{ textAlign: dir === "ltr" ? "left" : "right" }}
        >
          <div className="wa__popup_notice">{description}</div>

          <div className="wa__popup_content_list">
            {accountList.map((item, index) => {
              return (
                <div className="wa__popup_content_item " key={index}>
                  <a
                    target={target}
                    href={
                      item.status
                        ? `
                    ${checkMobile(
                      "whatsapp://",
                      "https://web.whatsapp.com/"
                    )}send?phone=${item.account}`
                        : undefined
                    }
                    className="wa__stt wa__stt_online"
                    style={{
                      cursor: item.status ? "pointer" : "default",
                      filter: !item.status
                        ? "blur(2px) grayscale(0.5) opacity(0.5)"
                        : undefined,
                      borderLeft:
                        dir === "rtl"
                          ? item.status
                            ? "2px solid #2db742"
                            : "2px solid #ff0000"
                          : "none",
                      borderRight:
                        dir === "rtl"
                          ? "none"
                          : item.status
                          ? "2px solid #2db742"
                          : "2px solid #ff0000",
                    }}
                  >
                    <div
                      className="wa__popup_avatar nta-default-avt"
                      style={{
                        left: dir === "ltr" ? "12px" : "auto",
                        right: dir === "ltr" ? "auto" : "12px",
                      }}
                    >
                      {item.avatar || (
                        <svg
                          width="48px"
                          height="48px"
                          className="nta-whatsapp-default-avatar"
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 512 512"
                          style={{ enableBackground: "new 0 0 512 512" }}
                        >
                          <path
                            style={{ fill: "#EDEDED" }}
                            d="M0,512l35.31-128C12.359,344.276,0,300.138,0,254.234C0,114.759,114.759,0,255.117,0
    S512,114.759,512,254.234S395.476,512,255.117,512c-44.138,0-86.51-14.124-124.469-35.31L0,512z"
                          ></path>
                          <path
                            style={{ fill: "#55CD6C" }}
                            d="M137.71,430.786l7.945,4.414c32.662,20.303,70.621,32.662,110.345,32.662
    c115.641,0,211.862-96.221,211.862-213.628S371.641,44.138,255.117,44.138S44.138,137.71,44.138,254.234
    c0,40.607,11.476,80.331,32.662,113.876l5.297,7.945l-20.303,74.152L137.71,430.786z"
                          ></path>
                          <path
                            style={{ fill: "#FEFEFE" }}
                            d="M187.145,135.945l-16.772-0.883c-5.297,0-10.593,1.766-14.124,5.297
    c-7.945,7.062-21.186,20.303-24.717,37.959c-6.179,26.483,3.531,58.262,26.483,90.041s67.09,82.979,144.772,105.048
    c24.717,7.062,44.138,2.648,60.028-7.062c12.359-7.945,20.303-20.303,22.952-33.545l2.648-12.359
    c0.883-3.531-0.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-0.883-10.593,2.648l-22.069,28.248
    c-1.766,1.766-4.414,2.648-7.062,1.766c-15.007-5.297-65.324-26.483-92.69-79.448c-0.883-2.648-0.883-5.297,0.883-7.062
    l21.186-23.834c1.766-2.648,2.648-6.179,1.766-8.828l-25.6-57.379C193.324,138.593,190.676,135.945,187.145,135.945"
                          ></path>
                        </svg>
                      )}
                    </div>

                    <div
                      className="wa__popup_txt"
                      style={{
                        paddingLeft: dir === "ltr" ? "48px" : "auto",
                        paddingRight: dir === "ltr" ? "auto" : "48px",
                      }}
                    >
                      <div className="wa__member_name">{item.name}</div>
                      <div className="wa__member_duty">{item.position}</div>
                    </div>
                  </a>
                  {checkMobile(
                    <a
                      href={`tel:+${item?.account}`}
                      style={{ padding: "10px 0" }}
                    >
                      <style
                        id="breath-d05c0ec6-a6ce-46c7-8372-f11168654cfd"
                        data-anikit=""
                      >
                        {`@keyframes breath-d05c0ec6-a6ce-46c7-8372-f11168654cfd
{
  0% {
    animation-timing-function: cubic-bezier(0.9647,0.2413,-0.0705,0.7911);
    transform: scale(0.9099999999999999);
  }
  51% {
    animation-timing-function: cubic-bezier(0.9226,0.2631,-0.0308,0.7628);
    transform: scale(1.02994);
  }
  100% {
    transform: scale(0.9099999999999999);
  }
}`}
                      </style>
                      <svg
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          height: "100%",
                          width: "100%",
                        }}
                        width="100px"
                        height="48px"
                      >
                        <g
                          class="ldl-scale"
                          style={{
                            transformOrigin: "50% 50%",
                            transform: "rotate(0deg) scale(0.8, 0.8)",
                          }}
                        >
                          <g class="ldl-ani">
                            <g class="ldl-layer">
                              <g
                                class="ldl-ani"
                                style={{
                                  transform: "scale(0.91)",
                                  transformOrigin: "50px 50px",
                                  animation:
                                    "1.11111s linear -0.694444s infinite normal forwards running breath-d05c0ec6-a6ce-46c7-8372-f11168654cfd",
                                }}
                              >
                                <path
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke-width="3"
                                  stroke="#323232"
                                  fill="none"
                                  d="M31.342 43.173a6.323 6.323 0 0 0 0-8.942l-5.676-5.676a6.323 6.323 0 0 0-8.942 0l.01-.01-2.905 2.905c-16.851 16.851 38.547 72.248 55.398 55.398l2.905-2.905-.01.01a6.323 6.323 0 0 0 0-8.942l-5.676-5.676a6.323 6.323 0 0 0-8.942 0l-2.288 2.288c-1.84 1.84-4.768 1.96-6.78.309-6.94-5.695-13.994-12.749-19.689-19.689-1.651-2.012-1.532-4.939.309-6.78l2.286-2.29z"
                                  style={{ stroke: "rgb(0, 0, 0)" }}
                                ></path>
                              </g>
                            </g>
                            <g class="ldl-layer">
                              <g class="ldl-ani">
                                <g>
                                  <g class="ldl-layer">
                                    <g
                                      class="ldl-ani"
                                      style={{
                                        transform: "scale(0.91)",
                                        transformOrigin: "50px 50px",
                                        animation:
                                          "1.11111s linear -0.833333s infinite normal forwards running breath-d05c0ec6-a6ce-46c7-8372-f11168654cfd",
                                      }}
                                    >
                                      <path
                                        stroke-miterlimit="10"
                                        stroke-linecap="round"
                                        stroke-width="3"
                                        stroke="#2db742"
                                        fill="none"
                                        d="M42.035 32.391c13.555 1.022 24.317 12.036 24.932 25.7"
                                      ></path>
                                    </g>
                                  </g>
                                  <g class="ldl-layer">
                                    <g
                                      class="ldl-ani"
                                      style={{
                                        transform: "scale(0.91)",
                                        transformOrigin: "50px 50px",
                                        animation:
                                          "1.11111s linear -0.972222s infinite normal forwards running breath-d05c0ec6-a6ce-46c7-8372-f11168654cfd",
                                      }}
                                    >
                                      <path
                                        stroke-miterlimit="10"
                                        stroke-linecap="round"
                                        stroke-width="3"
                                        stroke="#2db742"
                                        fill="none"
                                        d="M78.352 58.092C77.72 38.139 61.88 22.025 42.035 20.977"
                                      ></path>
                                    </g>
                                  </g>
                                  <g class="ldl-layer">
                                    <g
                                      class="ldl-ani"
                                      style={{
                                        transform: "scale(0.91)",
                                        transformOrigin: "50px 50px",
                                        animation:
                                          "1.11111s linear -1.11111s infinite normal forwards running breath-d05c0ec6-a6ce-46c7-8372-f11168654cfd",
                                      }}
                                    >
                                      <path
                                        stroke-miterlimit="10"
                                        stroke-linecap="round"
                                        stroke-width="3"
                                        stroke="#2db742"
                                        fill="none"
                                        d="M89.325 58.092C88.684 32.079 67.941 11.063 42.035 10"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </a>,
                    null
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="textarea-whatsapp-wrapper">
          <textarea
            className="textarea-wh"
            placeholder={textareaPlaceholder}
            value={valueErea}
            onChange={(e) => {
              setValueErea(e.target.value);
            }}
          />
          <a
            className="textarea-whatsapp"
            href={`${"https://web.whatsapp.com/"}send?phone=${phoneNumber}&text=${
              valueErea?.length > 1 ? valueErea : ""
            }`}
            target={"_blank"}
            rel="noreferrer"
          >
            <div
              title={dir == "rtl" ? "ارسال" : "send"}
              className="send-textarea-wh"
              style={{
                transform: dir == "rtl" ? "rotate(-135deg)" : "rotate(45deg)",
              }}
            >
              <img width={widthSendIcon} src={sendIcon ? sendIcon : sendIconImage} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ChatExtension;
