import React, { Component } from 'react';
import '../Styles/Home.css'

class Home extends Component{
    render(){
        return(
            <>
                <nav>
                    <h6 className="navBarTitle">Agéndalo</h6>
                </nav>
                <nav className="nav2">
                    <h6 className="navBarSubtitle"> Rusia </h6>
                </nav>

                <div className="heroGrid">
                    <div className="mensajeChild">
                        <img 
                        className="imagen"
                        src="https://wallpaperaccess.com/full/513597.jpg" alt="imagen"/>
                    </div>
                    <div className="cuadro1Child">
                        <p>
                            Moscú (en ruso, Москва́, Acerca de este sonido 
                            /mɐˈskva/ (?·i) transliterado como Moskvá) es 
                            la capital y la entidad federal más poblada de 
                            Rusia. La ciudad es un importante centro político, 
                            económico, cultural y científico de Rusia y del continente.
                            Moscú es la megaciudad más septentrional de la Tierra, 
                            la segunda ciudad de Europa en población después de Estambul,
                            3​4​5​ y la sexta del mundo. Su población es de 12 108 2576​ habitantes.
                            En virtud de su expansión territorial al suroeste del óblast de Moscú,
                            el 1 de julio de 2012 la capital aumentó su área en 2,5 veces,
                            desde unos 1000 km² hasta 2500 km², y ganó una población adicional 
                            de 230 000 habitantes.
                        </p>
                    </div>
                    <div className="cuadro2Child"></div>
                    <div className="cuadro3Child"></div>
                    <div className="cuadro4Child"></div>
                </div>
            </>
        )
    }
}

export default Home