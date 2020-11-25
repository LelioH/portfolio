import styles from '../assets/global.module.css'

import {faLinkedinIn} from  '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Home(){
  return(
    <body className={styles.mainContainer}>
      <div className={styles.navbar}>
        <ul>
          <li className={styles.navName}>helio.cv</li>
          <li><a href="#">Hi</a></li>
          <li><a href="#">About me</a></li>
          <li><a href="#">Experience</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Contact me</a></li>
          <li className={styles.navNumber}>+55 (22) 99807-1706</li>
        </ul>
      </div>
      <div className={styles.content}>
        <div className={styles.hi}>
          <h1>
            Hi, my name is Helio.<br/>
            I'm a <span className={styles.spanHi}>Computer Science stundent</span><br/>
            Looking for a job opportunity
          </h1>
          <div className={styles.quoteSocial}>
            <p>Keep on trying, that's what matters.<br/>
            <span>Arielle de Contti, 2017</span></p>
            <FontAwesomeIcon icon={faLinkedinIn}/>
          </div>
        </div>
        <div className={styles.aboutMe}>
          <h1>WIP About Me</h1>
        </div>
      </div>
    </body>
  )
}

export default Home