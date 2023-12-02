export async function vite(entry: string, host: string) {
    return (
        "\n" +
        (await jsTag(entry, host)) +
        "\n" +
        (await jsPreloadImports(entry, host)) +
        "\n" +
        (await cssTag(entry, host))
    );
}

async function isDev(entry: string, host: string) {
    const exists = await checkViteEntry(entry, host);
    return exists;
}

async function checkViteEntry(entry: string, host: string) {
    const url = host + "/" + entry;
    try {
        const response = await fetch(url, { method: "HEAD" });
        return response.ok;
    } catch (error) {
        return false;
    }
}

async function jsTag(entry: string, host: string) {
    const url = (await isDev(entry, host))
        ? host + "/" + entry
        : assetUrl(entry);

    if (!url) {
        return "";
    }
    return `<script type="module" crossorigin src="${url}"></script>`;
}

async function jsPreloadImports(entry: string, host: string) {
    if (await isDev(entry, host)) {
        return "";
    }

    let res = "";
    const urls = importsUrls(entry);
    for (const url of urls) {
        res += `<link rel="modulepreload" href="${url}">`;
    }
    return res;
}

async function cssTag(entry: string, host: string) {
    if (await isDev(entry, host)) {
        return "";
    }

    let tags = "";
    const urls = cssUrls(entry);
    for (const url of urls) {
        tags += `<link rel="stylesheet" href="${url}">`;
    }
    return tags;
}

function getManifest() {
    const fs = require("fs");
    const path = require("path");
    const manifestPath = path.resolve(
        process.cwd(),
        "public",
        "dist",
        "manifest.json"
    );
    const content = fs.readFileSync(manifestPath, "utf-8");
    return JSON.parse(content);
}

function assetUrl(entry: string) {
    const manifest = getManifest();

    return manifest[entry] ? "/dist/" + manifest[entry]["file"] : "";
}

function importsUrls(entry: string) {
    const urls: string[] = [];
    const manifest = getManifest();

    if (manifest[entry]["imports"] && manifest[entry]["imports"].length > 0) {
        for (const imports of manifest[entry]["imports"]) {
            urls.push("/dist/" + manifest[imports]["file"]);
        }
    }
    return urls;
}

function cssUrls(entry: string) {
    const urls: string[] = [];
    const manifest = getManifest();

    if (manifest[entry]["css"] && manifest[entry]["css"].length > 0) {
        for (const file of manifest[entry]["css"]) {
            urls.push("/dist/" + file);
        }
    }
    return urls;
}
