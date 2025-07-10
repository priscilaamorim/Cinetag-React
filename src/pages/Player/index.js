import Banner from "components/Banner";
import styles from "./Player.module.css";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import NaoEncontrada from "pages/NaoEncontrada";
import { useEffect, useState } from "react";


function Player() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [carregando, setCarregando] = useState(true);


   useEffect(() => {
    async function buscarVideo() {
      try {
        const resposta = await fetch(
          "https://my-json-server.typicode.com/monicahillman/cinetag-api/videos"
        );
        const dados = await resposta.json();
        const encontrado = dados.find((v) => v.id === Number(id));
        setVideo(encontrado || null);

      } catch (erro) {
        console.error("Erro ao buscar o vídeo:", erro);
        setVideo(null);

      } finally {
        setCarregando(false); // sempre para de carregar, mesmo com erro
      }
    }

    buscarVideo();
  }, [id]);

  if (carregando) {
    return <p>Carregando vídeo...</p>;
  }


if(!video){
    return <NaoEncontrada/>
}

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
    <section className={styles.container}>
     <iframe
      width="100%" 
      height="100%" 
      src={video.link}
      title={video.titulo} 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen></iframe>
      </section>
    </>
  );
}

export default Player;
