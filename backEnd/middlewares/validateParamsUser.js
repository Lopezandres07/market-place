const validateParametersUser = (req, res, next) => {
  const { data } = req.body
  if (
    !data.firstName ||
    !data.lastName ||
    !data.email ||
    !data.password ||
    !data.avatarURL
  ) {
    return res
      .status(400)
      .json({ error: 'los datos solicitados deben estar presentes' })
  }
  next()
}

export { validateParametersUser }
