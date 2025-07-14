const Express  = require('express')
const App      = Express();
const PORT     = 3000;

App.listen(PORT, () => { 
    console.log(`✅ Server is running at: http://localhost:${PORT}`);
});

App.get('/', (req, res) => {
    res.end('you try to Hit "/" Route');
})