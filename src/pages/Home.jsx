import Header from "../components/Header";
import CardsContainer from "../components/CardsContainer";
import { useDispatch } from "react-redux";
import { getVideogames } from "../Redux/action";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.videoGames);

  useEffect(() => {
    dispatch(getVideogames());
  }, []);

  return (
    <>
      <Header pageTitle={"Home"} />
      <CardsContainer cards={cards} />
    </>
  );
}
