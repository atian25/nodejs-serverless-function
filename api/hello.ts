import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const contentType = req.headers['content-type'];
  const username = req.query.username || 'there';

  if (contentType === 'text/plain') {
    res.setHeader('Content-Type', 'text/plain');
    return res.send(`Hi ${username}!`);
  } else {
    res.setHeader('Content-Type', 'application/json');
    return res.json({
      message: `Hi ${username}!`,
    });
  }
}
