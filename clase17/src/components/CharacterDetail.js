import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../services/api";
import styles from "../styles/detail.module.css"

const CharacterDetail = () => {
  const [character, setCharacter] = useState({})
  const {id} = useParams(); //objeto

  useEffect( () => {
    getCharacterById(id).then( (response) => {
        setCharacter(response.data)
    })
  }, [id])

  return (
    <div className={styles.container}>
      <h2 className={styles.name}>{character.name}</h2>
      <h2 className={styles.species}>Especie: {character.species}</h2>
      <h3 className={styles.status}>Estado: {character.status}</h3>    
      <img className={styles.image} alt='imagen' src={character.image}></img>
    </div>
  )
}
export default CharacterDetail;