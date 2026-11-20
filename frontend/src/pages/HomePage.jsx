import StatusPanel from "../components/StatusPanel";
import { useApiHealth } from "../hooks/useApiHealth";

export default function HomePage() {
  const { status, message, refresh } = useApiHealth();

  return (
    <div className="home-page">
      <p className="eyebrow">PLATAFORMA DE ADMINISTRACIÓN</p>
      <h1>Bienvenido a <span>BeautyShop Manager</span></h1>
      <p className="intro">
        La estructura inicial del sistema está lista para construir, por etapas,
        las herramientas de gestión de tu emprendimiento.
      </p>

      <StatusPanel status={status} message={message} onRetry={refresh} />

      <section className="next-section">
        <h2>Fundación del proyecto</h2>
        <p>
          En esta primera etapa se configura la aplicación web y la API.
          Los módulos de inventario, ventas, clientes, compras, proveedores
          y finanzas se desarrollarán en etapas posteriores.
        </p>
      </section>
    </div>
  );
}
