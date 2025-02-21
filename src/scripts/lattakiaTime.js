const now = new Date();
const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Damascus', // close enough i guess
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
});
const lattakiaTime = formatter.format(now);

export default lattakiaTime;
