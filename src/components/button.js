import "../styles/button.css"
import  React from 'react'


const ScrollToTopButton = () => {
    const posts = [
        {
          title: 'The Future of Mars Colonization',
          content: 'With SpaceX planning more launches, the red planet is getting closer than ever. Terraforming, sustainable habitats, and radiation protection are top priorities.'
        },
        {
          title: 'Top 5 Discoveries from the James Webb Telescope',
          content: 'From spotting ancient galaxies to analyzing exoplanet atmospheres, JWST is changing the way we understand the universe.'
        },
        {
          title: 'Can We Mine Asteroids?',
          content: 'Asteroid mining could be the future of rare resources. Companies are exploring ways to extract metals like platinum and gold from near-Earth objects.'
        },
        {
          title: 'Why Saturn’s Moons Might Harbor Life',
          content: 'Moons like Enceladus and Titan have subsurface oceans and organic compounds, making them intriguing candidates in the search for extraterrestrial life.'
        },
        {
          title: 'How Astronauts Train for Zero Gravity',
          content: 'Neutral buoyancy labs, parabolic flights (a.k.a. vomit comets), and VR simulations help astronauts prepare for space missions.'
        },
        {
          title: 'Space Tourism: Are We There Yet?',
          content: 'Blue Origin and Virgin Galactic have made strides, but commercial space tourism is still a rich person’s dream... for now.'
        },
        {
          title: 'The Dark Side of the Moon Missions',
          content: 'New lunar missions aim to explore the far side of the moon, where communication and sunlight are major challenges.'
        },
        {
          title: 'Aliens and the Fermi Paradox',
          content: 'If the universe is so big, where is everybody? The Fermi Paradox raises the question about intelligent life and our lonely galaxy.'
        }
      ];

      const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
      }


    return(
        <div className="main-div">
            <div className="test-text">
            <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
                <h1 style={{ textAlign: 'center' }}>🚀 Space Exploration Blog</h1>
                {posts.map((post, index) => (
                    <section
                    key={index}
                    style={{
                        margin: '60px 0',
                        padding: '30px',
                        background: index % 2 === 0 ? '#eef' : '#fdfdfd',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                    >
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    </section>
                ))}
                </div>
            </div>
            <button className="scroll" onClick={scrollToTop}>
                Scroll To Top
            </button>
        </div>
    )
}

export default ScrollToTopButton