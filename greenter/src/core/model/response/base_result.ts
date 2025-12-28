export class BaseResult {
    protected success: boolean = false;
    protected error?: Error;

    public isSuccess(): boolean {
        return this.success;
    }

    public setSuccess(success: boolean): this {
        this.success = success;
        return this;
    }

    public getError(): Error | undefined {
        return this.error;
    }

    public setError(error: Error | undefined): this {
        this.error = error;
        return this;
    }
}
