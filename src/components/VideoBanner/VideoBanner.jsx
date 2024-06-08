import { useEffect, useState } from 'react'
import './videobanner.css'

const VideoBanner = () => {

  const videos = [
    "https://www.apple.com/105/media/us/airpods/2022/dc1310af-8cb9-4218-8d40-26bbe6a1d307/anim/hero/large_2x.mp4",
    "https://www.apple.com/105/media/ww/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/large_2x.mp4",
    "https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/xlarge.mp4",
  ];

  const [videoActual, setVideoActual] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    setVideoActual(videos[randomIndex]);
  }, []);



  return (
    <div className="contenedor-publicidad">
        <div className="contenedor-video">
        {videoActual && (
          <video loop autoPlay className="video">
            <source src={videoActual} type="video/mp4" />
          </video>
        )}
        </div>
    </div>
  )
}

export default VideoBanner
