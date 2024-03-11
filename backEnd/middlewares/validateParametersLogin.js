const validparameters = (req, res, next) => {
<<<<<<< HEAD
  const { data } = req.body
  if (!data.email || !data.password) {
    return res.status(400).json({ error: 'Faltan email o password' })
=======
  const { data } = req.body;
  if (!data.email || !data.password) {
    return res.status(400).json({ error: "Faltan email o password" });
>>>>>>> ed66172574c895116bcb3a10f635b776b947a0b7
  }
  next();
};

export { validparameters };
