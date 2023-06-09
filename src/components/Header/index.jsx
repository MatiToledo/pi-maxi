/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { Logo, Root } from "./styled";

export default function Header({ pageTitle }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate({
      pathname: "videogame/create",
    });
  }

  return (
    <Root>
      <Logo></Logo>
      <h1>{pageTitle}</h1>
      <button onClick={handleClick}>Crear videojuego</button>
      <h1>Mati</h1>
    </Root>
  );
}
