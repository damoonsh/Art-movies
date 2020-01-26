import React, { useState, useEffect} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://orangevalleycaa.org/api/videos").then(
        response => response.json()
      )
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="header-tag">
        <header className="header">
          <h1>Art Videos</h1>
        </header>
      </div>
      <div className="main-div">
        {data.map(video => (
          <div key={video.id} className="secondary-div">
            <h2 className="video-name">{video.name}</h2>
            <p className="video-description">{video.description}</p>
            <video className="video-itself" controls src={video.video_url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
