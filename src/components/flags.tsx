
import englishFlag from '../assets/english-flag.png';
import czechFlag from '../assets/czech-flag.png';

const Flags = () => {
      return (
            <div>
                  <button style={{backgroundColor: 'white' }}>
                        <img src={englishFlag} alt="English Flag" className="flag" style={{ width: '50px', height: '30px' }} />
                  </button>
                  <button style={{backgroundColor: 'white' }}>
                        <img src={czechFlag} alt="Czech Flag" className="flag" style={{ width: '50px', height: '30px' }} />
                  </button>
            </div>
      );
};

export default Flags;