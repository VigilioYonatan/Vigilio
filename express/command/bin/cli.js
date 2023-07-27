#!/usr/bin/env node
import inquirer from "inquirer";
import { execSync } from "child_process";

inquirer
    .prompt({ type: "input", name: "name", message: "Project Name" })
    .then((result) => {
        const projectName = result.name;
        inquirer
            .prompt({
                type: "list",
                name: "package",
                message: "select a package",
                choices: ["npm", "yarn", "pnpm"],
            })
            .then((pack) => {
                inquirer
                    .prompt({
                        type: "list",
                        name: "opcion",
                        message: "select a framework",
                        choices: ["vanilla", "vue", "react", "preact"],
                    })
                    .then(async (result) => {
                        let command = null;
                        let change = null;
                        switch (result.opcion) {
                            case "vanilla":
                                command = await getRepository(
                                    null,
                                    `git clone --depth 1 https://github.com/VigilioYonatan/vigilio-express ${projectName} `
                                );
                                break;
                            case "vue":
                                command = await getRepository(
                                    null,
                                    `git clone  https://github.com/VigilioYonatan/vigilio-express.git ${projectName}`
                                );
                                change = "vue-ts";
                                break;
                            case "react":
                                break;

                            case "preact":
                                break;

                            default:
                                break;
                        }
                        console.log("download project");
                        const printCommmand = runCommand(command);
                        if (!printCommmand) process.exit(-1);
                        console.log("Installing package dependencies");
                        const printCommmand2 = runCommand(
                            `cd ${projectName} && ${
                                change ? `git checkout ${change} &&` : ""
                            } ${pack.package} install`
                        );
                        if (!printCommmand2) process.exit(-1);
                        runCommand("rimraf .git/");
                        console.log("Finished project");
                    });
            });
    });

function runCommand(command) {
    try {
        execSync(`${command}`, { stdio: "inherit" });
    } catch (error) {
        console.error(`Failed to executed ${command}`, error);
        return false;
    }
    return true;
}
async function getRepository(js, ts) {
    let command = null;
    const result = await inquirer.prompt({
        type: "list",
        name: "language",
        message: "choose language programming",
        choices: ["javascript", "typescript"],
    });
    if (result.language === "javascript") {
        command = js;
        return;
    }
    command = ts;
    return command;
}
