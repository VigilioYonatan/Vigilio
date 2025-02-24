import type { NextApiRequest } from "next";

type ParamDecorator<T> = (req: NextApiRequest) => T;

export interface MetaParameter {
	index: number;
	location:
		| "query"
		| "body"
		| "header"
		| "method"
		| "request"
		| "response"
		| "params"
		| "file"
		| "files"
		| "custom";
	name?: string;
	fn?: ParamDecorator<any>;
}

export const PARAMETER_TOKEN = Symbol("instant:next:parameters");

function addParameter(
	location: MetaParameter["location"],
	name?: MetaParameter["name"],
	fn?: ParamDecorator<any>,
) {
	return (
		target: object,
		propertyKey: string | symbol,
		parameterIndex: number,
	) => {
		const params: Array<MetaParameter> =
			Reflect.getMetadata(PARAMETER_TOKEN, target.constructor, propertyKey) ??
			[];

		params.push({ index: parameterIndex, location, name, fn });

		Reflect.defineMetadata(
			PARAMETER_TOKEN,
			params,
			target.constructor,
			propertyKey,
		);
	};
}

/** Returns the query string. */
export function Query(): ParameterDecorator;
/**
 * Returns a parameter from the query string.
 *
 * @param name Parameter name
 */
export function Query(name: string): ParameterDecorator;
/**
 * Returns a parameter from the query string with pipes applied.
 *
 * @param name Parameter name
 * @param pipes Pipes to be applied
 */
export function Query(name: string): ParameterDecorator;
/**
 * Returns the query string with pipes applied.
 *
 * @param pipes Pipes to be applied
 */
export function Query(): ParameterDecorator;
export function Query(nameOrPipes?: string) {
	return addParameter("query", nameOrPipes);
}

/**
 * Returns a parameter from the URL path.
 *
 * @param name Parameter name
 */
export function Param(name: string): ParameterDecorator;
/**
 * Returns a parameter from the URL path with pipes applied.
 *
 * @param name Parameter name
 * @param pipes Pipes to be applied
 */
export function Param(name: string): ParameterDecorator;
export function Param(name: string) {
	return addParameter("params", name);
}

/** Returns the request body. */
export function Body(): ParameterDecorator;
/**
 * Returns the request body with pipes applied.
 *
 * @param pipes Pipes to be applied
 */
export function Body(): ParameterDecorator;
export function Body() {
	return addParameter("body", undefined);
}

/**
 * Returns a parameter from the request header.
 *
 * @param name Parameter name
 */
export function Header(name: string) {
	return addParameter("header", name);
}

/** Returns the `req` object. */
export function Req() {
	return addParameter("request");
}

/** Returns the `req` object. */
export function Request() {
	return Req();
}

/** Returns the `res` object. */
export function Res() {
	return addParameter("response");
}

/** Returns the `res` object. */
export function Response() {
	return Res();
}

export function UploadedFile() {
	return addParameter("file");
}

export function UploadedFiles() {
	return addParameter("files");
}

export function createParamDecorator<T = any>(fn: ParamDecorator<T>) {
	return () => addParameter("custom", undefined, fn);
}
