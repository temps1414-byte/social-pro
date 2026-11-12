
const platforms = [
  {
    name: "Instagram",
    icon: "📸",
    followers: "12,480",
    growth: "+8.4%",
    color: "bg-pink-500/15 text-pink-400",
  },
  {
    name: "TikTok",
    icon: "🎵",
    followers: "8,320",
    growth: "+12.6%",
    color: "bg-cyan-500/15 text-cyan-400",
  },
  {
    name: "YouTube",
    icon: "▶️",
    followers: "5,640",
    growth: "+6.2%",
    color: "bg-red-500/15 text-red-400",
  },
  {
    name: "Facebook",
    icon: "f",
    followers: "2,200",
    growth: "+4.8%",
    color: "bg-blue-500/15 text-blue-400",
  },
];

const stats = [
  { label: "Seguidores totales", value: "28,640", change: "+12.8%", icon: "👥" },
  { label: "Nuevos seguidores", value: "1,284", change: "+18.2%", icon: "📈" },
  { label: "Redes conectadas", value: "4", change: "Disponibles", icon: "🌐" },
  { label: "Interacciones", value: "8,492", change: "+9.5%", icon: "❤️" },
];

export default function Home() {
  const bars = [35, 52, 42, 68, 48, 78, 60, 88, 65, 95, 72, 85];

  return (
    <main className="min-h-screen bg-[#080c17] text-white md:flex">
      <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-[#0d1322] p-6 md:flex md:flex-col">
        <div className="mb-12 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 text-xl font-black">
            S
          </div>
          <div>
            <h1 className="text-xl font-black tracking-wide">SOCIAL PRO</h1>
            <p className="text-xs text-slate-500">GROW YOUR COMMUNITY</p>
          </div>
        </div>

        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">
          MENÚ PRINCIPAL
        </p>

        <nav className="space-y-2">
          {[
            ["▦", "Dashboard"],
            ["◎", "Mis redes"],
            ["↗", "Crecimiento"],
            ["▤", "Estadísticas"],
            ["⚙", "Configuración"],
          ].map(([icon, name], index) => (
            <div
              key={name}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm ${
                index === 0
                  ? "bg-violet-600 font-bold text-white"
                  : "text-slate-400 hover:bg-white/5"
              }`}
            >
              <span className="text-lg">{icon}</span>
              {name}
            </div>
          ))}
        </nav>

        <div className="mt-auto rounded-2xl border border-violet-500/20 bg-violet-500/10 p-4">
          <p className="font-bold">🚀 SOCIAL PRO</p>
          <p className="mt-2 text-xs text-slate-400">
            Tu crecimiento comienza aquí.
          </p>
        </div>
      </aside>

      <section className="min-w-0 flex-1">
        <header className="flex items-center justify-between border-b border-white/10 px-5 py-5 md:px-10">
          <div>
            <p className="text-sm text-slate-400">Bienvenido a</p>
            <h2 className="text-lg font-bold">Social Pro Dashboard</h2>
          </div>
          <div className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs font-bold text-violet-300">
            ● MODO DEMOSTRACIÓN
          </div>
        </header>

        <div className="mx-auto max-w-7xl p-5 md:p-10">
          <div className="mb-9">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-violet-400">
              TU CENTRO DE CRECIMIENTO
            </p>
            <h1 className="text-3xl font-black md:text-4xl">
              Haz crecer tu <span className="text-violet-400">comunidad.</span>
            </h1>
            <p className="mt-3 text-sm text-slate-400">
              Administra tus redes sociales desde un solo lugar.
            </p>
          </div>
<a
  href="/seguidores"
  className="mb-8 inline-block rounded-xl bg-violet-600 px-6 py-3 font-bold text-white transition hover:bg-violet-700"
>
  🚀 Solicitar seguidores (Demo)
</a>


          <div className="mb-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-[#111a2c] p-5"
              >
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-sm text-slate-400">{stat.label}</p>
                  <span className="text-xl">{stat.icon}</span>
                </div>
                <h3 className="text-3xl font-black">{stat.value}</h3>
                <p className="mt-2 text-xs font-bold text-emerald-400">
                  {stat.change}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-9 grid gap-6 xl:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#111a2c] p-6 xl:col-span-2">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">Crecimiento de audiencia</h3>
                  <p className="mt-1 text-xs text-slate-400">
                    Actividad de los últimos 12 períodos
                  </p>
                </div>
                <span className="rounded-lg bg-violet-500/10 px-3 py-2 text-xs text-violet-300">
                  Últimos meses
                </span>
              </div>

              <div className="flex h-48 items-end gap-2 border-b border-white/10 pb-2">
                {bars.map((bar, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-violet-700 to-fuchsia-400 opacity-90"
                    style={{ height: `${bar}%` }}
                  />
                ))}
              </div>
              <div className="mt-3 flex justify-between text-xs text-slate-500">
                <span>Período 1</span>
                <span>Período 6</span>
                <span>Período 12</span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111a2c] p-6">
              <h3 className="mb-2 text-lg font-bold">Tu objetivo</h3>
              <p className="text-sm text-slate-400">
                Construye una comunidad cada vez más grande.
              </p>
              <div className="my-7 flex h-32 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/30 to-fuchsia-600/10">
                <span className="text-6xl">🚀</span>
              </div>
              <p className="text-sm font-bold">Todas tus redes, un solo lugar.</p>
              <p className="mt-2 text-xs text-slate-400">
                Próximamente: herramientas de crecimiento.
              </p>
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">Tus redes sociales</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Gestiona tu presencia digital.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="rounded-2xl border border-white/10 bg-[#111a2c] p-5 transition hover:border-violet-500/50"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-3xl">{platform.icon}</span>
                    <span className={`rounded-lg px-2 py-1 text-xs font-bold ${platform.color}`}>
                      {platform.growth}
                    </span>
                  </div>
                  <h4 className="font-bold">{platform.name}</h4>
                  <p className="mt-2 text-2xl font-black">
                    {platform.followers}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">Seguidores de ejemplo</p>
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <span className="text-xs text-violet-300">
                      Conexión pendiente
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-10 text-center text-xs text-slate-600">
            SOCIAL PRO © 2026 · Todos tus canales, un solo lugar.
            Los datos mostrados son de demostración.
          </p>
        </div>
      </section>
    </main>
  );
}
