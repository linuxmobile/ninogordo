import SectionTitle from "./sectionTitle";
export default function SpotifyPlayer() {
  return (
    <div className="pb-12 flex flex-col items-center justify-center">
      <SectionTitle title="Spotify" japaneseTitle="プレイリスト" />
      <iframe
        className="rounded-2xl mt-6"
        src="https://open.spotify.com/embed/playlist/2UNWb18APe1uROQcPtMJqS?utm_source=generator"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
