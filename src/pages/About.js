import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div className="about">
      <Logo />
      <Navigation />
      <h1>À propos</h1> <br />
      <p>
        Ceci est un projet réaliser sous React JS, ce projet a pour but de
        récupérer des données d'une API. <br />
        Puis les lister sur la page par ordre de population, pays les plus
        peuplés au moins peuplés. <br />
        Nous avons aussi un système de barre d'affichage pour afficher le nombre
        de pays. <br />
        Et aussi un système de filtre par boutton radio, qui permet de filtrer
        les pays par leur continent. <br />
        <br />
        @Jith0r
      </p>
    </div>
  );
};

export default About;
