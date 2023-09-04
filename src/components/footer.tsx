import Image from "next/image";
import logo from "@/assets/logo-ninogordo.png";
export default function Footer() {
  return (
    <footer className="flex items-end justify-end h-full">
      <picture>
        <Image src={logo} alt="Logotype" className="w-24 aspect-auto" />
      </picture>
    </footer>
  );
}
