import React, { useState } from "react";
import "./ChatExtension.css";

function ChatExtension({
  dir = "rtl",
  position = "right",
  color = "#ffffff",
  backgroundColor = "#376466",
  backgroundIcon = "#009299",
  accountList = [],
}) {
  const [active, setActive] = useState(false);
  if (!(accountList && accountList[0])) return null;
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
              
              .wa__popup_chat_box .wa__popup_heading {
                background: ${backgroundIcon};
              }
              
              .wa__btn_popup .wa__btn_popup_icon {
                background: ${backgroundIcon};
              }
              
              .wa__popup_chat_box .wa__popup_heading .wa__popup_title {
                color: ${color};
              }
              
              .wa__popup_chat_box .wa__popup_heading .wa__popup_intro {
                color: ${color};
                opacity: 0.8;
              }
              
              .wa__popup_chat_box .wa__popup_heading .wa__popup_intro strong {
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
          در مورد این محصول سوالی دارید؟
          <br />
          <strong>چت از طریق واتس‌اپ</strong>
        </div>
        <div className="wa__btn_popup_icon"></div>
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
          className={`wa__popup_heading wa__popup_heading_${dir}`}
          style={{
            padding:
              dir === "ltr" ? "15px 74px 17px 43px" : "15px 43px 17px 74px",
          }}
        >
          <div className="wa__popup_title">شروع مکالمه</div>
          <div className="wa__popup_intro">
            {accountList && accountList.length > 1 ? (
              <span>یکی از اعضا را انتخاب و</span>
            ) : (
              <span> لطفا </span>
            )}
            در <strong>واتس‌اپ</strong> گفتگو کنید
          </div>
        </div>
        {/* <!-- /.wa__popup_heading --> */}
        <div
          className="wa__popup_content wa__popup_content_left"
          style={{ textAlign: dir === "ltr" ? "left" : "right" }}
        >
          <div className="wa__popup_notice">
            پاسخگو، به طور معمول در چند دقیقه پاسخ می دهند.
          </div>

          <div className="wa__popup_content_list">
            {accountList.map((item, index) => {
              return (
                <div className="wa__popup_content_item " key={index}>
                  <a
                    target="_blank"
                    href={`
                    ${("whatsapp://", "https://web.whatsapp.com/")}send?phone=${
                      item.account
                    }`}
                    className="wa__stt wa__stt_online"
                    style={{
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
                 
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatExtension;
