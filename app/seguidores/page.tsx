
"use client";

import { useEffect, useState } from "react";

type Solicitud = {
  id: number;
  usuario: string;
  plataforma: string;
  cantidad: number;
  fecha: string;
};

export default function Seguidores() {
  const [usuario, setUsuario] = useState("");
  const [plataforma, setPlataforma] = useState("TikTok");
  const [cantidad, setCantidad] = useState("1000");
  const [historial, setHistorial] = useState<Solicitud[]>([]);
  const [cargado, setCargado] = useState(false);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    try {
      const guardado = localStorage.getItem("social-pro-solicitudes");
      if (guardado) {
        const datos = JSON.parse(guardado);
        if (Array.isArray(datos)) setHistorial(datos);
      }
    } catch {
      console.error("No se pudo cargar el historial");
    }
    setCargado(true);
  }, []);

  useEffect(() => {
    if (cargado) {
      localStorage.setItem(
        "social-pro-solicitudes",
        JSON.stringify(historial)
      );
    }
  }, [historial, cargado]);

  function crearSolicitud() {
    if (!usuario.trim()) {
      setMensaje("Escribe un nombre de usuario primero.");
      return;
    }

    const nueva: Solicitud = {
      id: Date.now(),
      usuario: usuario.trim(),
      plataforma,
      cantidad: Number(cantidad),
      fecha: new Date().toLocaleString("es-ES"),
    };

    setHistorial((anterior) => [nueva, ...anterior]);
    setMensaje("¡Solicitud de demostración guardada!");
    setUsuario("");
  }

  return (
    <main className="min-h-screen bg-[#080b16] px-6 py-12 text-white">
      <div className="mx-auto max-w-xl">
        <a href="/" className="text-sm text-purple-400">
          ← Volver al Dashboard
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          SOCIAL <span className="text-purple-500">PRO</span>
        </h1>

        <p className="mt-3 text-gray-400">
          Panel de solicitudes de seguidores
        </p>

        <div className="mt-8 rounded-2xl border border-gray-700 bg-[#131b2e] p-6">
          <div className="mb-6 rounded-lg bg-purple-900/40 p-3 text-center text-sm text-purple-200">
            MODO DEMOSTRACIÓN — No se envían seguidores reales
          </div>

          <label className="block text-sm">Red social</label>
          <select
            value={plataforma}
            onChange={(e) => setPlataforma(e.target.value)}
            className="mt-2 mb-5 w-full rounded-lg bg-gray-800 p-3"
          >
            <option>TikTok</option>
            <option>Instagram</option>
            <option>YouTube</option>
            <option>Facebook</option>
          </select>

          <label className="block text-sm">Nombre de usuario</label>
          <input
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="@tuusuario"
            className="mt-2 mb-5 w-full rounded-lg bg-gray-800 p-3"
          />

          <label className="block text-sm">
            Cantidad de seguidores
          </label>
          <select
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            className="mt-2 mb-6 w-full rounded-lg bg-gray-800 p-3"
          >
            <option value="100">100 seguidores</option>
            <option value="500">500 seguidores</option>
            <option value="1000">1,000 seguidores</option>
            <option value="5000">5,000 seguidores</option>
            <option value="10000">10,000 seguidores</option>
          </select>

          <button
            onClick={crearSolicitud}
            className="w-full rounded-xl bg-purple-600 p-4 font-bold hover:bg-purple-700"
          >
            🚀 Simular envío de seguidores
          </button>

          {mensaje && (
            <p className="mt-4 text-center text-sm text-green-400">
              {mensaje}
            </p>
          )}
        </div>

        <section className="mt-8 rounded-2xl border border-gray-700 bg-[#131b2e] p-6">
          <h2 className="text-xl font-bold">
            📋 Historial de solicitudes
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Solicitudes simuladas guardadas en este navegador.
          </p>

          {historial.length === 0 ? (
            <p className="mt-5 text-gray-400">
              Todavía no tienes solicitudes.
            </p>
          ) : (
            <div className="mt-5 space-y-3">
              {historial.map((solicitud) => (
                <div
                  key={solicitud.id}
                  className="rounded-xl bg-gray-800 p-4"
                >
                  <p className="font-bold text-purple-300">
                    {solicitud.plataforma} — {solicitud.usuario}
                  </p>
                  <p className="mt-1 text-sm">
                    {solicitud.cantidad.toLocaleString()} seguidores
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    {solicitud.fecha}
                  </p>
                  <p className="mt-2 text-xs text-yellow-300">
                    Demostración — Sin entrega real
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
