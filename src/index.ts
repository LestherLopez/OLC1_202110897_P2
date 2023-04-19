import express from 'express';
import cors from 'cors';
import interpreterRoute from './routes/intepreter';
const app = express();

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
}
app.use(cors(options));
app.use(express.json()); // middleware parse request body to json

const PORT = 5000;

//app.use('/interpreter', interpreterRoute);

/*
app.get('/ping', (req, res) => {
    console.log("agarro señal")
	res.send('El aa ');
});*/

app.use('/interpreter', interpreterRoute)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}
);



//npm run tsc para pasar este archuivo a JS