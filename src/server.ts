import express from 'express';
import payload from 'payload';
import path from 'path';

require('dotenv').config();
const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
    res.redirect('/admin');
});

// serve up content in the /assets folder
app.use('/assets', express.static(path.resolve(__dirname, './assets')));

// serve up content in the /media folder
app.use('/media', express.static(path.resolve(__dirname, './media')));

const start = async () => {
    // Initialize Payload
    await payload.init({
        secret: process.env.PAYLOAD_SECRET,
        mongoURL: process.env.MONGO_URL,
        express: app,
        onInit: async () => {
            payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
        },
    });

    // Add your own express routes here

    app.listen(3002);
};

start();
