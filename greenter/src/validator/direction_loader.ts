import { type Input, maxLength, object, string } from "@vigilio/valibot";

export const direction_loader = object({
	ubigueo: string([maxLength(8)]),
	direccion: string([maxLength(100)]),
});
export type DirectionLoader = Input<typeof direction_loader>;
