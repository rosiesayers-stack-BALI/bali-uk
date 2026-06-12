const KEYNOTES: { title: string; speaker: string; youtubeId: string }[] = [
  { title: "Regenerative Sustainability & The Eden Project", speaker: "Sir Tim Smit KBE — Co-founder, Eden Project", youtubeId: "giHR2gyoWOQ" },
  { title: "Biodiversity Net Gain & Climate Resilience", speaker: "Helen Nyul — Biodiversity Expert", youtubeId: "-0sYDvrTQzU" },
  { title: "Global Trends & Economic Forces Impacting Landscaping", speaker: "Trevor Williams — Economist", youtubeId: "vgsbAI_DshQ" },
];

const PHOTOS: { url: string; alt: string }[] = [
  { url: "/__l5e/assets-v1/70dd36b4-d96e-4ab6-977a-bf5f14295333/bali-conf-2025-011.jpg", alt: "Wayne Grills opening Conference 2025 at The Royal Society" },
  { url: "/__l5e/assets-v1/eb097a54-bf81-4052-8882-2b4985a08ebd/bali-conf-2025-034.jpg", alt: "Sir Tim Smit delivering his keynote on the Eden Project" },
  { url: "/__l5e/assets-v1/f7656b9d-c62f-45c8-9bb5-1738a303fa39/bali-conf-2025-039.jpg", alt: "Sir Tim Smit on stage at BALI Conference 2025" },
  { url: "/__l5e/assets-v1/a08d5344-d08f-46b0-88e2-0dc92481f5da/bali-conf-2025-050.jpg", alt: "Helen Nyul presenting on Biodiversity Net Gain" },
  { url: "/__l5e/assets-v1/2e3a8c3f-494c-4895-b70a-96f5c8e0f85a/bali-conf-2025-045.jpg", alt: "Helen Nyul at the podium" },
  { url: "/__l5e/assets-v1/4b4955c8-721f-4728-91ec-489a20b2c2e3/bali-conf-2025-027.jpg", alt: "Trevor Williams presenting on global economic trends" },
  { url: "/__l5e/assets-v1/b22a5f25-9ec0-4724-b7c0-de3d51c9560f/bali-conf-2025-003.jpg", alt: "Wayne Grills, BALI Chief Executive, addressing delegates" },
  { url: "/__l5e/assets-v1/28b30177-9694-4532-8fef-16352b16c9cd/bali-conf-2025-055.jpg", alt: "Plant health breakout panel in the Royal Society library" },
  { url: "/__l5e/assets-v1/6ce72585-5e2d-43b7-a691-e6aa39a69c87/bali-conf-2025-067.jpg", alt: "Breakout session panel discussion with delegates" },
  { url: "/__l5e/assets-v1/a5b435eb-7b68-42c0-a103-438c7ac63c7e/bali-conf-2025-074.jpg", alt: "Closing panel reflecting on insights from the breakouts" },
  { url: "/__l5e/assets-v1/3b48068a-0fbe-4745-b2c0-146d2070c286/P1011242.MOV.03_14_16_12.Still001.png", alt: "Delegates networking over coffee before the conference sessions" },
  { url: "/__l5e/assets-v1/f7e3bf75-03d3-488d-aa75-5e316f154730/P1011248.MOV.03_15_12_14.Still001.png", alt: "A conference partner representative speaking with attendees in the networking area" },
  { url: "/__l5e/assets-v1/c5bf13f6-afc3-4f68-a5ab-508c43267bb0/P1011257.MOV.03_16_06_14.Still001.png", alt: "Attendees gathering and talking during the conference break" },
  { url: "/__l5e/assets-v1/5370f3e9-0fa9-407a-a587-6eba66aa83c2/P1011290.MOV.03_20_34_19.Still001.png", alt: "Delegates seated and listening during a keynote session" },
  { url: "/__l5e/assets-v1/745f701b-4d45-4ad7-96d1-39a85d9d1a76/P1011314.MOV.03_30_35_05.Still001.png", alt: "A keynote speaker addressing the audience at the National Landscape Conference" },
  { url: "/__l5e/assets-v1/76938189-5e15-4305-8524-438626bc0291/P1011331.MOV.03_55_32_18.Still001.png", alt: "National Landscape Conference 2026 event branding displayed in the venue" },
];

export default function ConferenceHighlights() {
  return (
    <section id="2025-highlights" className="py-16 sm:py-20 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 max-w-3xl">
          <p className="uppercase tracking-widest text-xs font-semibold text-bali-blue mb-3">Highlights from Conference 2025</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Watch the 2025 keynotes
          </h2>
          <p className="text-gray-600">
            Held at The Royal Society in London under the theme <em>Climate Resilience: How to Future-Proof Your Business</em>. Catch up on all three headline keynotes below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {KEYNOTES.map((k) => (
            <article key={k.youtubeId} className="flex flex-col">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${k.youtubeId}`}
                  title={`${k.title} — ${k.speaker}`}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 leading-snug">{k.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{k.speaker}</p>
            </article>
          ))}
        </div>

        <div className="mb-6 flex items-end justify-between flex-wrap gap-3">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">In pictures</h3>
          <p className="text-sm text-gray-500">More photos coming soon.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] gap-3 sm:gap-4">
          {PHOTOS.map((p, i) => (
            <div
              key={p.url}
              className={`overflow-hidden rounded-xl group bg-gray-100 ring-1 ring-gray-200 ${
                i === 0 ? "md:col-span-2 md:row-span-2" : i === 3 ? "md:row-span-2" : i === 8 ? "md:col-span-2" : ""
              }`}
            >
              <img
                src={p.url}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
