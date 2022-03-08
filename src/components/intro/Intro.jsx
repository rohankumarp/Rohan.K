import './intro.scss'
import Typical from 'react-typical'


export default function intro() {
  return (
    <div className='intro' id='intro'>

      <div className='wrap'>

        
        <div className='imgContainer'>
          <img src="assets/photo.jpg" alt="noImg"/>
        </div>
        


        <div className='down'>
          
            
          <h1 className='namecol'>Rohan <span>Kumar</span></h1>
            

          <div className='wrapper'>
            <h3 className='para'><span>Hi There!</span> I am a Prefinal-Year Computer Science student at SRM Institute of Science and Technology , KTR campus.I am a passionate Web Developer and have a good background in Machine learning , Data Analytics. I am interested in the fields of Automation and internet of things.<br/>
             

            </h3>

            <div className='buttons'>
              <a href="#contact">
                <button className="btn highlighted-btn buttonposi">
                  <span>Get in Touch</span>
                </button>
              </a>
              <a href="assets/Resume_rohan.pdf" download='resume-rohan.pdf'>
                <button className="btn highlighted-btn buttonposi moved">
                  <span>Resume here</span>
                </button>
              </a>

            </div>

          </div>

        

          {/* <div className="skills">
            <h1>Skills</h1>
            
            <image href="./assets/python.png"/>

          </div> */}
        </div>


      </div>
      
    </div>
  )
}
