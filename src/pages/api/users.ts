import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Marcelo'},
    { id: 2, name: 'Fabiana'},
    { id: 3, name: 'Oswaldo'},
  ]

  return response.json(users)
}

// Serverless
// Only maintain the server for a small window time, when he call comes.