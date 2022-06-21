import React from 'react'
import prettyDate from './prettyDate'
import DateTime from './DateTime'

function Video(props) {
  const DateTimePretty = prettyDate(DateTime);
  return (
    <div className="video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" title={props.url} allowfullscreen></iframe>
      <DateTimePretty date={props.date} />
    </div>
  )
}


export default Video
