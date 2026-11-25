import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import LiveScene from "@/components/landing/LiveScene";
const bgUrl = "url(/background/home-background.png)";

const projects = [
  {
    name: "Rayaa360",
    badge: "private repo",
    desc: "Clinic and patient management platform in Arabic. Live site.",
    tags: "Next.js · React",
    img: "data:image/webp;base64,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",
    grad: "linear-gradient(135deg,#0f5a55,#1c9a8c)",
    link: "https://rayaa360.cloud",
  },
  {
    name: "Menu.Web API",
    desc: "Ordering REST API with JWT, Redis and Stripe.",
    tags: "ASP.NET Core · SQL Server",
    img: "data:image/webp;base64,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",
    grad: "linear-gradient(135deg,#2c2f6b,#5a55c0)",
    link: "https://github.com/MahmoudHosni2000/Menu.Web",
  },
  {
    name: "E.Commerce API",
    desc: "Catalog API with search, filters, sorting and paging.",
    tags: "ASP.NET Core · EF Core",
    img: "data:image/webp;base64,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",
    grad: "linear-gradient(135deg,#7a3a10,#c98a22)",
    link: "https://github.com/MahmoudHosni2000/E.Commerce",
  },
  {
    name: "Gym Management",
    desc: "Admin app for members, trainers, plans and sessions.",
    tags: "ASP.NET MVC · SQL Server",
    img: "data:image/webp;base64,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",
    grad: "linear-gradient(135deg,#6a1c45,#b83a7c)",
    link: "https://gymmanagementsystemmvc.runasp.net/",
    demo: { email: "MahmoudHosni0007@gmail.com", pass: "P@ssw0rd" },
  },
];

const chips = ["React", "Next.js", "TypeScript", "Tailwind", "C#", "ASP.NET Core", "SQL Server", "Three.js"];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mahmoudhosni2000/", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/MahmoudHosni2000", Icon: Github },
];

const line = "1px solid rgba(200,180,60,.45)";

function TopBar() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-3 w-full">
      <span className="text-[13px] lg:text-[15px] tracking-[3px] uppercase text-[#d8b93c] leading-tight">
        Mahmoud Hosny
      </span>
      <nav
        aria-label="Main"
        className="flex items-center justify-center lg:justify-start gap-1 rounded-full px-4 lg:px-3 py-2.5 lg:py-1.5 backdrop-blur-md bg-[rgba(10,14,16,.55)] self-stretch lg:self-auto"
        style={{ border: "1px solid rgba(216,185,60,.28)", boxShadow: "0 4px 24px rgba(0,0,0,.35)" }}
      >
        {navLinks.map((l) => (
          <Link key={l.label} href={l.href}
            className="px-2 lg:px-2.5 py-1.5 rounded-full text-[13px] lg:text-[14px] tracking-[.5px] text-[#e1e1e1] hover:text-[#f0d36a] hover:bg-[rgba(216,185,60,.12)] transition-colors">
            {l.label}
          </Link>
        ))}
        <span className="hidden lg:block w-px h-5 mx-1.5 bg-[rgba(216,185,60,.3)]" aria-hidden="true" />
        <div className="flex items-center gap-1">
        {socials.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="group relative w-8 h-8 rounded-full flex items-center justify-center text-[#e1e1e1] hover:text-[#f0d36a] hover:bg-[rgba(216,185,60,.12)] focus:text-[#f0d36a] transition-colors">
              <Icon className="w-[18px] h-[18px]" strokeWidth={1.6} />
              <span className="pointer-events-none absolute top-full mt-2 right-0 hidden group-hover:block group-focus:block px-2 py-1 rounded-md text-[12px] whitespace-nowrap text-[#e1e1e1] bg-[rgba(10,14,16,.92)] shadow-lg"
                style={{ border: "1px solid rgba(216,185,60,.3)" }}>
                {label}
              </span>
            </a>
          ))}
  </div>
      </nav>
    </div>
  );
}

function Info({ desktop, part }) {
  const head = part !== "body";
  const body = part !== "head";
  return (
    <div className={desktop ? "w-[440px]" : "w-full"}>
      {head && (<>
      <span className="inline-block text-[#d8b93c] text-[12.5px] tracking-[.4px] px-3 py-1.5 rounded-sm bg-[rgba(27,27,27,.55)]" style={{ border: line }}>
        Open to remote or relocation
      </span>
      <h1 className={`font-bold tracking-tight ${desktop ? "text-[50px] leading-[1.05] mt-5 mb-2.5" : "text-[34px] leading-[1.08] mt-4 mb-2"}`}>
        Hi, I&apos;m <span className="text-[#d8b93c]">Mahmoud Hosny</span>
      </h1>
      <div className={desktop ? "text-[17px] mb-4 whitespace-nowrap" : "text-[16px] mb-3"}>
        Full-Stack Developer · React/Next.js + ASP.NET Core
      </div>
      </>)}
      {body && (<>
      <p className={`text-[#a9aeb0] leading-[1.6] ${desktop ? "text-[15px] mb-[22px]" : "text-[14px] mb-[18px]"}`}>
        I build fast React and Next.js front ends and the ASP.NET Core APIs behind them. Cairo based, shipping real apps for real users, and looking for my next full-stack role.
      </p>
      <div className={`flex flex-wrap gap-2 ${desktop ? "mb-[26px]" : "mb-5"}`}>
        {chips.map((c) => (
          <b key={c} className="font-medium text-[12px] lg:text-[12.5px] px-2.5 py-[5px] rounded-sm bg-[rgba(27,27,27,.6)]" style={{ border: line }}>
            {c}
          </b>
        ))}
      </div>
      <div className="flex flex-wrap gap-2.5 lg:gap-3">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
          className="px-[18px] lg:px-[22px] py-[11px] lg:py-3 text-[14px] lg:text-[14.5px] rounded-sm text-[#f5e7a0] bg-[rgba(216,185,60,.18)]"
          style={{ border: "1px solid #d8b93c" }}>
          Download CV
        </a>
        {[...socials].reverse().map(({ label, href, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
            className="group relative w-[44px] h-[44px] lg:w-[46px] lg:h-[46px] rounded-sm flex items-center justify-center text-[#e1e1e1] bg-[rgba(27,27,27,.6)] hover:text-[#f0d36a] hover:bg-[rgba(216,185,60,.12)] focus:text-[#f0d36a] transition-colors"
            style={{ border: line }}>
            <Icon className="w-[20px] h-[20px]" strokeWidth={1.6} />
            <span className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block group-focus:block px-2 py-1 rounded-md text-[12px] whitespace-nowrap text-[#e1e1e1] bg-[rgba(10,14,16,.92)] shadow-lg"
              style={{ border: "1px solid rgba(216,185,60,.3)" }}>
              {label}
            </span>
          </a>
        ))}
      </div>
      </>)}
    </div>
  );
}

function Projects({ desktop }) {
  return (
    <div className={desktop ? "w-[372px]" : "w-full"}>
      <h2 className="text-[13px] tracking-[2px] uppercase text-[#d8b93c] mb-3 font-semibold">Featured projects</h2>
      {projects.map((p) => (
        <a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer"
          className="flex gap-3.5 p-3 mb-3 rounded-sm bg-[rgba(20,24,26,.72)] backdrop-blur-[3px] hover:bg-[rgba(20,24,26,.9)] transition-colors"
          style={{ border: line }}>
          {p.img ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.img} alt={`${p.name} preview`} width={92} height={64} loading="lazy"
              className="w-[92px] h-16 flex-none rounded-sm object-cover object-top" style={{ border: line }} />
          ) : (
            <div className="w-[92px] h-16 flex-none rounded-sm" style={{ background: p.grad, border: line }} />
          )}
          <div>
            <h3 className="text-[15px] mb-0.5">
              {p.name}
              {p.badge && (
                <span className="text-[10px] px-1.5 py-[1px] ml-1.5 text-[#a9aeb0] font-normal" style={{ border: line }}>
                  {p.badge}
                </span>
              )}
            </h3>
            <p className="text-[12px] text-[#a9aeb0] leading-[1.4]">{p.desc}</p>
            <em className="not-italic text-[11px] text-[#d8b93c] block mt-[5px]">{p.tags}</em>
            {p.demo && (
              <div className="mt-2 px-2 py-1.5 rounded-sm text-[11px] leading-[1.5] text-[#e1e1e1] bg-[rgba(216,185,60,.08)]" style={{ border: "1px dashed rgba(216,185,60,.45)" }}>
                <span className="text-[#d8b93c] tracking-[1px] uppercase text-[10px] block">Demo login · try it live</span>
                <span className="text-[#a9aeb0]">Email: </span><span className="break-all select-all">{p.demo.email}</span>
                <br />
                <span className="text-[#a9aeb0]">Password: </span><span className="select-all">{p.demo.pass}</span>
              </div>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}

function Cta({ desktop }) {
  return (
    <div className={`text-center text-[12px] lg:text-[13px] text-[#a9aeb0] tracking-[1px] ${desktop ? "" : "mt-2 pb-2"}`}>
      THE WIZARD STAYS. CLICK HIM OR THE ICONS TO EXPLORE THE FULL 3D WORLD
      <br />
      <Link href="/wizard"
        className="inline-block mt-1.5 px-[18px] py-2 rounded-sm bg-[rgba(27,27,27,.6)] text-[#e1e1e1]"
        style={{ border: line }}>
        Enter the 3D experience →
      </Link>
    </div>
  );
}


const DESK_CSS = `
.desk{--z:1;zoom:var(--z);height:calc(100dvh / var(--z))}
@media (max-height:699px){.desk{--z:.9}}
@media (max-height:639px){.desk{--z:.82}}
@media (max-height:579px){.desk{--z:.74}}
@media (max-height:519px){.desk{--z:.66}}
`;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1b1b1b] text-[#e1e1e1]">
      {/* Mobile: wizard scene banner, then stacked info layer */}
      <div className="lg:hidden relative flex flex-col min-h-screen">
        <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -inset-10" style={{ backgroundImage: bgUrl, backgroundSize: "cover", backgroundPosition: "30% 80%", filter: "blur(22px) saturate(.8)", opacity: 0.4, transform: "scale(1.5)" }} />
          <div className="absolute inset-0" style={{ background: "rgba(8,12,14,.7)" }} />
          <style>{`
.amb-mist{position:absolute;left:-30%;width:160%;height:45%;border-radius:50%;filter:blur(40px);will-change:transform;opacity:.0}
.amb-mist.a{bottom:-8%;background:radial-gradient(ellipse at center,rgba(120,170,160,.16),transparent 65%);animation:ambMistA 38s ease-in-out infinite alternate;opacity:1}
.amb-mist.b{top:40%;background:radial-gradient(ellipse at center,rgba(216,185,60,.07),transparent 65%);animation:ambMistB 52s ease-in-out infinite alternate;opacity:1}
@keyframes ambMistA{from{transform:translate3d(-6%,0,0)}to{transform:translate3d(8%,-4%,0)}}
@keyframes ambMistB{from{transform:translate3d(7%,0,0)}to{transform:translate3d(-7%,5%,0)}}
.amb-fly{position:absolute;width:3px;height:3px;border-radius:50%;background:#f0d36a;box-shadow:0 0 8px 2px rgba(240,211,106,.55);opacity:0;will-change:transform,opacity;animation:ambFly 10s ease-in-out infinite}
@keyframes ambFly{0%{opacity:0;transform:translate3d(0,0,0)}20%{opacity:.95}50%{opacity:.4;transform:translate3d(14px,-26px,0)}80%{opacity:.85}100%{opacity:0;transform:translate3d(-10px,-52px,0)}}
@media (prefers-reduced-motion:reduce){.amb-mist,.amb-fly{animation:none}.amb-fly{opacity:.3}}
`}</style>
          <div className="amb-mist a" />
          <div className="amb-mist b" />
          <i className="amb-fly" style={{ left: "44%", top: "27%", width: 2, height: 2, animationDelay: "-6s", animationDuration: "8s" }} /><i className="amb-fly" style={{ left: "71%", top: "20%", width: 3, height: 3, animationDelay: "-5s", animationDuration: "8s" }} /><i className="amb-fly" style={{ left: "7%", top: "19%", width: 2, height: 2, animationDelay: "-6s", animationDuration: "14s" }} /><i className="amb-fly" style={{ left: "33%", top: "19%", width: 2, height: 2, animationDelay: "-8s", animationDuration: "14s" }} /><i className="amb-fly" style={{ left: "75%", top: "23%", width: 4, height: 4, animationDelay: "-3s", animationDuration: "8s" }} /><i className="amb-fly" style={{ left: "9%", top: "36%", width: 3, height: 3, animationDelay: "-0s", animationDuration: "10s" }} /><i className="amb-fly" style={{ left: "56%", top: "26%", width: 3, height: 3, animationDelay: "-8s", animationDuration: "9s" }} /><i className="amb-fly" style={{ left: "74%", top: "95%", width: 3, height: 3, animationDelay: "-2s", animationDuration: "9s" }} /><i className="amb-fly" style={{ left: "50%", top: "20%", width: 2, height: 2, animationDelay: "-8s", animationDuration: "9s" }} /><i className="amb-fly" style={{ left: "82%", top: "34%", width: 3, height: 3, animationDelay: "-7s", animationDuration: "14s" }} /><i className="amb-fly" style={{ left: "62%", top: "82%", width: 3, height: 3, animationDelay: "-14s", animationDuration: "15s" }} /><i className="amb-fly" style={{ left: "41%", top: "39%", width: 3, height: 3, animationDelay: "-12s", animationDuration: "10s" }} /><i className="amb-fly" style={{ left: "13%", top: "81%", width: 3, height: 3, animationDelay: "-4s", animationDuration: "15s" }} /><i className="amb-fly" style={{ left: "96%", top: "65%", width: 2, height: 2, animationDelay: "-4s", animationDuration: "9s" }} /><i className="amb-fly" style={{ left: "68%", top: "61%", width: 3, height: 3, animationDelay: "-2s", animationDuration: "13s" }} /><i className="amb-fly" style={{ left: "65%", top: "61%", width: 3, height: 3, animationDelay: "-0s", animationDuration: "9s" }} /><i className="amb-fly" style={{ left: "46%", top: "96%", width: 4, height: 4, animationDelay: "-5s", animationDuration: "15s" }} /><i className="amb-fly" style={{ left: "11%", top: "19%", width: 2, height: 2, animationDelay: "-4s", animationDuration: "15s" }} /><i className="amb-fly" style={{ left: "10%", top: "97%", width: 3, height: 3, animationDelay: "-4s", animationDuration: "15s" }} /><i className="amb-fly" style={{ left: "94%", top: "57%", width: 2, height: 2, animationDelay: "-14s", animationDuration: "13s" }} /><i className="amb-fly" style={{ left: "62%", top: "53%", width: 4, height: 4, animationDelay: "-2s", animationDuration: "9s" }} /><i className="amb-fly" style={{ left: "10%", top: "35%", width: 3, height: 3, animationDelay: "-12s", animationDuration: "12s" }} /><i className="amb-fly" style={{ left: "34%", top: "58%", width: 2, height: 2, animationDelay: "-6s", animationDuration: "15s" }} /><i className="amb-fly" style={{ left: "24%", top: "65%", width: 3, height: 3, animationDelay: "-6s", animationDuration: "12s" }} /><i className="amb-fly" style={{ left: "58%", top: "78%", width: 3, height: 3, animationDelay: "-4s", animationDuration: "14s" }} /><i className="amb-fly" style={{ left: "90%", top: "56%", width: 2, height: 2, animationDelay: "-3s", animationDuration: "10s" }} /><i className="amb-fly" style={{ left: "25%", top: "27%", width: 2, height: 2, animationDelay: "-3s", animationDuration: "11s" }} /><i className="amb-fly" style={{ left: "65%", top: "83%", width: 3, height: 3, animationDelay: "-2s", animationDuration: "12s" }} /><i className="amb-fly" style={{ left: "3%", top: "26%", width: 3, height: 3, animationDelay: "-6s", animationDuration: "13s" }} /><i className="amb-fly" style={{ left: "19%", top: "96%", width: 4, height: 4, animationDelay: "-13s", animationDuration: "8s" }} />
        </div>
        <div className="relative z-10 px-[20px] pt-[26px]">
          <TopBar />
          <div className="mt-4"><Info part="head" /></div>
        </div>
        <div
          className="relative z-10 w-full overflow-hidden -mt-2"
          style={{ height: "clamp(430px, 56svh, 520px)", backgroundImage: bgUrl, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundColor: "#1b1b1b", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 14%, #000 74%, transparent 100%)", maskImage: "linear-gradient(to bottom, transparent 0%, #000 14%, #000 74%, transparent 100%)" }}
        >
          <LiveScene modelScale={1.2} />
        </div>
        <div className="flex flex-col gap-6 px-[18px] pt-0 pb-8 -mt-6 relative z-10">
          <Info part="body" />
          <Projects />
          <Cta />
        </div>
      </div>

      {/* Desktop: original forest scene full-viewport (like /wizard), layout on top */}
      <div className="hidden lg:block relative overflow-hidden bg-[#1b1b1b]" style={{ height: "100vh" }}>
        <style>{DESK_CSS}</style>
        <div
          className="absolute inset-0"
          style={{ backgroundImage: bgUrl, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.8 }}
        />
        <LiveScene />
        <div className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,12,14,.78) 0%, rgba(8,12,14,.55) 28%, rgba(8,12,14,0) 44%, rgba(8,12,14,0) 62%, rgba(8,12,14,.6) 100%)",
          }} />
        <div className="desk relative z-10 mx-auto w-[1280px] max-w-full">
          <div className="absolute left-14 right-14 top-[34px]">
            <TopBar />
          </div>
          <div className="absolute left-14 top-[130px]">
            <Info desktop />
          </div>
          <div className="absolute right-14 top-[110px]">
            <Projects desktop />
          </div>
          <div className="absolute left-0 right-0 bottom-[26px]">
            <Cta desktop />
          </div>
        </div>
      </div>
    </main>
  );
}
