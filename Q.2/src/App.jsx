import { useState, useEffect } from 'react';

function TrafficLight() {
  const [activeColor, setActiveColor] = useState('green'); 

  useEffect(() => {
    const sequence = [
      { color: 'yellow', delay: 3000 },
      { color: 'red', delay: 5000 },
      { color: 'yellow', delay: 5000 },
      { color: 'green', delay: 2000 },
    ];

    let index = 0;

    const changeLight = () => {
      setActiveColor(sequence[index].color);
      index = (index + 1) % sequence.length; 

      setTimeout(changeLight, sequence[index].delay);
    };

    changeLight();

    return () => {
      clearTimeout();
    };
  }, []); 
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
        margin: 0,
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '120px',
          height: '300px',
          backgroundColor: 'black',
          borderRadius: '60px',
          padding: '10px',
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: activeColor === 'green' ? 'green' : '#222',
            boxShadow: activeColor === 'green' ? '0 0 15px green' : 'none',
            transition: 'background-color 1s, box-shadow 1s ease',
          }}
        ></div>
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: activeColor === 'yellow' ? 'yellow' : '#222',
            boxShadow: activeColor === 'yellow' ? '0 0 15px yellow' : 'none',
            transition: 'background-color 1s, box-shadow 1s ease',
          }}
        ></div>
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: activeColor === 'red' ? 'red' : '#222',
            boxShadow: activeColor === 'red' ? '0 0 15px red' : 'none',
            transition: 'background-color 1s, box-shadow 1s ease',
          }}
        ></div>
      </div>

      {/* The pole of the traffic light */}
      
      <div
        style={{
          position: 'absolute',
          width: '20px',
          height: '200px',
          backgroundColor: '#333',
          top: 'calc(50vh - 250px)', 
          zIndex: 1,
        }}
      ></div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TrafficLight />
    </div>
  );
}

export default App;
