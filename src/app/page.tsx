import Landing from "./components/Landing";

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
      <Landing />
    </>
  );
}
