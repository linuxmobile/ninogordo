import SectionTitle from "./sectionTitle";

export default function About() {
  return (
    <section className="py-18 flex flex-col items-center justify-center gap-y-4 [&_p]:text-2xl [&_p]:font-semibold [&_p]:font-clash text-ng-foreground [&_p]:font-sans [&_p]:leading-none [&_p]:tracking-tight relative">
      <SectionTitle title="Niño Gordo" japaneseTitle="太った子供" />
      <p className="pt-5">
        <span className="relative">
          <span className="absolute flex top-0 -left-1 rotate-2 bg-ng-red w-34 h-7 -z-1"></span>
          Niño Gordo
        </span>{" "}
        es una parrilla asiática que propone un mix de sabores de Oriente unidos
        a la comida porteña. Ofrecemos una experiencia gastronómica única, en un
        ambiente que combina intimidad y misterio con el espíritu lúdico de la
        cultura pop.
      </p>
      <p>
        Es un restaurante que se podría visitar en cualquier región de Asia,
        pero que por casualidad y por una cuestión de gusto y de sabores, nació
        en Palermo.
      </p>
    </section>
  );
}
