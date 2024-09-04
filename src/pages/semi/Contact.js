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
                      <b>
                        ※ Notice on the Collection and Use of Personal
                        Information
                      </b>
                      <br />
                      <br />
                      To protect your personal information securely, we request
                      your agreement to the following terms regarding the
                      collection and use of personal information. Please note
                      that if you do not agree, you will not be able to register
                      a customer inquiry.
                      <br /> <br />
                      1. Personal Information Collected
                      <br />
                      To respond more accurately and promptly to customer
                      inquiries, we collect the following personal information:
                      <br />
                      <b>Collected Items</b> : Customer name, company name,
                      email, contact number
                      <br />
                      <b>Collection Method</b> : Website inquiries and
                      consultations
                      <br /> <br />
                      2. Purpose of Collecting and Using Personal Information
                      <br />
                      This site uses the collected personal information for the
                      following purposes:
                      <br />
                      (Personal identification, handling complaints, delivering
                      notices, etc.)
                      <br /> <br />
                      3. Retention and Use Period of Personal Information
                      <br />
                      In principle, personal information is destroyed
                      immediately after the purpose of its collection and use
                      has been achieved. However, the following information will
                      be retained for the period specified below for the stated
                      reasons:
                      <br />
                      <b>Retention Basis</b>: Document Management Regulations
                      <br />
                      <b>Retention Period</b>: 3 years
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
                      label="I agree"
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
