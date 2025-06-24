import Head from 'next/head';
import Layout from '../components/Layout';
import Chatbot from '../components/Chatbot';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Sobre Nosotros | 2DEV</title>
      </Head>
      <main className={styles.container}>
        <h1 className={styles.title}>Sobre Nosotros</h1>

        <section className={styles.mission}>
          <h2>Nuestra Misión</h2>
          <p>
            En 2DEV nos dedicamos a desarrollar soluciones de software innovadoras y personalizadas que impulsen el crecimiento y la transformación digital de nuestros clientes.
          </p>
        </section>

        <section className={styles.vision}>
          <h2>Nuestra Visión</h2>
          <p>
            Ser líderes en la industria tecnológica, reconocidos por la calidad, creatividad y compromiso en cada proyecto que emprendemos.
          </p>
        </section>

        <section className={styles.team}>
          <h2>Conocé a nuestro equipo</h2>
          <p>
            Contamos con un equipo multidisciplinario de desarrolladores, diseñadores y gestores de proyectos apasionados por la tecnología y la excelencia.
          </p>
          {/* Podrías agregar fotos o perfiles más adelante */}
        </section>

        <Chatbot />
      </main>
    </Layout>
  );
}
