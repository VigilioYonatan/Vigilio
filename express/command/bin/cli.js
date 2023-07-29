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
                const cloning = `git clone --depth 1 `;
                const installPackageNpm = `cd ${projectName} && ${pack.package} install`;
                console.log("cloning project");
                const clonning = runCommand(cloning);
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
