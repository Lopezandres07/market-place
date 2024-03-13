Hi! 

To start and try this app, go to backEnd/src/API/V1/userModels.js on the const createUser, change role_id to 1 to create admin user, then, set it again to 2.
If you want to create the user with Google,  go to backEnd/src/API/V1/userModels.js on the const createGoogleUser, change role_id to 1 to create admin user, then, set it again to 2.

After that, and to start creating products, go to backEnd/src/API/V1/productsControllers.js, on the const createNewProduct, set the product.user_id matching with the Admin user_id.

After all, just the Admin user can create, modify products and just Users can be created with the view Register.jsx



¡Hola!

Para iniciar y probar esta aplicación, vaya a backEnd/src/API/V1/userModels.js en const createUser, cambie role_id a 1 para crear un usuario Admin y luego configúrelo nuevamente en 2.
Si desea crear el Admin con Google, vaya a backEnd/src/API/V1/userModels.js en const createGoogleUser, cambie role_id a 1 para crear un usuario Admin y luego configúrelo nuevamente en 2.

Después de eso, y para comenzar a crear productos, vaya a backEnd/src/API/V1/productsControllers.js, en la constante createNewProduct, configure product.user_id que coincida con Admin user_id.

Después de todo, solo el usuario Admin puede crear y modificar productos y solo se pueden crear Users con la vista Register.jsx.
