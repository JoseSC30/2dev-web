import Head from 'next/head';
import Layout from '../components/Layout';
import Chatbot from '../components/Chatbot';
import styles from '../styles/Products.module.css';

export default function Products() {
  return (
    <Layout>
      <Head>
        <title>Nuestros Productos | 2DEV</title>
      </Head>
      <main className={styles.container}>
        <h1 className={styles.title}>Nuestros Productos</h1>

        <section className={styles.productList}>
          <article className={styles.product}>
            <h2>Sistema de Gestión Empresarial</h2>
            <p>
              Solución integral para administrar ventas, inventarios y finanzas de tu negocio con eficiencia y facilidad.
            </p>
          </article>

          <article className={styles.product}>
            <h2>Aplicación Móvil Personalizada</h2>
            <p>
              Apps móviles para Android e iOS diseñadas a medida para mejorar la comunicación y productividad.
            </p>
          </article>

          <article className={styles.product}>
            <h2>Plataforma de E-commerce</h2>
            <p>
              Plataforma escalable y segura para vender online, con integración de pagos y gestión de clientes.
            </p>
          </article>

          <article className={styles.product}>
            <h2>Integración con APIs</h2>
            <p>
              Conectamos tu sistema con servicios externos para optimizar procesos y obtener información en tiempo real.
            </p>
          </article>
        </section>

        <Chatbot />
      </main>
    </Layout>
  );
}
