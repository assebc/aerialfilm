import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { ROUTES } from "../../configs/routes";

export const NotFound: FC = () => {
  const LiveCounter = () => {
    const [counter, setCounter] = useState(5);
    const navigate = useNavigate();

    const redirectAfterDelay = () => {
      navigate(ROUTES.HOME);
    };

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);

      if (counter === 0) {
        redirectAfterDelay();
      }

      return () => clearInterval(intervalId);
    }, [counter, navigate]);

    return (
      <>
        <span>REDIRENCIONANDO PARA A PÁGINA PRINCIPAL EM {counter} ...</span>
      </>
    );
  };

  return (
    <div className="middle_text">
      <h1>NADA PARA VER AQUI.</h1>
      <LiveCounter />
    </div>
  );
};
