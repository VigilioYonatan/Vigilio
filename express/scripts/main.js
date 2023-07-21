#!/usr/bin/env node

const path = require("node:path");
const fs = require("node:fs");
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

    let dir = path.resolve(
        __dirname,
        "..",
        "..",
        "..",
        "src",
        "services",
        trimName,
        createDir ? createDir : ""
    );
    for (const pro of process.argv) {
        if (pro.startsWith("--path=")) {
            const pathDir = pro.replace("--path=", "").split(".");
            dir = path.resolve(__dirname, "..", "..", "..", "src", ...pathDir);
        }
    }

    if (!fs.existsSync(dir)) {
        console.log(`Dont exist this dir. we're creating....`);
        fs.mkdirSync(dir);
    }

    const nameFile = `${trimName}.${mode}.ts`;
    const existFile = fs.existsSync(`${dir}\\${nameFile}`);
    if (existFile) {
        console.log(`it's already this file: ${existFile}`);
        process.exit(1);
    }

    const file = fs.readFileSync(
        path.resolve(__dirname, "files", mode, `${mode}.txt`),
        { encoding: "utf-8" }
    );
    const templateFile = file.replaceAll("${Prop}", capitalize(trimName));
    templateFile.replaceAll("${prop}", trimName);
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
                    create("controller", trimName);
                }
                if (val === "s") {
                    create("service", trimName);
                }
                if (val === "e") {
                    create("entity", trimName, true);
                }
            }
        } else {
            create("controller", trimName);
            create("service", trimName);
            create("entity", trimName, "entities");
        }
    }
}
resource();
init("controller");
init("service");
init("entity", "entities");
