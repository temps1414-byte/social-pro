
"use client";

import { useState } from "react";

export default function Promocionar() {
  const [usuario, setUsuario] = useState("");
  const [plataforma, setPlataforma] = useState("TikTok");
  const [perfil, setPerfil] = useState("");
  const [red, setRed] = useState("");

  function publicar() {
    const nombre = usuario.trim().replace(/^@/, "");

    if (!/^[a-zA-Z0-9._]{2,24}$/.test(nombre)) {
      alert("Escribe un usuario válido.");
      return;
    }

    setPerfil(nombre);
    setRed(plataforma);
  }

  const enlaces: Record<string, string> = {
    TikTok: "https://www.tiktok.com/@",
    Instagram: "https://www.instagram.com/",
  };

  return (
    <main className="min-h-screen bg-[#080b16] p-6 text-white">
      <div className="mx-auto max-w-xl">
        <a href="/" className="text-purple-400">
          ← Volver al Dashboard
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          SOCIAL <span className="text-purple-500">PRO</span>
        </h1>

        <p className="mt-3 text-gray-400">
          Promociona tu perfil y consigue visibilidad.
        </p>

        <div className="mt-8 rounded-2xl bg-[#131b2e] p-6">
          <h2 className="mb-5 text-xl font-bold">
            🚀 Promocionar mi perfil
          </h2>

          <label className="block mb-2">Red social</label>
          <select
            value={plataforma}
            onChange={(e) => setPlataforma(e.target.value)}
            className="mb-5 w-full rounded-lg bg-gray-800 p-3"
          >
            <option>TikTok</option>
            <option>Instagram</option>
          </select>

          <label className="block mb-2">
            Tu nombre de usuario
          </label>
          <input
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="@tuusuario"
            className="mb-5 w-full rounded-lg bg-gray-800 p-3"
          />

          <button
            onClick={publicar}
            className="w-full rounded-xl bg-purple-600 p-4 font-bold hover:bg-purple-700"
          >
            🚀 Crear promoción
          </button>
        </div>

        {perfil && (
          <div className="mt-6 rounded-2xl border border-purple-600 bg-[#131b2e] p-6">
            <h2 className="text-xl font-bold">
              ✨ Vista previa de tu promoción
            </h2>

            <p className="mt-4 text-lg">
              {red}: @{perfil}
            </p>

            <a
              href={enlaces[red] + encodeURIComponent(perfil)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block rounded-xl bg-purple-600 p-4 text-center font-bold"
            >
              Ver perfil y seguir
            </a>

            <p className="mt-4 text-sm text-gray-400">
              Esta promoción es una vista previa local.
              Todavía no se publica para otros usuarios.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
