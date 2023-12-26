import React, { useRef, useState } from "react";
import songData from "../../services/songData";
import Playlist from "../../pages/Playlist";

function Home() {
  const [songState, setSongState] = useState({
    currentSong: [songData[0]],
    isPlaying: false,
    elapsed: 0,
    duration: 0,
  });
  const audioRef = useRef(null);

  return (
    <div>
      <Player
        uiState={uiState}
        setUiState={setUiState}
        audioRef={audioRef}
        songState={songState}
        setSongState={setSongState}
      />
      <Playlist
        uiState={uiState}
        setUiState={setUiState}
        songState={songState}
        setSongState={setSongState}
        songData={songData}
        audioRef={audioRef}
      />
      <audio
        ref={audioRef}
        src={songState.currentSong[0].audio}
        onTimeUpdate={songInfoHandler}
        onLoadedMetadata={songInfoHandler}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}
export default Home;
