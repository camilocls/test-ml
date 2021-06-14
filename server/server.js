const app = require("./index");
const API_PORT = process.env.API_PORT || 3001;

app.listen(process.env.API_PORT || 3001, (err) => {
  if (err) throw err;
  console.log(`Server running in http://127.0.0.1:${API_PORT} 😊`);
});
