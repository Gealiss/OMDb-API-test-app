const app = require('express')();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

app.listen(PORT, () => {
    console.log(`App started at port ${PORT}`);
});