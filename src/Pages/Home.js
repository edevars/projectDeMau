import React, { Component } from "react";
import "../Styles/Home.css";

class Home extends Component {
  render() {
    return (
      <>
        <nav>
          <h6 className="navBarTitle">Agéndalo</h6>
        </nav>
        <nav className="nav2">
          <h6 className="navBarSubtitle"> Rusia </h6>
        </nav>

        <div className="hero">
          <div className="mask"></div>
          <img
            className="imagen"
            src="https://wallpaperaccess.com/full/513597.jpg"
            alt="imagen"
          />
          <div className="heroTitleContainer">
            <h1 className="heroTitle">
              Moscú (en ruso, Москва́, Acerca de este sonido /mɐˈskva/ (?·i)
              transliterado como Moskvá) es la capital y la entidad federal más
              poblada de Rusia.{" "}
            </h1>
          </div>
        </div>
        {/* <div className="heroGrid">
                    <div className="mensajeChild">
                        <img 
                        className="imagen"
                        src="https://wallpaperaccess.com/full/513597.jpg" alt="imagen"/>
                    </div>
                    <div className="cuadro1Child">
                        <p>
                            
                        </p>
                    </div>
                    <div className="cuadro2Child"></div>
                    <div className="cuadro3Child"></div>
                </div> */}
      </>
    );
  }
}

export default Home;
