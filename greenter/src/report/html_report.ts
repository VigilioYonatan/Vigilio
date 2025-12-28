import Twig from "twig";
import type { ReportInterface } from "../core/interfaces/report_interface";
import type { DocumentInterface } from "../core/model/documentation_interface";
import { ReportTwigExtension } from "./extension/report_twig_extension";

export class HtmlReport implements ReportInterface {
    private twig: any;
    private template: string = "invoice.html.twig";

    constructor(templatesDir: string | null = "", optionTwig: any[] = []) {
        this.twig = this.buildTwig(templatesDir, optionTwig);
    }

    public render(
        document: DocumentInterface,
        parameters: any[] = []
    ): string | null {
        try {
            const html = this.twig.render(this.template, {
                doc: document,
                params: parameters,
            });

            return html;
        } catch (error) {
            console.error("Error rendering template:", error);
            return null;
        }
    }

    public setTemplate(template: string | null): void {
        if (template) {
            this.template = template;
        }
    }

    public getTwig(): any | null {
        return this.twig;
    }

    private buildTwig(directory: string | null, options: any): any {
        const dirs = this.getDirectories(directory);

        // Configurar Twig con opciones
        Twig.cache(options.cache !== undefined ? options.cache : false);

        // Registrar extensiones
        ReportTwigExtension.register();

        // Configurar timezone
        this.configureTimezone();

        // Configurar loader de templates
        const templateParams = {
            settings: {
                views: dirs,
                "twig options": options,
            },
        };

        return {
            render: (templateName: string, context: any) => {
                return new Promise((resolve, reject) => {
                    Twig.renderFile(
                        templateName,
                        templateParams,
                        (err: Error, result: any) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(result);
                            }
                        }
                    );
                });
            },
        };
    }

    private configureTimezone(): void {
        // Configurar timezone para Twig si es necesario
        // La configuración de timezone puede variar según la implementación de Twig en TypeScript
    }

    private getDirectories(directory: string | null): string[] {
        const dirs: string[] = [];
        if (directory) {
            dirs.push(directory);
        }
        dirs.push(__dirname + "/Templates");

        return dirs;
    }
}
