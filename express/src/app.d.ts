export declare global {
    namespace Express {
        interface Request {
            files: string[];
        }
    }
}
