import React from 'react'
import { useCastPlayer } from 'react-cast-sender'

export const withCastPlayer = (Component) => {
  return (props) => {
    const {
      loadMedia,
      currentTime,
      duration,
      isPaused,
      isMediaLoaded,
      togglePlay,
      seek,
      isMuted,
      tracks,
      editTracks,
      thumbnail,
      title,
      setVolume,
      toggleMute
    } = useCastPlayer();

    return <Component
        loadMedia={ loadMedia }
        currentTime={ currentTime }
        duration={ duration }
        isPaused={ isPaused }
        isMediaLoaded={ isMediaLoaded }
        togglePlay={ togglePlay }
        seek={ seek }
        isMuted={ isMuted }
        tracks={ tracks }
        editTracks={ editTracks }
        thumbnail={ thumbnail }
        title={ title }
        setVolume={ setVolume }
        toggleMute={ toggleMute }
        { ...props } />
  }
}