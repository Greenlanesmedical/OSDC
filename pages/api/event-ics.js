// pages/api/event-ics.js
export default function handler(req, res) {
  const { title='OSDC Event', description='', location='Oxford Street, London', start, end } = req.query;
  if (!start || !end) {
    res.status(400).send('Missing start or end');
    return;
  }
  const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//OSDC//EN
BEGIN:VEVENT
UID:${Date.now()}@osdc
DTSTAMP:${new Date().toISOString().replace(/[-:]/g,'').split('.')[0]}Z
DTSTART:${start}
DTEND:${end}
SUMMARY:${title}
DESCRIPTION:${description}
LOCATION:${location}
END:VEVENT
END:VCALENDAR`;
  res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
  res.setHeader('Content-Disposition', `attachment; filename="${title.replace(/\s+/g,'_')}.ics"`);
  res.status(200).send(ics);
}
