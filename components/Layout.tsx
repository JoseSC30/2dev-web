import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header style={{ backgroundColor: '#1E2A38', padding: '20px 40px', color: '#fff' }}>
        <h1 style={{ margin: 0 }}>2DEV</h1>
        <nav style={{ marginTop: 10 }}>
          <Link href="/" style={{ marginRight: 20, color: '#fff' }}>Inicio</Link>
          <Link href="/about" style={{ marginRight: 20, color: '#fff' }}>Sobre Nosotros</Link>
          <Link href="/support" style={{ marginRight: 20, color: '#fff' }}>Soporte</Link>
          <Link href="/products" style={{ marginRight: 20, color: '#fff' }}>Productos</Link>
          <Link href="/contact" style={{ color: '#fff' }}>Contáctanos</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer style={{ backgroundColor: '#1E2A38', color: '#fff', textAlign: 'center', padding: 20 }}>
        © 2025 2DEV - Todos los derechos reservados
      </footer>
    </div>
  );
}
