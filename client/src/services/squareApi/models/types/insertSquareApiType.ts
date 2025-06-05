import type { SquareType } from "@models/types/squareType";

type InsertSquareApiType = Omit<SquareType, "id">;

export type { InsertSquareApiType };
