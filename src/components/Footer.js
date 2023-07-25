import React from 'react'
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faAsterisk, faRotate, faTriangleExclamation, faCircleInfo, faCircleXmark, faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import { faCopyright  } from '@fortawesome/free-regular-svg-icons'


function Footer() {
  return (
    <footer>
        <div className="footer-lx">
            <span>
                <FontAwesomeIcon icon={faCodeBranch} /> master<FontAwesomeIcon icon={faAsterisk} size="2xs" />    
            </span>
            <span>
                <FontAwesomeIcon icon={faRotate} />
            </span>
            <span className='footer-info'>
                <span><FontAwesomeIcon icon={faCircleXmark} /> 0</span>
                <span><FontAwesomeIcon icon={faTriangleExclamation} /> 0</span>
                <span><FontAwesomeIcon icon={faCircleInfo} /> 0</span>
            </span>    
        </div>
        
        <div className="footer-rx">
            <span>
                Ln 15, Col 45
            </span>
            <span>
                Spaces: 4
            </span>
            <span>
                UTF-8
            </span>
            <span>
                JavaScript
            </span>
            <span>
                <FontAwesomeIcon icon={faCheckDouble} /> Prettier
            </span>
            <span>
            <FontAwesomeIcon icon={faCopyright} />  2023
            </span>
        </div>
    </footer>
  )
}

export default Footer