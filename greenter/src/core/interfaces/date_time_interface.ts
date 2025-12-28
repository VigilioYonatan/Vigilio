export interface DateTimeInterface {
	getTime(): number;
	toISOString(): string;
	toString(): string;
	toDateString(): string;
	toTimeString(): string;
	toLocaleDateString(): string;
	toLocaleTimeString(): string;
	toLocaleString(): string;
	getDate(): number;
	getDay(): number;
	getFullYear(): number;
	getHours(): number;
	getMinutes(): number;
	getSeconds(): number;
	getMonth(): number;
	format(format: string): string;
}
