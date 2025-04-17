
export default async function handler(req, res) {
  const { query } = req;
  const url = query.url;

  if (!url) {
    return res.status(400).json({ error: 'Missing URL parameter' });
  }

  try {
    const response = await fetch(url);
    const data = await response.text();
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: 'Errore nel recupero dati', details: error.message });
  }
}
