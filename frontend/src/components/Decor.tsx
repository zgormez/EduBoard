import type { JSX } from "react";
import gorsel from "../assets/gorsel.png";

/** Soldaki illüstrasyon + alt “Privacy Policy” yazısı */
export default function Decor(): JSX.Element {
  return (
    <>
      <div className="hero-decor" aria-hidden="true">
        <img src={gorsel} alt="" />
      </div>
      <div className="privacy">Privacy Policy</div>
    </>
  );
}
