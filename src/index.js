const express = require('express');
const router = require('./router');

// CSS
import './css/styles.css';



// App setup
const app = express();



// Router setup
router(app); 



// EJS setup
app.set('view engine', 'ejs');



// Server setup
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Server listening on port: ', port);
});


