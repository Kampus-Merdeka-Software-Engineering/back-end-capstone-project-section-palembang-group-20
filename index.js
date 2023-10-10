import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/sequelize.js";
import userRoutes from "./routes/users.js";
import pengirimRoutes from "./routes/pengirim.js";
import { startSequelize } from "./utils/startSequelize.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

// Middleware untuk mengizinkan aplikasi menerima JSON
app.use(express.json());    
app.use(bodyParser.json());

// Gunakan rute pengguna
app.use('/new', userRoutes);
app.use('/', userRoutes);


app.use('/', pengirimRoutes);
app.use('/get_pengirim', pengirimRoutes);

startSequelize(sequelize);

// Post Server
const port = process.env.PORT || 3000;

sequelize.authenticate().then(() => {
    console.log("Database connection established!");
});

app.listen(port, () => {
    console.log('server is running at port ${port}');
});