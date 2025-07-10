import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import styles from "./inicio.module.css";
import { useEffect, useState } from "react";

function Inicio() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/priscilaamorim/cinetag-api/videos"
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, []);

  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {/*Percorra (map) cada objeto da lista videos.
               Para cada video, crie um componente <Card />. Use o spread operator {...video} para passar todas as 
               propriedades do vídeo como props para o componente Card.
               Use o video.id como chave única (obrigatório em listas React).*/}
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
}

export default Inicio;
