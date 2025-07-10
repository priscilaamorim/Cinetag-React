import Card from "components/Card";
import styles from "./Favoritos.module.css";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import { useFavoritosContext } from "contextos/Favoritos";

function Favoritos() {
  const { favoritos } = useFavoritosContext();

  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
     <section className={styles.container}>
                {favoritos.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
    </>
  );
}

export default Favoritos;
