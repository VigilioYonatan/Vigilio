#!/usr/bin/env node

const path = require("node:path");
const fs = require("node:fs");
const process = require("process");
const { capitalize } = require("./helpers");

function create(mode, name, createDir) {
    const trimName = name.toLowerCase();
    if (!trimName.length) {
        console.log(`${name} should dont be a empty`);
        process.exit(1);
    }
    if (!isNaN(Number(trimName[0]))) {
        console.log(`${name} should dont be a number`);
        process.exit(1);
    }
    if (trimName.length < 2) {
        console.log(`${name} should  be more 3 characters`);
        process.exit(1);
    }

    let dir = path.resolve(process.cwd(), "app", "services", trimName);

    if (!fs.existsSync(dir)) {
        console.log(`Dont exist this dir. we're creating....`);
        fs.mkdirSync(dir);
    }
    if (createDir) {
        dir = path.resolve(dir, createDir);
        if (!fs.existsSync(dir)) {
            console.log(`Dont exist this dir. we're creating....`);
            fs.mkdirSync(dir);
        }
    }
    let fileTxt = mode;
    for (const pro of process.argv) {
        if (pro.startsWith("--path=")) {
            const pathDir = pro.replace("--path=", "").split(".");
            dir = path.resolve(process.cwd(), "app", ...pathDir);
        }
    }

    if (process.argv[4] === "-f" || process.argv[4] === "--force") {
        fileTxt = `${mode}Complete`;
    }
    const nameFile = `${trimName}.${mode}.ts`;
    const existFile = fs.existsSync(`${dir}\\${nameFile}`);
    if (existFile) {
        console.log(`it's already this file: ${existFile}`);
        process.exit(1);
    }

    const file = fs.readFileSync(
        path.resolve(__dirname, "files", mode, `${fileTxt}.txt`),
        { encoding: "utf-8" }
    );
    const templateFile = file.replaceAll("${Props}", capitalize(trimName));
    templateFile.replaceAll("${props}", trimName);
    templateFile.replaceAll("${prop}", trimName.slice(0, -1));
    fs.writeFileSync(`${dir}\\${nameFile}`, templateFile);
}

function init(c, createDir) {
    if (
        (process.argv[2] && process.argv[2].includes(`--${c}=`)) ||
        process.argv[2].includes(`-${c[0]}=`)
    ) {
        let model = null;
        let trimName = null;

        if (process.argv[2].includes(`--${c}=`)) {
            model = `--${c}=`;
            trimName = process.argv[2].replace(model, "").toLowerCase();
        }
        if (process.argv[2].includes(`-${c[0]}=`)) {
            model = `-${c[0]}=`;
            trimName = process.argv[2].replace(model, "").toLowerCase();
        }

        create(c, trimName, createDir);
    }
}
function resource() {
    if (
        (process.argv[2] && process.argv[2].startsWith("--resource=")) ||
        process.argv[2].startsWith("-r=")
    ) {
        const arg = process.argv[2];
        let trimName = null;
        if (arg.startsWith("--resource=")) {
            trimName = arg.replace("--resource=", "");
        }
        if (arg.startsWith("-r=")) {
            trimName = arg.replace("-r=", "");
        }
        if (process.argv[3]) {
            for (const val of process.argv[3].replace("-", "").split("")) {
                if (val === "c") {
                    create("controller", trimName, "controllers");
                }
                if (val === "s") {
                    create("service", trimName, "services");
                }
                if (val === "e") {
                    create("entity", trimName, "entities");
                }
            }
        } else {
            create("controller", trimName, "controllers");
            create("service", trimName, "services");
            create("entity", trimName, "entities");
        }
    }
}
resource();
init("controller", "controllers");
init("service", "services");
init("entity", "entities");
