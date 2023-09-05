"use client";
import Image from "next/image";
import cook from "@/assets/cook.jpg";
import cook1 from "@/assets/cook1.jpg";
import cook3 from "@/assets/cook3.jpg";
import cook4 from "@/assets/cook4.jpg";
import cook5 from "@/assets/cook5.jpg";
import SectionTitle from "./sectionTitle";

const handleToggle = (e: React.MouseEvent<HTMLDivElement>) => {
  const id = e.currentTarget.id;
  const elements = document.querySelectorAll(".z-10");
  elements.forEach((element) => {
    if (element.id !== id) {
      element.classList.remove("z-10");
    }
  });
  const element = document.getElementById(id);
  element?.classList.toggle("z-10");
};

export default function Cook() {
  return (
    <section className="grid grid-rows-2 flex flex-col items-center justify-center w-full h-full">
      <div className="relative w-full h-[calc(90vh-10rem)]">
        <div
          onClick={handleToggle}
          className="h-64 max-h-68 p-2 bg-ng-foreground shadow-lg shadow-ng-dark/50 absolute top-0 left-0"
          id="cook"
        >
          <Image src={cook} alt="Cook" className="aspect-square w-40" />
          <p className="font-japan text-ng-blue text-3xl pt-1 ">寿司</p>
          <p className="font-clash text-ng-dark text-sm font-semibold">Sushi</p>
        </div>
        <div
          onClick={handleToggle}
          className="h-64 max-h-68 p-2 bg-ng-foreground shadow-lg shadow-ng-dark/50 absolute top-6 left-6"
          id="cook1"
        >
          <Image src={cook1} alt="Cook" className="aspect-square w-40" />
          <p className="font-japan text-ng-blue text-2xl pt-1 ">牛肉のタタキ</p>
          <p className="font-clash text-ng-dark text-sm font-semibold">
            Tataki de Bife
          </p>
        </div>
        <div
          onClick={handleToggle}
          className="h-64 max-h-68 p-2 bg-ng-foreground shadow-lg shadow-ng-dark/50 absolute top-12 left-12"
          id="cook3"
        >
          <Image src={cook3} alt="Cook" className="aspect-square w-40" />
          <p className="font-japan text-ng-blue text-3xl pt-1 ">勝山堂</p>
          <p className="font-clash text-ng-dark text-sm font-semibold">
            Katsusando
          </p>
        </div>
        <div
          onClick={handleToggle}
          className="h-64 max-h-68 p-2 bg-ng-foreground shadow-lg shadow-ng-dark/50 absolute top-18 left-18"
          id="cook4"
        >
          <Image src={cook4} alt="Cook" className="aspect-square w-40" />
          <p className="font-japan text-ng-blue text-3xl pt-1 ">カラアゲ</p>
          <p className="font-clash text-ng-dark text-sm font-semibold">
            Pollo frito
          </p>
        </div>
        <div
          onClick={handleToggle}
          className="h-64 max-h-68 p-2 bg-ng-foreground shadow-lg shadow-ng-dark/50 absolute top-24 left-24"
          id="cook5"
        >
          <Image src={cook5} alt="Cook" className="aspect-square w-40" />
          <p className="font-japan text-ng-blue text-3xl pt-1 ">炒飯</p>
          <p className="font-clash text-ng-dark text-sm font-semibold">
            Arroz Frito picante
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="py-10 h-full flex flex-col [&_p]:text-2xl [&_p]:font-semibold [&_p]:font-clash text-ng-foreground [&_p]:font-sans [&_p]:leading-none [&_p]:tracking-tight">
          <SectionTitle title="Cocina" japaneseTitle="料理" />
          <p className="py-6">
            En{" "}
            <span className="relative">
              <span className="absolute flex top-0 -left-1 rotate-1 bg-ng-red w-34 h-7 -z-1"></span>
              Niño Gordo
            </span>{" "}
            se conjugan platos de cocina coreana, china, vietnamita y thai, con
            un toque local. Fusionamos ingredientes de sabores milenarios con un
            toque argentino.
          </p>
          <p className="">
            Nuestras cartas rotan en periodos cortos, incluyendo nuevos platos
            para poder representar la riqueza de esta cocina.
          </p>
        </div>
      </div>
    </section>
  );
}
