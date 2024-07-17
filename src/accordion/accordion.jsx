import React, { useState } from "react";
import "./accordion.css";
import AccordionProps from "./accordionProps";

function Accordion() {
  const [active, setActive] = useState(
    "Quais culturas são comumente cultivadas na agricultura?"
  );

  return (
    <div className="accordion container">
      <h1 className="title">ReactJS Accordion</h1>

      <div className="secContainer grid">
        {/* accordion one placeholder */}
        <AccordionProps
          title="Quais culturas são comumente cultivadas 
                    na agricultura?"
          desc="Milho, trigo, arroz e soja são algumas 
                    das culturas mais comuns cultivadas na agricultura. Isso varia 
                    de acordo com diferentes locais e terrenos."
          active={active}
          setActive={setActive}
        />
        {/* accordion two placeholder */}
        <AccordionProps
          title="O que é agricultura sustentável"
          desc="A agricultura sustentável concentra-se em práticas que 
                protegem o meio ambiente, conservam recursos e mantêm a viabilidade
                a longo prazo para as gerações futuras."
          active={active}
          setActive={setActive}
        />
        {/* accordion three placeholder */}
        <AccordionProps
          title="Como os agricultores controlam pragas e doenças"
          desc="Os agricultores utilizam técnicas integradas de manejo de pragas,
            como rotação de culturas, predadores naturais e aplicação de 
            pesticidas quando necessário."
          active={active}
          setActive={setActive}
        />
        {/* accordion four placeholder */}
        <AccordionProps
          title="Como os agricultores irrigam seus campos"
          desc="
          Os agricultores utilizam métodos de irrigação, incluindo irrigação por 
          aspersão, sistemas de aspersão e irrigação por inundação, dependendo da
          cultura e das condições."
          active={active}
          setActive={setActive}
        />
      </div>
    </div>
  );
}

export default Accordion;
