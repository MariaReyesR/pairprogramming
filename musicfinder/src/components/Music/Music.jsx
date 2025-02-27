import React, { useState } from "react";
import axios from "axios";
import "./Music.scss";

const genres = {
  party: "pop",
  energy: "rock",
  study: "jazz",
  workout: "hiphop",
};

const Music = () => {
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRandomSong = async (genreId) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5001/api/search/?q=${genreId}`
      );
      const songs = response.data.data;
      console.log(songs);

      if (songs.length > 0) {
        setSong(songs[Math.floor(Math.random() * songs.length)]);
      }
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Mood</h1>
      <div className="button">
        {Object.keys(genres).map((genre) => (
          <button
            className="button__genre"
            key={genres[genre]}
            onClick={() => getRandomSong(genres[genre])}
          >
            {genre[0].toUpperCase() + genre.slice(1)}
          </button>
        ))}
      </div>
      {loading && <p>Loading Song</p>}
      {song && (
        <div className="music">
          <p className="music__artist"> {song.artist.name}</p>
          <h2 className="music__title">{song.title}</h2>
          <img
            className="music__cover"
            src={song.album.cover_medium}
            alt="Album Cover"
          />
          {song.preview && (
            <audio className="music__preview" controls src={song.preview} />
          )}
        </div>
      )}
    </div>
  );
};

export default Music;
