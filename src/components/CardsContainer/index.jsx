/* eslint-disable react/prop-types */
import { Root } from "./styled";
import CardVideoGame from "../CardVideoGame";
export default function CardsContainer({ cards }) {
  return (
    <Root>
      {cards.map((card) => (
        <CardVideoGame key={card.id} data={card} />
      ))}
    </Root>
  );
}
