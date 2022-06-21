import React from 'react';
import Video from './Video';

function VideoList(props) {
  return props.list.map(item => <Video url={item.url} date={item.date} key={item.url} />);
}

export default VideoList
