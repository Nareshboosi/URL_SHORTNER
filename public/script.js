document.getElementById("shortenBtn").addEventListener("click", async () => {
    const longUrl = document.getElementById("urlInput").value;

    const res = await fetch("/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ longUrl })
    });

    const data = await res.json();

    if (res.ok) {
        document.getElementById("result").innerText = data.shortUrl;
    } else {
        document.getElementById("result").innerText = data.error;
    }
});
