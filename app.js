const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const ports = process.env.PORT || 8000;

const routes = require('./routes/respond');

app.use(cors());
app.use(bodyParser.json());

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://nelaxsana:Neluxcy07@cluster0.xxm0soz.mongodb.net/sample1?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log('cloud connected'))
  .catch((err) => console.log(err, 'cloud not connected'));


app.use('/api/seller', routes);

app.listen(ports, () => {
  console.log(`successfully running at http://localhost:${ports}`);
})