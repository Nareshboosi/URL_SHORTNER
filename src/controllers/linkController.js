const generateCode = require("../utils/generatecode.js");
const store = require("../dataStore.js");


exports.createShortLink = (req, res) => {
    const { longUrl } = req.body;

    if (!longUrl)
        return res.status(400).json({ message: "URL required" });

    const code = generateCode();

    store.urls.push({ code, longUrl });

    res.json({
        shortUrl: `http://localhost:5000/${code}`
    });
};

exports.redirectToOriginal = (req, res) => {
    const { code } = req.params;

    const entry = store.urls.find(item => item.code === code);

    if (!entry) return res.status(404).send("URL not found");

    res.redirect(entry.longUrl);
};
