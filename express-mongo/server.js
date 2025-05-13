import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;


app.listen(PORT, () => {
  console.log("Servidor escutando");
});

//Instalei
//1. npm install nodemon@3.0.1 - Ela serve para ficar atualizando o servidor.
//2. npm install express@4.18.1
//3. npm install mongodb@5.5
//4. npm install mongoose@7.3.4
//5. npm install dotenv
