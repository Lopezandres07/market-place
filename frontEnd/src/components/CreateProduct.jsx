/* const API_URL =  */

const createProduct = async (name, description, price, URLImage) => {
  console.log(name, description, price, URLImage)

  /*  try {
    const response = await fetch(`${API_URL}/productos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(name, description, price, URLImage),
    })

    const createdProduct = await response.json()
    console.log('Producto creado:', createdProduct)
    return createdProduct
  } catch (error) {
    console.error('Error al crear el producto:', error.message)
    throw error
  } */
}

export default createProduct
