const validparameters = (req, res, next) => {
  const { data } = req.body
  if (!data.email || !data.password) {
    return res.status(400).json({ error: 'Faltan email o password' })
  }
  next()
}

export { validparameters }
