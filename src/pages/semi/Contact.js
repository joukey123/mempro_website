import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import PageHeader from "../../components/headers/PageHeader";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Avatar from "@mui/material/Avatar";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessIcon from "@mui/icons-material/Business";
import { add } from "../../data";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { Fade, useMediaQuery } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CircularProgress from "@mui/material/CircularProgress";
import Banner from "../../components/article/Banner";

const Warpper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 50px auto;
  display: flex;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

const ContactTitle = styled.h1`
  font-size: 30px;
  margin: 10px 0 20px 0;
`;
const ContactDes = styled.p`
  font-size: 18px;
`;
const OfficeAdd = styled.div`
  display: flex;
  align-items: center;
`;
const OfficeInfo = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin: 5px 0;
    width: 90%;
  }
`;
const CaptchaWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProgressBox = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  z-index: 990;
`;
function Contact() {
  const form = useRef();
  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);
  const serviceID = "service_z6fxjrh";
  const templateID = "template_xl06s54";
  const userID = "AMANBIysr4IkDu-JA";
  const [alert, setAlert] = useState(null);
  const [agree, setAgree] = useState(false);
  const checkboxRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
  const isMobile = useMediaQuery("(max-width: 1023px)");

  const onLoad = () => {
    // this reaches out to the hCaptcha JS API and runs the
    // execute function on it. you can use other functions as
    // documented here:
    // https://docs.hcaptcha.com/configuration#jsapi
    captchaRef.current.execute();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!token) {
      captchaRef.current.execute();
    } else {
      setIsLoading(true); // 로딩 시작

      emailjs.sendForm(serviceID, templateID, form.current, userID).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setAlert({ message: "Email sent successfully!", state: "success" });
          form.current.reset();
          setToken(null);
          setAgree(false);
          if (checkboxRef.current) {
            checkboxRef.current.checked = false;
          }
          if (captchaRef.current) {
            captchaRef.current.resetCaptcha();
          }
          setIsLoading(false); // 로딩 종료
        },
        (error) => {
          console.log("FAILED...", error);
          setAlert({
            message: "Email sending failed. Please try again.",
            state: "error",
          });
          setIsLoading(false); // 로딩 종료
        }
      );
    }
  };
  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(null);
      }, 5000); // 5초 후 알림 창 자동 닫기
      return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 정리
    }
    setToken(null);
  }, [alert]);
  return (
    <>
      <PageHeader />
      {alert && (
        <Alert
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 2,
          }}
          severity={alert.state}
          variant="filled"
          onClose={() => {
            setAlert(null);
          }}
        >
          <AlertTitle>
            {alert.state === "success" ? "Success" : "error"}
          </AlertTitle>
          {alert.message}
        </Alert>
      )}

      <Warpper>
        <div className="office" style={{ width: isMobile ? "100%" : "60%" }}>
          <div
            style={{
              paddingLeft: isMobile ? 0 : 20,
              width: "90%",
              borderBottom: ".5px solid rgba(0,0,0,0.2)",
              margin: isMobile && "0 auto",
              marginBottom: "50px",
            }}
          >
            <span>Contact Us</span>
            <ContactTitle>Get In Touch With Us</ContactTitle>
            <ContactDes>
              As a leading trading company, we are here to address your
              inquiries and provide assistance. Feel free to reach out to us.
              Your input is important to us.
            </ContactDes>
            <Banner />
          </div>
          {add.map((item, index) => (
            <OfficeAdd
              className="officeAdd"
              style={{
                display: isMobile ? "none" : "flex",
              }}
            >
              <Avatar
                variant="rounded"
                sx={{
                  width: 50,
                  height: 120,
                  backgroundColor: "#1976D2",
                  margin: "30px 20px ",
                }}
              >
                {item.type === "Headquarters" ? (
                  <ApartmentIcon sx={{ width: 30, height: 30 }} />
                ) : (
                  <BusinessIcon sx={{ width: 30, height: 30 }} />
                )}
              </Avatar>
              <OfficeInfo>
                <span style={{ fontWeight: 700, fontSize: "18px" }}>
                  {item.nation}
                </span>
                <span>
                  <b>TELL :</b> {item.tell}
                </span>
                <span>
                  <b>FAX : </b>
                  {item.fax}
                </span>
                <span>{item.address}</span>
              </OfficeInfo>
            </OfficeAdd>
          ))}
        </div>
        <div
          className="form"
          style={{
            width: isMobile ? "90%" : "60%",
            backgroundColor: "#1976D2",
            padding: isMobile ? "10px" : "15px",
            borderRadius: "5px",
            margin: isMobile && "0 auto",
          }}
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            style={{
              backgroundColor: "white",
              padding: "50px 20px",
              borderRadius: "5px",
              boxShadow: "1px 1px 20px rgba(0,0,0,0.4)",
              position: "relative",
            }}
          >
            {isLoading && (
              <ProgressBox>
                <CircularProgress />
              </ProgressBox>
            )}

            <div style={{ display: "flex" }}>
              <TextField
                type="text"
                label="First Name"
                variant="outlined"
                fullWidth
                sx={{ marginRight: "20px" }}
                name="user_firstname"
              />
              <TextField
                type="text"
                label="Last Name"
                variant="outlined"
                fullWidth
                name="user_lastname"
              />
            </div>
            <TextField
              type="text"
              label="Company"
              variant="outlined"
              fullWidth
              name="user_company"
              sx={{ margin: "20px 0" }}
            />
            <TextField
              type="email"
              label="E-mail"
              variant="outlined"
              fullWidth
              name="user_email"
              sx={{ marginBottom: "20px" }}
            />

            <TextField
              type="text"
              id="standard-multiline-flexible"
              label="Your Message"
              multiline
              minRows={10}
              maxRows={10}
              variant="standard"
              fullWidth
              name="message"
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 50,
                flexDirection: "column",
              }}
            >
              <form
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100px",
                      backgroundColor: "rgba(0,0,0,0.05)",
                      overflowY: "scroll",
                      padding: 20,
                    }}
                  >
                    <p>
                      ※ 개인정보 수집 및 이용에 대한 안내 고객님의 개인정보를
                      안전하게 보호하고자 아래와 같이 개인정보수집 및 이용에
                      대한 약관을 동의 받고 있습니다.
                      <br />
                      미동의 시 고객문의 등록이 불가함을 알려드립니다.
                      <br /> <br />
                      1. 수집하는 개인정보 항목
                      <br />
                      회사는 고객문의에 대해 보다 정확하고 빠른 대응을 위해
                      아래와 같은
                      <br />
                      개인정보를 수집하고 있습니다.
                      <br />
                      - 수집항목 : 고객명, 업체명, 이메일, 연락처
                      <br />
                      - 개인정보 수집방법 : 홈페이지 문의 및 상담
                      <br /> <br />
                      2. 개인정보의 수집 및 이용목적
                      <br />
                      본 사이트는 수집한 개인정보를 다음의 목적을 위해
                      활용합니다.
                      <br />
                      (개인 식별, 불만처리 등 민원처리, 고지사항 전달)
                      <br /> <br />
                      3. 개인정보의 보유 및 이용기간
                      <br />
                      원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당
                      정보를
                      <br />
                      지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의
                      이유로
                      <br />
                      명시한 기간 동안 보존합니다.
                      <br />
                      보존 근거 : 문서관리규정
                      <br />
                      보존 기간 : 3년
                    </p>
                  </div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={() => {
                            setAgree((prev) => !prev);
                          }}
                          ref={checkboxRef}
                          checked={agree}
                        />
                      }
                      sx={{ margin: 1 }}
                      label="동의합니다"
                    />
                  </FormGroup>
                </div>
                <CaptchaWrapper>
                  <HCaptcha
                    sitekey="9a623678-ab70-4226-ab24-3272c7fe3f62"
                    onLoad={onLoad}
                    onVerify={setToken}
                    ref={captchaRef}
                    languageOverride="en"
                  />
                </CaptchaWrapper>
              </form>
              {agree && token && (
                <Fade in={agree && token}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ width: "60%", margin: 1, marginTop: "50px" }}
                    endIcon={<SendIcon />}
                  >
                    SEND
                  </Button>
                </Fade>
              )}
            </div>
          </form>
        </div>
      </Warpper>
      {/* <section>
        <div className="container">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Full Name"
              name="user_name"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
            <input type="text" placeholder="Subject" name="subject" required />
            <textarea name="message" cols="30" rows="10"></textarea>
            <button>send</button>
          </form>
          <form>
            <HCaptcha
              sitekey="9a623678-ab70-4226-ab24-3272c7fe3f62"
              onLoad={onLoad}
              onVerify={setToken}
              ref={captchaRef}
            />
          </form>
        </div>
      </section> */}
      <Footer />
    </>
  );
}

export default Contact;
