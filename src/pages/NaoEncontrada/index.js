import styles from './NaoEncontrada.module.css';
import erro from './erro-404-robo.jpg'
 
function NaoEncontrada() {
    return(
<>
<section className={styles.container}>
   <img src={erro} alt='erro 404'className={styles.imagem}/>
</section>

</>
    )
}
 
export default NaoEncontrada;   

