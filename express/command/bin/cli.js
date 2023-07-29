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
                        name: "type",
                        message: "select @express/vigilio package",
                        choices: ["fullstack", "api"],
                    })
                    .then((result) => {
                        let pack = null;
                        switch (result) {
                            case "fullstack":
                                pack = `git clone --depth 1 https://github.com/VigilioYonatan/express-api ${projectName}`;
                                break;
                            case "api":
                                pack = `git clone --depth 1 https://github.com/VigilioYonatan/vigilio-express ${projectName}`;
                                break;
                            default:
                                break;
                        }
                    });
                const installPackageNpm = `cd ${projectName} && ${pack.package} install`;
                console.log("cloning project");
                const clonning = runCommand(pack);
                if (!clonning) process.exit(-1);
                console.log(`Installing packages ${pack.package}`);
                const installPackage = runCommand(installPackageNpm);
                if (!installPackage) process.exit(-1);
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
