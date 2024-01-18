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
                name: "type",
                message: "select @express/vigilio package",
                choices: [
                    "fullstack-preact",
                    "fullstack-vue",
                    "api",
                    "fullstack-preact@bun",
                ],
            })
            .then((result) => {
                let packs = null;
                let pack = "npm";
                switch (result.type) {
                    case "fullstack-preact":
                        packs = `git clone --depth 1 https://github.com/VigilioYonatan/-vigilio-express-preact ${projectName}`;
                        break;
                    case "fullstack-vue":
                        packs = `git clone --depth 1 https://github.com/VigilioYonatan/vigilio-express ${projectName}`;
                        break;
                    case "api":
                        packs = `git clone --depth 1 https://github.com/VigilioYonatan/express-api ${projectName}`;
                        break;
                    case "fullstack-preact@bun":
                        packs = `git clone --depth 1 https://github.com/VigilioYonatan/VIGILIO-EXPRESS-BUN ${projectName}`;
                        pack = "bun";
                        break;
                    default:
                        break;
                }
                const installPackageNpm = `cd ${projectName} && ${pack} install`;
                console.log("cloning project");
                const clonning = runCommand(packs);
                if (!clonning) process.exit(-1);
                console.log(`Installing packages ${pack.package}`);
                const installPackage = runCommand(installPackageNpm);
                if (!installPackage) process.exit(-1);
                const removeGit = runCommand("rm -rf .git/");
                if (!removeGit) process.exit(-1);
                console.log("Congratulations...");
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
