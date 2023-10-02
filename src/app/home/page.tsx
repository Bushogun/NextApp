import styles from './home.module.scss';

const Home = () => {
  return (
    <section className={styles['home-section']}>
      <div className={styles['hero-container']}>
        <h1 className={styles.title}>Bienvenidos a mi Prueba técnica</h1>
        <h2 className={styles.subtitle}>
          Bienvenidos a mi Prueba técnica abrochen sus cinturones, asegúrense de encontrarse de preferencia en una silla reclinable
        </h2>
        <button className={styles['home-button']}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Home;
