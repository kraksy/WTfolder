
import englishFlag from '../assets/english-flag.png';
import czechFlag from '../assets/czech-flag.png';
import { useState } from 'react';

const Flags = () => {
      const [isEnglish, setIsEnglish] = useState(true);
      const [isCzech, setIsCzech] = useState(false);

      const handleEnglishClick = () => {
            setIsEnglish(true);
            setIsCzech(false);
      };

      const handleCzechClick = () => {
            setIsEnglish(false);
            setIsCzech(true);
      };

      return (
            <div>
                  <button
                        style={{ backgroundColor: isEnglish ? 'green' : 'white' }}
                        onClick={handleEnglishClick}
                  >
                        <img
                              src={englishFlag}
                              alt="English Flag"
                              className="flag"
                              style={{ width: '50px', height: '30px' }}
                        />
                  </button>
                  <button
                        style={{ backgroundColor: isCzech ? 'green' : 'white' }}
                        onClick={handleCzechClick}
                  >
                        <img
                              src={czechFlag}
                              alt="Czech Flag"
                              className="flag"
                              style={{ width: '50px', height: '30px' }}
                        />
                  </button>
            </div>
      );
};

export default Flags;
