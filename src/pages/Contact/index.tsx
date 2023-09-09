import { FC, FormEvent, useRef } from "react";
import { Button, Col, Input, Row, message } from "antd";
import TextArea from "antd/es/input/TextArea";
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
              message.success("Email enviado com sucesso!");
          },
          (error) => {
            if (error)
              message.error("Erro no envio do seu email, tente mais tarde!");
          }
        );
    } else {
      message.error("Por favor, preencha o formulário!");
    }
  };

  return (
    <div className="body">
      <div className="video_wrapper">

          <Row className="over_text">
            <Col span={12} className="center">
              <h1>CONTACT US</h1>
            </Col>
            <Col span={12} className="center">
              <h2>
                Com sede em Braga, AERIALFILM tem equipas e recursos
                <br /> no mercado de filmagem e produção em todo Portugal.
              </h2>
            </Col>
          </Row>

        <iframe src="https://www.youtube.com/embed/WBs3G1PvyfM?si=j8ZiLhkGolXTyITW&autoplay=1&mute=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />

      </div>

      <div className="form_wrapper">
        <h1>{"ESPERAMOS PARA SABER MAIS SOBRE O SEU PROJETO."}</h1>

        <form
          autoComplete="new-password"
          ref={formRef}
          onSubmit={sendEmail}
          className="inputs_wrapper"
        >
          <Row gutter={[16, 16]}>
            <Col
              lg={12} md={24} sm={24} xs={24}
              flex={1}
              className="form_item"
            >
              <label htmlFor="name">
                <span>*</span> NOME COMPLETO
              </label>
              <Input type="text" name="name" autoComplete="new-password" />
            </Col>

            <Col
              lg={12} md={24} sm={24} xs={24}
              flex={1}
              className="form_item"
            >
              <label htmlFor="email">
                <span>*</span> EMAIL
              </label>
              <Input type="email" name="email" autoComplete="new-password" />
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col
              lg={12} md={24} sm={24} xs={24}
              flex={1}
              className="form_item"
            >
              <label htmlFor="company">
                <span>*</span> EMPRESA
              </label>
              <Input type="text" name="company" autoComplete="off" />
            </Col>

            <Col
              lg={12} md={24} sm={24} xs={24}
              flex={1}
              className="form_item"
            >
              <label htmlFor="phone_number">TELEFONE</label>
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
              className="form_item"
            >
              <label htmlFor="message">
                <span>*</span> MENSAGEM
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
              <Button htmlType="submit">SUBMETER</Button>
            </div>
          </Row>
        </form>
      </div>
    </div>
  );
};
