export default function Hero() {
  return (
    <section className="relative">
      <div className="relative z-2 py-2 mix-blend-exclusion">
        <h1 className="font-sans font-black text-6xl uppercase">Niño Gordo</h1>
        <p className="font-japan text-5xl">こんにちは世界</p>
      </div>
      <div className="bg-ng-red w-48 h-48 aspect-square rounded-full absolute z-1 top-0 right-0"></div>
    </section>
  );
}
