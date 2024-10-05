import React from 'react'
import './ExoTypes.css'
const ExoTypes = () => {
    return (
        <div className='exo-types'>
            <h2>Exoplanet Types</h2>
            <main>
                <div className="content">
                    <div className="tiles">
                        <div className="tile"></div>
                        <div className="tile"></div>
                        <div className="tile"></div>
                        <div className="tile"></div>
                    </div>
                    <section className="section--one">
                    <article>
                        <div className="title-wrap">
                        <h2>Super-Earth</h2>
                        </div>
                        <hr/>
                        <div className="content-wrap">
                        <p>
                        These planets are typically rocky and more massive than Earth but lighter than Neptune. They might or might not have atmospheres.
                        </p>
                        </div>
                    </article>
                    <article>
                        <div className="title-wrap">
                        <h2>Neptune-Like</h2>
                        </div>
                        <hr/>
                        <div className="content-wrap">
                        <p>
                        These planets are similar in size to Neptune and Uranus, with hydrogen or helium-dominated atmospheres. "Mini-Neptunes" are smaller than Neptune but larger than Earth and are not found in our solar system.
                        </p>
                        </div>
                    </article>
                    <article>
                        <div className="title-wrap">
                        <h2>Gas Giants</h2>
                        </div>
                        <hr/>
                        <div className="content-wrap">
                        <p>
                        These planets are the size of Saturn or Jupiter or even larger. They include "hot Jupiters," which are scorching planets in close orbits around their stars.
                        </p>
                        </div>
                    </article>
                    <article>
                        <div className="title-wrap">
                        <h2>Terrestrial</h2>
                        </div>
                        <hr/>
                        <div className="content-wrap">
                        <p>
                        These are Earth-sized or smaller planets composed mostly of rock and metal. They might have oceans, atmospheres, or other signs of habitability.
                        </p>
                        </div>
                    </article>
                    </section>
                </div>
                <section className="section--two"></section>
                <section className="section--three"></section>
                <section className="section--four"></section>
                <section className="section--five centered">
                </section>
            </main>
        </div>
    )
}

export default ExoTypes