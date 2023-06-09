import Header from "../components/Header";
import { useLocation } from "react-router-dom";
export default function DetailPage() {
  const location = useLocation();
  const videoGameID = location.pathname.split("/")[3];
  console.log("videoGameID::: ", videoGameID);

  // SE HACE EL DISPATCH DEL GET DEL VIDEOJUEGO CON ESE ID y lo que me trae se lo mando al detailVideoGame
  return (
    <>
      <Header pageTitle={"detail"} />
      {/* <DetailVideoGame data={data}></DetailVideoGame> */}
    </>
  );
}
