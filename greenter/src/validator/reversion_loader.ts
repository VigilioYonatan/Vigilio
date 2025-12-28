import type { Input } from "@vigilio/valibot";
import { retention_loader } from "./retention_loader";

export const reversion_loader = retention_loader;
export type ReversionLoader = Input<typeof reversion_loader>;
