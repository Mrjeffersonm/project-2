const express = require('express');
const routes = require('./routes');
const session = require('express-session');
const sequelize = require('./config/connection');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(session({
  secret: 'ahjgryuihlzn',
  resave: false,
  saveUninitialized: false,
  
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

// sync sequelize models to the database, then turn on the server
const sync = async () => {
  await sequelize.sync();
};
sync();
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
