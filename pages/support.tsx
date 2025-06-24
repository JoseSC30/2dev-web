import Head from 'next/head';
import Layout from '../components/Layout';
import Chatbot from '../components/Chatbot';
import styles from '../styles/Support.module.css';

export default function Support() {
  return (
    <Layout>
      <Head>
        <title>Soporte | 2DEV</title>
      </Head>
      <main className={styles.container}>
        <h1 className={styles.title}>Soporte Técnico</h1>

        <section className={styles.contact}>
          <h2>¿Necesitás ayuda?</h2>
          <p>
            Nuestro equipo de soporte está listo para asistirte en cualquier inconveniente o consulta relacionada con nuestros productos y servicios.
          </p>
          <p>
            Podés contactarnos por los siguientes medios:
          </p>
          <ul>
            <li>📞 Teléfono: <a href="tel:+59112345678">+591 123 456 78</a></li>
            <li>✉️ Email: <a href="mailto:soporte@2dev.com">soporte@2dev.com</a></li>
            <li>💬 Chatbot: Usá el chat abajo a la derecha para respuestas inmediatas.</li>
          </ul>
        </section>

        <section className={styles.faq}>
          <h2>Preguntas Frecuentes</h2>
          <details>
            <summary>¿Cómo solicitar soporte técnico?</summary>
            <p>Podés contactarnos vía teléfono, email o directamente a través del chatbot en la página.</p>
          </details>
          <details>
            <summary>¿Cuál es el horario de atención?</summary>
            <p>Atendemos de lunes a viernes de 9:00 a 18:00 hrs.</p>
          </details>
          <details>
            <summary>¿Ofrecen soporte remoto?</summary>
            <p>Sí, brindamos soporte remoto para diagnósticos y soluciones rápidas.</p>
          </details>
        </section>

        <Chatbot />
      </main>
    </Layout>
  );
}
