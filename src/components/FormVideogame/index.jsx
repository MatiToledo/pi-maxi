import { useState } from "react";
import { InputRoot, Root } from "./styled";
import { useDispatch } from "react-redux";
import axios from "axios";
// maxicbapl@gmail.com

export default function FormVideogame() {
  const dispatch = useDispatch();
  const [titulo, setTitulo] = useState("");
  const [description, setDescription] = useState("");

  // BACKEND;
  // try {
  //   return {
  //     success: {
  //       mensaje: "Videogame creado con exito!",
  //       result: true,
  //     },
  //   };
  // } catch (error) {
  //   return {
  //     error: {
  //       mensaje: "Fallo al crear el videojuego",
  //       hthpCode: 400,
  //     },
  //   };
  // }

  async function handleClick(e) {
    e.preventDefault();
    let dataForm = {
      titulo,
      description,
    };

    const fetchPostVideogame = await axios.post(
      "http://localhost:3001/videogames",
      dataForm
    );

    if (fetchPostVideogame.success) {
      alert(fetchPostVideogame.succes.mensaje);
    } else {
      alert("Error al crear el videojuego");
    }
  }

  return (
    <Root>
      <InputRoot>
        <label>Titulo</label>
        <input onChange={(e) => setTitulo(e.target.value)}></input>
      </InputRoot>
      <InputRoot>
        <label>Descripcion</label>
        <textarea onChange={(e) => setDescription(e.target.value)}></textarea>
      </InputRoot>
      <InputRoot>
        <label>Genero</label>
        <select>
          <option>Action</option>
          <option>Adventure</option>
        </select>
      </InputRoot>
      <button onClick={handleClick}>Enviar</button>
    </Root>
  );
}
