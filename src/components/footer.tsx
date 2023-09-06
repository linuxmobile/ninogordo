import Image from "next/image";
import logo from "@/assets/logo-ninogordo.png";
export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-end h-screen bg-ng-red w-full pt-8 pb-2 font-clash text-3xl">
      <div className="flex flex-col items-center justify-center gap-y-10 leading-none font-medium h-full">
        <p className="text-ng-foreground text-center max-w-[15rem]">
          Estamos en Thames 1810, Palermo, CABA.
        </p>
        <div className="grid grid-cols-2 items-start justify-center gap-x-4 max-w-xs">
          <p className="">Martes a Viernes de 20 a 00 hs.</p>
          <p className="">Sábado y Domingo de 13 a 17 hs y de 20 a 00 hs.</p>
        </div>
        <div className="text-center">
          <p className="">Reservá tu mesa</p>
          <p className="pb-6">2129-5028</p>
        </div>
      </div>
      <picture>
        <Image src={logo} alt="Logotype" className="w-20 aspect-auto" />
      </picture>
    </footer>
  );
}
