const app = require('./config/web-server');
const port = process.env.PORT || 5000;

app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`\nš ... Listening: http://localhost:${port}`);
    /* eslint-enable no-console */
});