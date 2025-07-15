const Express  = require('express')
const App      = Express();
const PORT     = 3000;
const UrlRoute = require('../Routes/UrlRoute');

App.listen(PORT, () => { 
    console.log(`✅ Server is running at: http://localhost:${PORT}`);
});

App.get('/', (req, res) => {
    res.end('you try to Hit "/" Route');
})

App.use("/url",UrlRoute);  // if URL USE url in It than we Use UrlRoute For it