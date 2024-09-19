const express = require("express");
const port = 3000
const blogRoutes = require('./routes/blogRoutes');
const app = express();

// Parse URL encoded bodies
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));  

app.use(blogRoutes);

app.listen(port, () => {
  console.log('Server running on port ${port}.');
});

// http://localhost:3000