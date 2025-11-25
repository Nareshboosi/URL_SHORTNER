const api = "http://localhost:5000/api";

async function shortenUrl() {
    const longUrl = document.getElementById("urlInput").value;
    const status = document.getElementById("status");

    const response = await fetch(`${api}/shorten`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ longUrl })
    });

    const data = await response.json();

    if (data.shortUrl) {
        status.innerHTML = `<span style="color:green;">Short URL: ${data.shortUrl}</span>`;
    } else {
        status.innerHTML = `<span style="color:red;">Error</span>`;
    }
}
