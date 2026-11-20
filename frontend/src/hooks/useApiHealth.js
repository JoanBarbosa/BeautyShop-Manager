import { useCallback, useEffect, useState } from "react";
import { checkApiHealth } from "../services/health.service";

export function useApiHealth() {
  const [status, setStatus] = useState("checking");
  const [message, setMessage] = useState("Comprobando conexión con la API...");

  const refresh = useCallback(async () => {
    setStatus("checking");
    setMessage("Comprobando conexión con la API...");

    try {
      const result = await checkApiHealth();
      setStatus(result.success ? "online" : "offline");
      setMessage(result.message || "Respuesta recibida");
    } catch {
      setStatus("offline");
      setMessage("No fue posible conectar con el backend.");
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { status, message, refresh };
}
