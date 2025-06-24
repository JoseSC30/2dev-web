import { motion } from 'framer-motion';
import Head from 'next/head';
import Layout from '../components/Layout';
import Chatbot from '../components/Chatbot';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>2DEV - Desarrollo de Software</title>
      </Head>
      <motion.main
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <section className={styles.hero}>
          <h1 className={styles.title}>Bienvenido a 2DEV</h1>
          <p className={styles.subtitle}>
            Desarrollamos soluciones tecnológicas a medida para potenciar tu empresa.
          </p>
          <a href="/contact" className={styles.cta}>Solicitá una consulta</a>
        </section>

        <section className={styles.services}>
          <h2>Nuestros Servicios</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>Aplicaciones Web</h3>
              <p>Plataformas robustas, modernas y seguras para tu negocio.</p>
            </div>
            <div className={styles.card}>
              <h3>Sistemas a Medida</h3>
              <p>Automatizamos tus procesos con soluciones personalizadas.</p>
            </div>
            <div className={styles.card}>
              <h3>Integraciones</h3>
              <p>Conectamos tus sistemas con APIs, ERPs, CRMs y más.</p>
            </div>
          </div>
        </section>

        <section className={styles.extra}>
          <h2>¿Por qué elegirnos?</h2>
          <ul>
            <li>✔️ Atención personalizada y compromiso total</li>
            <li>✔️ Más de 5 años de experiencia en el rubro</li>
            <li>✔️ Metodologías ágiles y entregas frecuentes</li>
          </ul>
        </section>
      </motion.main>

      <Chatbot />
    </Layout>
  );
}
