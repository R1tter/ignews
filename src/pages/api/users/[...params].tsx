import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query);

  const users = [
    { id: 1, name: 'Marcelo'},
    { id: 2, name: 'Fabiana'},
    { id: 3, name: 'Oswaldo'},
  ]

  return response.json(users)
}
