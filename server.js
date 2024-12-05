import express from 'express';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
    // Send the HTML file as the response
    res.sendFile(path.join(process.cwd(), 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
