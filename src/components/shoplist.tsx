import React from 'react';

interface ShopListProps {
      name: string;
}

<<<<<<< HEAD
export const ShopList: React.FC<ShopListProps> = ({ name}) => {
=======
export const ShopList: React.FC<ShopListProps> = ({ name, quantity }) => {
      const [productCount] = useState(quantity);
      const [isDone, setIsDone] = useState(false);

      const handleDoneClick = () => {
            setIsDone(true);
      };
      const handleRemoveClick = () => {
            setIsDone(true);
      };

>>>>>>> eacce0f47eb7c1347eef94953b14e82864e41f40
      return (
            <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                  <p style={{ width: '50%', border: '1px solid gray' }}>{name}</p>
                  <p>ks</p>
                  <button
                        style={{
                              backgroundColor: isDone ? 'gray' : 'green',
                              fontSize: '12px',
                              height: '40px',
                              width: '170px',
                        }}
                        onClick={handleDoneClick}
                        disabled={isDone}
                  >
                        {isDone ? 'Done' : 'Mark as Done'}
                  </button>
                  <button
                        style={{ backgroundColor: 'red', fontSize: '12px', height: '40px', width: '170px' }}
                        onClick={handleRemoveClick}
                  >
                        remove
                  </button>
            </div>
      );
<<<<<<< HEAD
}
=======
};
>>>>>>> eacce0f47eb7c1347eef94953b14e82864e41f40
