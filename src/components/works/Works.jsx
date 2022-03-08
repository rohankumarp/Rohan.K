import "./works.scss"

export default function works() {
  return (
    <div className='works' id='works'>
      <p>Projects</p>

      <div className="container">

        <div className="item">
          <img src="./assets/project.jpg"/>
          <a href="https://github.com/rohankumarp/Raddiwala"> Raddiwala</a>
        </div>

        <div className="item">
          <img src="./assets/project2.png"/>
          <a href="https://github.com/rohankumarp/DataX-Project-Optimum-Store">Optimum Store</a>
        </div>

        <div className="item">
          <img src="./assets/project3.png"/>
          <a href="https://github.com/rohankumarp/Master-Volume-control-using-hand-Detection-Module">Volume Control</a>
        </div>

        <div className="item">
          <img src="./assets/project4.jpg"/>
          <a href="https://github.com/rohankumarp/WeatherForecast-Heroku-deploy">Weather Forecast</a>
        </div>

        <div className="item">
          <img src="./assets/project5.png"/>
          <a href="https://github.com/rohankumarp/Final-Project-technocolab-Notes-App">Notes App</a>
        </div>

        <div className="item">
          <img src="./assets/project6.jpg"/>
          <a href="https://github.com/rohankumarp/Water-Indicator-Arduino">Water Level Indicator</a>
        </div>
        

      </div>
      
    </div>
  )
}
