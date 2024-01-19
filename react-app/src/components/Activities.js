import React, { useEffect, useState } from "react";

const Activities = () => {
  const slides = [
    {
      title: "Observacion de ballenas",
      description: "Hay tres lugares para observar ballenas en Madagascar: en la isla de Sainte-Marie, Nosy Be Hell-Ville y en Ankasy. Este es un evento que no debe perderse.",
      image: "http://localhost:8080/static/Baleines-Sainte-Marie.jpg",
    },
    {
      title: "Buceo",
      description:
        "Nosy Boraha o isla Sainte Marie es una isla costera de Madagascar ubicada en su costa Este. Esta isla paradisíaca le ofrece una estancia en el mundo de su sueños. La isla de Sainte Marie es rica de sus numerosas especies florísticas, y concentra varias especies de lémures. La playa dispone de una gran variedad de costas, pero también encontrará en la isla el cementerio más famoso de piratas del océano Índico, la primera iglesia de Madagascar…",
      image: "http://localhost:8080/static/Diapo-accueil-7.jpg",
    },
    {
      title: "Visita de los parques",
      description:
        "Madagascar tiene Madagascar tiene 43 aires protegidos con 7 sitios clasificados patrimonio mundial, 3 reservas de biosfera, 7 especies endémicas de baobab, 101 especies y subespecies de lemures y un sinfín de costa maravillosa. aires protegidos con 7 sitios clasificados patrimonio mundial...",
      image: "http://localhost:8080/static/Diapo-accueil-9.jpg",
    },
    {
      title: "Cruceros",
      description: "Descubra Madagascar desde el océano, sus costas, sus islotes vírgenes, su excepcional fauna submarina y sus reservas de aves, todo más colorido que los demás. Disfrute de un cambio de escenario para descubrir las costumbres locales y admirar la naturaleza que lo rodea.", 
      image: "http://localhost:8080/static/Diapo-Nord-3.jpg",
    },
    {
      title: "Kyte Surf",
      description:
        "De norte a sur, las playas de Madagascar son favorables para actividades náuticas como el surf, el kyte surf.",
      image:
        "http://localhost:8080/static/Ankasy-10-o25ebhiab4vvl0qci9xg1xswkly7e98c1tm6lx7p2w.jpg",
    },
    {
      title: "Pesca deportiva",
      description:
        ">Madagascar es uno de los lugares esenciales de la pesca deportiva. Puede disfrutar de muchos lugares de pesca ubicados en su mayoría al noroeste de la isla. En bote o canoa, practique la pesca deportiva y haga su mejor captura de arpón.",
      image:
        "http://localhost:8080/static/pesca-deportiva-o1id5mqe7won41b7p0fbly1ufu32jqdkerayhlw2wo.jpg",
    },
    {
      title: "Campamento",
      description:
        "Descubre los mejores lugares de Madagascar en campamento. Póngase en contacto con la naturaleza y la población local en una aventura garantizada.",
      image:
        "http://localhost:8080/static/campamento-2-o1idwf4szxctzyed9lajo6orx61nx6q63cn4vi65ko.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };
  return (
    <div id="activities">
      <div className="activitycontainer">
        <h2>Quelques activités à pratiquer à Madagascar</h2>
        <div className="insideactivities">
          <div className="bouton01">
            <button onClick={() => prevSlide()}>
              <i className="fa fa-chevron-left"></i>
            </button>
          </div>
          <div className="persocarousel">
            <div className="slide">
              <div className="leftpart">
                <div>
                  <h3>{slides[currentSlide].title}</h3>
                  <p>{slides[currentSlide].description}</p>
                </div>
              </div>
              <div className="rightpart">
                <img src={slides[currentSlide].image} alt="" />
              </div>
            </div>
          </div>
          <div className="bouton02">
            <button onClick={() => nextSlide()}>
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
