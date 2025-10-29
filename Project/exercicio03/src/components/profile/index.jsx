import styles from "./styles.module.css"

export default function Profile({name, photo}){
    return(
        <>
    <div className={styles.container}>
        <img src={photo} alt="" />
        <h2 className={styles.description}>{name}</h2>
        <hr />
        <p className={styles.description}>Full-stack javascript developer</p>
        <hr />
        <p className={styles.description}>+551199889900</p>
        <hr />
        <p className={styles.description} >john.doe@email.com</p>
        <hr />
        <div className={styles.buttons}>
        <button className={styles.button}>Github</button>
        <button className={styles.button}>Linkedin</button>
        <button className={styles.button}>Twitter</button>
        </div>
        
    </div>    
    </>
    )
    
}