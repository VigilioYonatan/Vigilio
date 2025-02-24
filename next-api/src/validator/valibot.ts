import { NextApiRequest, NextApiResponse } from "next";
import { createMiddlewareDecorator, NextFunction } from "../decorators";
import { ObjectSchemaAsync, safeParseAsync } from "@vigilio/valibot";

export const Validator = (schema: ObjectSchemaAsync<any>) =>
	createMiddlewareDecorator(
		async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
			const data = await safeParseAsync(schema, req.body);
			if (!data.success) {
				let message: string | null = null;
				try {
					message =
						JSON.parse((data as any).issues[0].message) instanceof Array
							? (req as any).t(...JSON.parse((data as any).issues[0].message))
							: (data as any).issues[0].message;
				} catch (error) {
					message = (data as any).issues[0].message;
				}
				return res.status(400).json({
					success: false,
					message,
					body: (data as any).issues[0].path
						? (data as any).issues[0].path[0].key
						: (data as any).issues[0].validation,
				});
			}
			req.body = data.data;
			next();
		},
	)();
export const Pipe = (schema: ObjectSchemaAsync<any>) =>
	createMiddlewareDecorator(
		async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
			const data = await safeParseAsync(schema, (req as any).params);
			if (!data.success) {
				let message: string | null = null;
				try {
					message =
						JSON.parse((data as any).issues[0].message) instanceof Array
							? (req as any).t(...JSON.parse((data as any).issues[0].message))
							: (data as any).issues[0].message;
				} catch (error) {
					message = (data as any).issues[0].message;
				}
				return res.status(400).json({
					success: false,
					message,
					body: (data as any).issues[0].path
						? (data as any).issues[0].path[0].key
						: (data as any).issues[0].validation,
				});
			}
			(req as any).params = data.data;
			next();
		},
	)();
