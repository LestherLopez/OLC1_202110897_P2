import express from 'express';
import interpreterRoute from './routes/interprete';
const app = express();
app.use(express.json()); // middleware parse request body to json

const PORT = 5000;

//app.use('/interpreter', interpreterRoute);

/*
app.get('/ping', (req, res) => {
    console.log("agarro señal")
	res.send('El aa ');
});*/

app.use('/interprete', interpreterRoute)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}
);



//npm run tsc para pasar este archuivo a JS