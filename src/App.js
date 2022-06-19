import React, { useState } from 'react';

function prettyDate(Component) {
  return (props) => {
    const now = new Date().getTime();
    const seen = Date.parse(props.date);
    const diff = (now - seen) / 60000;
    let timeStamp = '';
    if (diff < 1) {
      timeStamp = 'Только что'
    }
    if (diff > 1 && diff < 60) {
      timeStamp = `${Math.trunc(diff)} минут назад`
    }

    if (diff >= 60 && diff < (60 * 24)) {
      timeStamp = `${Math.trunc(diff/60)} часов назад`
    }

    if (diff >= (60 * 24)) {
      timeStamp = `${Math.trunc(diff/60/24)} дней назад`
    }

    return <Component {...props} date={timeStamp} />;
  }
}

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

function Video(props) {
  const DateTimePretty = prettyDate(DateTime);
  return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" title={props.url} allowfullscreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}

function VideoList(props) {
  return props.list.map(item => <Video url={item.url} date={item.date} key={item.url}/>);
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-07-31 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}