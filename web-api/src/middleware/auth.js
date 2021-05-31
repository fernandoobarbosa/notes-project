import jwt from 'jsonwebtoken'
import authconfig from '../config/auth.json'

export default (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) { return res.status(401).send({ error: 'No token provided' }) }

  const parts = authHeader.split(' ')

  if (!parts.length === 2) { return res.status(401).send({ error: 'Token error' }) }

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme)) { return res.status(401).send({ error: 'Token malformatted' }) }
  jwt.verify(token, authconfig.secret, (err, decoded) => {
    if (err) return res.status(401).send({ error: 'Token invalid' })

    // se passou nas verificações e é valido
    // salva o id usado para criação do token para uso posterior
    req.id = decoded.id
    // console.log(req.id)
    return next()
  })
}
