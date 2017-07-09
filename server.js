const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.set('port', (process.env.PORT || 3001));

//TODO app.use(logger('dev'));
app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes')(app);
require('./server/routes/utils')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Default route....',
}));

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

module.exports = app;

