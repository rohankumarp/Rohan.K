import './intro.scss'
import Typical from 'react-typical'


export default function intro() {
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src="assets/photo.jpg" alt="noImg"/>
        </div>
      </div>

      <div className='right'>
        <div className='wrapper'>

          <h2 className='firstcol'>Hi There! I am </h2>
          
          <h1 className='namecol'>Rohan Kumar</h1>
          
          <span className='changingtext'>
            <h3>
              {" "}
              <Typical
              loop={Infinity}
              steps={[
                "Student",1000,
                "Enthusiastic Developer 🔥",1000,
                "Machine Learning Enthusiast",1000,
                "FrontEnd Developer",1000,
                "Web developer",1000,
                "Basketballer",1000,
                
              ]}
              />
            </h3>
          </span>

          

          <a href="#portfolio">
            <img src="assets/down.png" />
          </a>

        </div>

        <a href="assets/Resume_rohan.pdf" download='resume-rohan.pdf'>
              <button className="btn highlighted-btn buttonposi">
                Resume here
              </button>
        </a>


      </div>
    </div>
  )
}
