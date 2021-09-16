const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const rootRouter = require('./routes/rootRouter');
const membersRouter = require('./routes/membersRouter');
app.set('view engine', 'ejs');


app.use([
    express.json(),
    express.urlencoded({extended: true})
])

app.use('/', rootRouter);
app.use('/members', membersRouter)


app.use((req, res) => {
    res.json({
        error: "Page not found"
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
