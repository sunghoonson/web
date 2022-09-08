import React, { Component } from 'react';
import PropTypes from 'prop-types';

function YoutubeVideo({videoId, videoName, videoLength, videoDescription,children,videoAuthor}){
    return (
        <div id={videoId}>
            <h3>저자 - {videoAuthor}</h3>
            <h1>{videoName} - {(parseInt(videoLength)/1000).toFixed(1)} MB</h1>
            <p>{videoDescription}</p>
                {children}
        </div>
    )
}

export default YoutubeVideo;


// props 유효성 검증 (옵션)
YoutubeVideo.propTypes = {
    videoId: PropTypes.string,
    videoName: PropTypes.string,
    videoLength: PropTypes.string,
    videoDescription: PropTypes.string,
    children: PropTypes.object
}
YoutubeVideo.defaultProps = {
    videoAuthor: "syleemomo"
}