import Head from 'next/head';
import Layout from '../components/Layout';
import Chatbot from '../components/Chatbot';
import styles from '../styles/Contact.module.css';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Aquí podés integrar la lógica para enviar el formulario
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <Layout>
      <Head>
        <title>Contáctanos | 2DEV</title>
      </Head>
      <main className={styles.container}>
        <h1 className={styles.title}>Contáctanos</h1>

        <section className={styles.contactInfo}>
          <h2>Información de contacto</h2>
          <p>Estamos a tu disposición para cualquier consulta o proyecto.</p>
          <ul>
            <li>📞 Teléfono: <a href="tel:+59112345678">+591 123 456 78</a></li>
            <li>✉️ Email: <a href="mailto:contacto@2dev.com">contacto@2dev.com</a></li>
            <li>🏢 Dirección: Av. Siempre Viva 123, Santa Cruz, Bolivia</li>
          </ul>
        </section>

        <section className={styles.formSection}>
          <h2>Enviá tu mensaje</h2>
          {submitted && <p className={styles.success}>¡Gracias! Tu mensaje fue enviado.</p>}
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Enviar</button>
          </form>
        </section>

        <Chatbot />
      </main>
    </Layout>
  );
}
