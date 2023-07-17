import { File } from "formidable";
export interface ValidationProps {
    typeFile?: {
        value: string[];
        message?: string;
    };
    minSize?: {
        value: number;
        message?: string;
    } | number;
    maxSize?: {
        value: number;
        message?: string;
    } | number;
    required?: {
        value: boolean;
        message?: string;
    } | boolean;
    maxFiles?: {
        value: number;
        message?: string;
    } | number;
    minFiles?: {
        value: number;
        message?: string;
    } | number;
}
export declare function validateUpload(archivos: File[], validation?: ValidationProps): Promise<string[]>;
