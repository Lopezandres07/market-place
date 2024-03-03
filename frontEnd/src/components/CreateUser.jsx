/* const API_URL =  */

const createUser = async (firstName, lastName, email, password, avatarURL) => {
  console.log(firstName, lastName, email, password, avatarURL);

  const simulatedResponse = {
    success: true,
    message: "Usuario creado correctamente",
    user: { firstName, lastName, email, avatarURL },
  };

  return simulatedResponse;
  /* const response = await fetch('http://localhost:5000/users/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, email, password, avatarURL }),
  })
  const data = await response.json()
  return data */
};

export default createUser;
