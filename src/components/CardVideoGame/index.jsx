/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { Root } from "./styled";

export default function CardVideoGame({ data }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate({
      pathname: `/videogame/detail/${data.id}`,
    });
  }

  return (
    <Root onClick={handleClick}>
      <h1>{data.name}</h1>
    </Root>
  );
}
