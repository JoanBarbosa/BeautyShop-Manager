export default function StatusPanel({ status, message, onRetry }) {
  const label = status === "online"
    ? "API conectada"
    : status === "checking"
      ? "Verificando"
      : "API no disponible";

  return (
    <section className={`status-panel status-${status}`} aria-live="polite">
      <div>
        <span className="status-label">{label}</span>
        <p>{message}</p>
      </div>
      <button type="button" onClick={onRetry} disabled={status === "checking"}>
        Volver a comprobar
      </button>
    </section>
  );
}
