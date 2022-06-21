export default function prettyDate(Component) {
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
      timeStamp = `${Math.trunc(diff / 60)} часов назад`
    }

    if (diff >= (60 * 24)) {
      timeStamp = `${Math.trunc(diff / 60 / 24)} дней назад`
    }

    return <Component {...props} date={timeStamp} />;
  }
}
