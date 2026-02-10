export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ionic Post",
    url: "https://ionicpost.co",
    description: "Ionic Post is a modern post production house.",
    foundingDate: "2025",
    sameAs: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex min-h-svh items-center justify-center bg-white px-6">
        <div className="text-center">
          <h1 className="text-[clamp(3rem,10vw,7rem)] font-bold leading-[1.1] tracking-tight text-ionic-purple">
            ionicpost.co
          </h1>
          <p className="mt-4 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            coming soon.
          </p>
        </div>
      </main>
    </>
  );
}
