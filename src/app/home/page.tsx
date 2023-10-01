import styles from './home.module.scss'

const home = () => {
  return (
    <section className={styles.section}>  
    <div className={styles.container_hero}>
      <h1 className={styles.title}>Bienvenidos a mi Prueba técnica</h1>
      <h2 className={styles.subtitle}>Bienvenidos a mi Prueba técnica abroche sus cinturones, asegúrese de encontrarse de 
        preferencia en una silla reclinable
      </h2>
      <button>
        Get Started
      </button>
    </div>
    </section>
  
  )
}
export default home

