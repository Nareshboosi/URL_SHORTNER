const store = require("../dataStore.js");
const generateCode = require("../utils/generatecode.js");

exports.shortenURL = (req, res) => {
    const { longUrl } = req.body;

    if (!longUrl) {
        return res.status(400).json({ error: "longUrl is required" });
    }

    const code = generateCode();

    store.urls.push({ code, longUrl });

    const shortUrl = `http://localhost:5000/${code}`;
    return res.json({ shortUrl });
};

exports.redirectURL = (req, res) => {
    const code = req.params.code;
    const entry = store.urls.find(u => u.code === code);

    if (!entry) return res.status(404).send("URL not found");

    return res.redirect(entry.longUrl);
};
