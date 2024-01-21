
import englishFlag from '../assets/english-flag.png';
import czechFlag from '../assets/czech-flag.png';

const Flags = () => {
      return (
            <div>
                  <button>
                        <img src={englishFlag} alt="English Flag" className="flag" style={{ width: '50px' }} />
                  </button>
                  <button>
                        <img src={czechFlag} alt="Czech Flag" className="flag" style={{ width: '50px' }} />
                  </button>
            </div>
      );
};

export default Flags;