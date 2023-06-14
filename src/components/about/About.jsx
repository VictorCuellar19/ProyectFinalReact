import "./About.css"

function about() {
  return (
    <div className="divAbout">
      <h1>About Us</h1>
      <p>Somos tres personas del mundo mundial y nos hemos comido mucho la cabeza para desarrollar esta poquita cosa de proyecto</p>
      <div className="divPhoto">
        <section>
        <img src="https://www.dibujos-faciles.com/wp-content/uploads/2022/12/Dibujo-De-Bart-Simpson-paso11.jpg" alt="Santiago" />
        <h3>Santiago</h3>
        </section>
        <section>
        <img src="https://i.discogs.com/bpwmmVm6loZkqwtuUTC8S0AYxmI3IiXQSjDnLUYvCNU/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTU4MTMz/Ny0xMzM1NzE4Mjcz/LnBuZw.jpeg" alt="Natalia" />
        <h3>Natalia</h3>
        </section>
        <section>
        <img src="https://vignette3.wikia.nocookie.net/lossimpson/images/6/64/Kearney_Zzyzwicz.png/revision/latest?cb=20150427044337&path-prefix=es" alt="Victor" />
        <h3>Victor</h3>
        </section>
        <section>
        <img src="https://static.simpsonswiki.com/images/thumb/f/f6/Stephen_Hawking_character.png/250px-Stephen_Hawking_character.png" alt="Chat GPT" />
        <h3>Chat GPT</h3>
        </section>
    </div>
    </div>
  )
}

export default about
