import Videos from "../vimeo.json";
import playbackBtn from "../assets/playbtn.png";

function VideoTop() {
  return (
    <div className="row">
      {Videos.map((video) => (
        <div key={video.id} className="videotop">
          <div className="videotop-text">
            <h2>{video.title}</h2>
            <p dangerouslySetInnerHTML={{__html: video.description}}></p>
          </div>
          <div className="videotop-video">
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(238, 46, 29, 0.8), rgba(255, 177, 181, 0.8)), url(${video.thumbnail_large})`,
                width: "600px",
                height: "260px",
                backgroundRepeat: "no-repeat",
                position: "relative",
                marginLeft: "20px",
                marginTop: "40px"
              }}
            >
              <div className="img-container">
                <a href={video.url}>
                  <img
                    src={playbackBtn}
                    alt="playback"
                    className="img-playback"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoTop;
