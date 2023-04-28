import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSun, faMoon, faStar, faHeart, faSmile, faThumbsUp, faTrophy, faTree, faSnowflake, faBomb, faBell, faGlobe, faPaperPlane, faEnvelope, faUser, faCode, faSpinner } from '@fortawesome/free-solid-svg-icons';

function getFontAwesomeIcon(number, isNumbers) {
    if(isNumbers) return number
  switch(number) {
    case 1:
      return <FontAwesomeIcon icon={faCoffee} style={{ color: '#FCFCFC' }} />;
    case 2:
      return <FontAwesomeIcon icon={faSun} style={{ color: '#FCFCFC' }} />;
    case 3:
      return <FontAwesomeIcon icon={faMoon} style={{ color: '#FCFCFC' }} />;
    case 4:
      return <FontAwesomeIcon icon={faStar} style={{ color: '#FCFCFC' }} />;
    case 5:
      return <FontAwesomeIcon icon={faHeart} style={{ color: '#FCFCFC' }} />;
    case 6:
      return <FontAwesomeIcon icon={faSmile} style={{ color: '#FCFCFC' }} />;
    case 7:
      return <FontAwesomeIcon icon={faThumbsUp} style={{ color: '#FCFCFC' }} />;
    case 8:
      return <FontAwesomeIcon icon={faTrophy} style={{ color: '#FCFCFC' }} />;
    case 9:
      return <FontAwesomeIcon icon={faTree} style={{ color: '#FCFCFC' }} />;
    case 10:
      return <FontAwesomeIcon icon={faSnowflake} style={{ color: '#FCFCFC' }} />;
    case 11:
      return <FontAwesomeIcon icon={faBomb} style={{ color: '#FCFCFC' }} />;
    case 12:
      return <FontAwesomeIcon icon={faBell} style={{ color: '#FCFCFC' }} />;
    case 13:
      return <FontAwesomeIcon icon={faGlobe} style={{ color: '#FCFCFC' }} />;
    case 14:
      return <FontAwesomeIcon icon={faPaperPlane} style={{ color: '#FCFCFC' }} />;
    case 15:
      return <FontAwesomeIcon icon={faEnvelope} style={{ color: '#FCFCFC' }} />;
    case 16:
      return <FontAwesomeIcon icon={faUser} style={{ color: '#FCFCFC' }} />;
    case 17:
      return <FontAwesomeIcon icon={faCode} style={{ color: '#FCFCFC' }} />;
    case 18:
      return <FontAwesomeIcon icon={faSpinner} style={{ color: '#FCFCFC' }} />;
    default:
      return null;
  }
}

export default getFontAwesomeIcon
