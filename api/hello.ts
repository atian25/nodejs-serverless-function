import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { name = 'there' } = req.query
  const acceptHeader = req.headers['accept']
  
  if (acceptHeader?.includes('text/plain')) {
    res.setHeader('Content-Type', 'text/plain')
    return res.send(`Hi ${name}!`)
  } else {
    res.setHeader('Content-Type', 'application/json')
    return res.json({
      message: `Hi ${name}!`,
    })
  }
}
