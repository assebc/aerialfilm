import { FC, FormEvent, useRef } from "react";
import { Button, Col, Input, Row, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import video4 from "../../assets/videos/video4.mp4";
import emailjs from "@emailjs/browser";
import "./styles.css";

export const Contact: FC = () => {
  const formRef = useRef<any>();

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (
      formRef.current.name.value &&
      formRef.current.company.value &&
      formRef.current.email.value &&
      formRef.current.message.value
    ) {
      emailjs
        .sendForm(
          "service_10ygweq",
          "template_entlgn8",
          formRef.current!,
          "v8bEMowzuuy-uAzAg"
        )
        .then(
          (result) => {
            if (result.status === 200)
              message.success("Email sent with success!");
          },
          (error) => {
            if (error)
              message.error("Error while sending your email, try again later!");
          }
        );
    } else {
      message.error("Please fill the form!");
    }
  };

  return (
    <div className="body">
      <div className="video_wrapper">
        <div className="over_text">
          <div className="left_over_text">
            <h1>CONTACT US</h1>
          </div>

          <div className="right_over_text">
            <h2>
              Based in Braga, AERIALFILM has crews and resources
              <br /> in the keyfilm production markets all around Portugal.
            </h2>
          </div>
        </div>

        <video src={video4} loop autoPlay={true} muted />
      </div>

      <div className="form_wrapper">
        <h1>{"WE LOOK FORWARD TO HEARING ABOUT YOUR PROJECT."}</h1>

        <form
          autoComplete="new-password"
          ref={formRef}
          onSubmit={sendEmail}
          className="inputs_wrapper"
        >
          <Row gutter={16}>
            <Col
              span={12}
              flex={1}
              style={{
                display: "flex",
                flexDirection: "column",
                color: "white",
              }}
            >
              <label htmlFor="name">
                <span>*</span> FULL NAME
              </label>
              <Input type="text" name="name" autoComplete="new-password" />
            </Col>

            <Col
              span={12}
              flex={1}
              style={{
                display: "flex",
                flexDirection: "column",
                color: "white",
              }}
            >
              <label htmlFor="email">
                <span>*</span> EMAIL
              </label>
              <Input type="email" name="email" autoComplete="new-password" />
            </Col>
          </Row>

          <Row gutter={16}>
            <Col
              span={12}
              flex={1}
              style={{
                display: "flex",
                flexDirection: "column",
                color: "white",
              }}
            >
              <label htmlFor="company">
                <span>*</span> COMPANY
              </label>
              <Input type="text" name="company" autoComplete="off" />
            </Col>

            <Col
              span={12}
              flex={1}
              style={{
                display: "flex",
                flexDirection: "column",
                color: "white",
              }}
            >
              <label htmlFor="phone_number">PHONE NUMBER</label>
              <Input
                type="number"
                name="phone_number"
                autoComplete="new-password"
              />
            </Col>
          </Row>

          <Row>
            <Col
              span={24}
              style={{
                display: "flex",
                flexDirection: "column",
                color: "white",
              }}
            >
              <label htmlFor="message">
                <span>*</span> MESSAGE
              </label>
              <TextArea
                name="message"
                rows={3}
                className="text_area"
                autoComplete="off"
              />
            </Col>
          </Row>
          <Row
            style={{
              marginTop: 24,
              display: "flex",
              justifyContent: "right",
            }}
          >
            <div className="button">
              <Button htmlType="submit">SUBMIT</Button>
            </div>
          </Row>
        </form>
      </div>
    </div>
  );
};
