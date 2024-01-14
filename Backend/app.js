
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const CHAT_ENGINE_PROJECT_ID = "dff849fc-1490-4686-b96e-a939a4a628e1";
const CHAT_ENGINE_PRIVATE_KEY = "a155edf8-4e2d-4d27-9d92-553dd7d6fd5d";

app.post("/signup", async (req, res) => {
    const { username, secret, email, first_name, last_name } = req.body;
    try {
        const r = await axios.post(
            "https://api.chatengine.io/users/",
            { username, secret, email, first_name, last_name },
            { headers: { "Private-Key": CHAT_ENGINE_PRIVATE_KEY } }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});

app.post("/login", async (req, res) => {
    const { username, secret } = req.body;

    try {
        const r = await axios.get("https://api.chatengine.io/users/me/", {
            headers: {
                "Project-ID": CHAT_ENGINE_PROJECT_ID,
                "User-Name": username,
                "User-Secret": secret,
            },
        });
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
