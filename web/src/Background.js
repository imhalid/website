import "./Background.css";

/* 
background from www.jordangilroy.com
*/
function Background() {
  return (
    <div className="background-video">
      <video
        data-autoplay="yes"
        autoPlay="yes"
        webkit-playsinline=""
        playsInline="yes"
        loop="yes"
        muted="no"
        data-object-fit="cover"
      >
        <source
          src="https://www.jordangilroy.com/wp-content/uploads/2022/01/Closeup.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default Background;
