import { getPlaiceholder } from "plaiceholder"

export default async function handler(req, res) {
    const { base64 } = await getPlaiceholder(req.query.url);
    res.status(200).json({ base64 });
  }