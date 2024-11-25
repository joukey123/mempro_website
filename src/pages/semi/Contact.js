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
import useTranslation from "../../Hook/useTranslation";

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

  const { selectedLanguage } = useTranslation();
  const lang = selectedLanguage.toLowerCase();
  const contactMessage = {
    eng: {
      title: "Get In Touch With Us",
      des: "As a leading trading company, we are here to address your inquiries and provide assistance. Feel free to reach out to us. Your input is important to us.",
    },
    kor: {
      title: "MEMpro Contact!",
      des: "Mempro는 글로벌 무역 솔루션을 제공합니다. 필요한 제품이나 서비스가 있으시면 언제든 말씀해 주세요. 최선을 다해 도와드리겠습니다.",
    },
    cn: {
      title: "请联系我们！",
      des: "作为一家领先的贸易公司，我们在这里解答您的疑问并提供帮助。请随时与我们联系。您的反馈对我们很重要。",
    },
    jp: {
      title: "MEMproにお問い合わせください！",
      des: "当社は、業界をリードする貿易会社として、皆様のご質問にお答えし、サポートを提供するためにここにいます。お気軽にご連絡ください。皆様のご意見は私たちにとって重要です。",
    },
  };
  const labels = {
    eng: {
      firstName: "First Name",
      lastName: "Last Name",
      company: "Company",
      email: "E-mail",
      message: "Your Message",
      agree: "I agree",
    },
    kor: {
      firstName: "이름",
      lastName: "성",
      company: "회사명",
      email: "이메일",
      message: "문의 내용",
      agree: "동의",
    },
    cn: {
      firstName: "名字",
      lastName: "姓",
      company: "公司",
      email: "电子邮件",
      message: "您的留言",
      agree: "我同意",
    },
    jp: {
      firstName: "名前",
      lastName: "苗字",
      company: "会社",
      email: "メール",
      message: "メッセージ",
      agree: "同意します",
    },
  };

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
            <ContactTitle>{contactMessage[lang].title}</ContactTitle>
            <ContactDes>{contactMessage[lang].des}</ContactDes>
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
                label={labels[lang]?.firstName || "First Name"} // 기본값도 설정 가능
                variant="outlined"
                fullWidth
                sx={{ marginRight: "20px" }}
                name="user_firstname"
              />
              <TextField
                type="text"
                label={labels[lang]?.lastName || "Last Name"} // 기본값도 설정 가능
                variant="outlined"
                fullWidth
                name="user_lastname"
              />
            </div>
            <TextField
              type="text"
              label={labels[lang]?.company || "Company"} // 기본값도 설정 가능
              variant="outlined"
              fullWidth
              name="user_company"
              sx={{ margin: "20px 0" }}
            />
            <TextField
              type="email"
              label={labels[lang]?.email || "E-mail"} // 기본값도 설정 가능
              variant="outlined"
              fullWidth
              name="user_email"
              sx={{ marginBottom: "20px" }}
            />

            <TextField
              type="text"
              id="standard-multiline-flexible"
              label={labels[lang]?.message || "Your Message"} // 기본값도 설정 가능
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
                        {lang === "eng"
                          ? " ※ Notice on the Collection and Use of Personal Information"
                          : lang === "kor"
                          ? "※ 개인정보 수집 및 이용에 대한 안내"
                          : lang === "cn"
                          ? "※ 关于个人信息收集和使用的通知"
                          : "※ 個人情報の収集および利用に関するお知らせ"}
                      </b>
                      <br />
                      <br />
                      {lang === "eng"
                        ? "To protect your personal information securely, we request your agreement to the following terms regarding the collection and use of personal information. Please note that if you do not agree, you will not be able to register a customer inquiry."
                        : lang === "kor"
                        ? "귀하의 개인정보를 안전하게 보호하기 위해, 개인정보 수집 및 이용에 대한 다음의 약관에 동의해 주시길 요청드립니다. 동의하지 않으실 경우, 고객 문의 등록이 불가하오니 참고 바랍니다."
                        : lang === "cn"
                        ? "为了安全保护您的个人信息，我们请求您同意以下关于个人信息收集和使用的条款。如您不同意，将无法注册客户咨询。"
                        : "お客様の個人情報を安全に保護するために、個人情報の収集および利用に関する以下の条項に同意をお願いいたします。同意いただけない場合、お客様のお問い合わせの登録ができませんのでご了承ください。"}
                      <br /> <br />
                      1.
                      {lang === "eng"
                        ? "Personal Information Collected"
                        : lang === "kor"
                        ? "수집된 개인정보"
                        : lang === "cn"
                        ? "收集的个人信息"
                        : "収集された個人情報"}
                      <br />
                      {lang === "eng"
                        ? "To respond more accurately and promptly to customer inquiries, we collect the following personal information:"
                        : lang === "kor"
                        ? "고객 문의에 더 정확하고 신속하게 응답하기 위해 다음과 같은 개인정보를 수집합니다:"
                        : lang === "cn"
                        ? "为了更准确和及时地响应客户咨询，我们收集以下个人信息:"
                        : "お客様のお問い合わせにより正確かつ迅速に対応するため、以下の個人情報を収集します:"}
                      <br />
                      <b>
                        {lang === "eng"
                          ? "Collected Items"
                          : lang === "kor"
                          ? "수집 항목"
                          : lang === "cn"
                          ? "收集的项目"
                          : "収集項目"}
                      </b>
                      :
                      {lang === "eng"
                        ? "Customer name, company name, email, contact number"
                        : lang === "kor"
                        ? "고객 이름, 회사명, 이메일, 연락처"
                        : lang === "cn"
                        ? "客户姓名、公司名称、电子邮件、联系电话"
                        : "お客様の名前、会社名、メールアドレス、連絡先番号"}
                      <br />
                      <b>
                        {lang === "eng"
                          ? "Collection Method"
                          : lang === "kor"
                          ? "수집 방법"
                          : lang === "cn"
                          ? "收集方式"
                          : "収集方法"}
                      </b>
                      :
                      {lang === "eng"
                        ? "Website inquiries and consultations"
                        : lang === "kor"
                        ? "웹사이트 문의 및 상담"
                        : lang === "cn"
                        ? "通过网站咨询和交流"
                        : "ウェブサイトの問い合わせおよび相談"}
                      <br /> <br />
                      2.
                      {lang === "eng"
                        ? "Purpose of Collecting and Using Personal Information"
                        : lang === "kor"
                        ? "개인정보 수집 및 이용 목적"
                        : lang === "cn"
                        ? "收集和使用个人信息的目的"
                        : "個人情報の収集および利用目的"}
                      <br />
                      {lang === "eng"
                        ? "This site uses the collected personal information for the following purposes:"
                        : lang === "kor"
                        ? "본 사이트는 수집된 개인정보를 다음과 같은 목적으로 사용합니다:"
                        : lang === "cn"
                        ? "本网站将收集的个人信息用于以下目的:"
                        : "本サイトでは、収集された個人情報を以下の目的で使用します:"}
                      <br />
                      {lang === "eng"
                        ? "(Personal identification, handling complaints, delivering notices, etc.)"
                        : lang === "kor"
                        ? "(개인 식별, 불만 처리, 공지 전달 등)"
                        : lang === "cn"
                        ? "（个人身份识别、处理投诉、传递通知等）"
                        : "（個人の識別、苦情対応、通知の送付など）"}
                      <br /> <br />
                      3.
                      {lang === "eng"
                        ? "Retention and Use Period of Personal Information"
                        : lang === "kor"
                        ? "개인정보 보유 및 이용 기간"
                        : lang === "cn"
                        ? "个人信息的保留和使用期限"
                        : "個人情報の保有および利用期間"}
                      <br />
                      {lang === "eng"
                        ? "In principle, personal information is destroyed immediately after the purpose of its collection and use has been achieved. However, the following information will be retained for the period specified below for the stated reasons:"
                        : lang === "kor"
                        ? "원칙적으로 개인정보는 수집 및 이용 목적이 달성된 후 즉시 파기됩니다. 다만, 다음 정보는 아래에 명시된 이유로 지정된 기간 동안 보관됩니다:"
                        : lang === "cn"
                        ? "原则上，个人信息在达到其收集和使用目的后将被立即销毁。但是，以下信息将根据以下原因保留一段时间:"
                        : "原則として、個人情報は収集および利用目的が達成された後、直ちに破棄されます。ただし、以下の情報は以下の理由で指定された期間保持されます:"}
                      <br />
                      <b>
                        {lang === "eng"
                          ? "Retention Basis"
                          : lang === "kor"
                          ? "보유 근거"
                          : lang === "cn"
                          ? "保留依据"
                          : "保持の根拠"}
                      </b>
                      :
                      {lang === "eng"
                        ? "Document Management Regulations"
                        : lang === "kor"
                        ? "문서 관리 규정"
                        : lang === "cn"
                        ? "文件管理规定"
                        : "文書管理規則"}
                      <br />
                      <b>
                        {lang === "eng"
                          ? "Retention Period"
                          : lang === "kor"
                          ? "보유 기간"
                          : lang === "cn"
                          ? "保留期限"
                          : "保持期間"}
                      </b>
                      :
                      {lang === "eng"
                        ? "3 years"
                        : lang === "kor"
                        ? "3년"
                        : lang === "cn"
                        ? "3年"
                        : "3年間"}
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
                      label={labels[lang]?.agree || "I agree"}
                    />
                  </FormGroup>
                </div>
                <CaptchaWrapper>
                  <HCaptcha
                    sitekey="9a623678-ab70-4226-ab24-3272c7fe3f62"
                    onLoad={onLoad}
                    onVerify={setToken}
                    ref={captchaRef}
                    languageOverride={
                      lang === "eng"
                        ? "en"
                        : lang === "kor"
                        ? "ko"
                        : lang === "cn"
                        ? "zh"
                        : "ja"
                    }
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
