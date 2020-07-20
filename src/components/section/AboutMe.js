import React from "react";

const AboutMe = () => {
  return (
    <section className="aboutMeContainer" id="about-me">
      <h1 className="aboutMeTitle">About me</h1>
      <div className="aboutMeBorder">
        <div className="aboutMeImg">
          <div className="crystals">
            <div className="crystal_01"></div>
            <div className="crystal_02"></div>
            <div className="crystal_03"></div>
          </div>
          {/* <img src={Photo} alt="" className="photo" /> */}
        </div>
        <div className="aboutMeTextContainer">
          <h5>Mercy Shyu</h5>
          <div className="aboutMeText">
            <h6>AAAAA</h6>
            <p>
              Soufflé I love chocolate I love icing jelly-o candy dessert ice
              cream. Danish gummies gummi bears caramels pie cotton candy.
              Dessert cake jelly brownie cupcake tiramisu. Chocolate cake icing
              cheesecake.
            </p>
            <h6>BBBBB</h6>
            <p>
              I love powder fruitcake I love pastry toffee cookie pie brownie.
              Sweet cheesecake bonbon lollipop tiramisu sweet marzipan dragée.
            </p>
            <h6>CCCCCC</h6>
            <p>
              Chupa chups candy halvah marshmallow sugar plum gummies oat cake.
              Liquorice wafer pie marshmallow tootsie roll sweet roll chocolate
              bar I love jujubes.
            </p>
            <h6>DDDD</h6>
            <p>
              Chupa chups candy halvah marshmallow sugar plum gummies oat cake.
              Liquorice wafer pie marshmallow tootsie roll sweet roll chocolate
              bar I love jujubes.
            </p>
            <div className="rrss">
              <i class="fab fa-twitter"></i>
              <i class="fab fa-linkedin-in"></i>
              <i class="fab fa-github-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
