const express = require('express');
const methodOverride = require('method-override');
const db_connect = require('./utils/db-connect');
const dotenv = require('dotenv');
const Article = require('./models/article');
const articleRouter = require('./routes/articles');

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

db_connect();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));


app.get('/', async(req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' })
    res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});