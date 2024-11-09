
"use client"

import { ReactTyped } from "react-typed";
import Dot from "./bg/dot";
import DotUp from "./bg/dotUp";
export default function HeroSection() {
    const dots = Array.from({ length: 32 });


return (
    <div className="w-full h-screen p-4 bg-green-300  overflow-hidden relative flex items-center justify-center ">
    
        <Dot className="h-screen md:h-auto md:w-screen aspect-square absolute left-0 top-0 rounded-full bg-slate-700 "/>
    
        {dots.map((_, index) => {
        const randomLeft = Math.floor(Math.random() * 90); // Genera una posizione random tra 0 e 90vw

        return (
          <DotUp
            key={index}
            className="absolute bottom-0 bg-slate-500"
            style={{ left: `${randomLeft}vw`, width: 20, height: 20}} // Usa una posizione randomica
            delay={index * 0.2}
          />
        );
      })}

    <div className="flex z-50 text-white text-3xl pt-9 pointer-events-none">
    <ReactTyped className="opacity-0 animate-fade-in transition-opacity duration-500"
   strings={[
    'Hallo World!'
            ]}
    typeSpeed={50}
  />
</div>

</div>


    
)
}