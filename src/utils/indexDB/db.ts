import { SavedStation } from "@/types/utils";
import Dexie, { type EntityTable } from "dexie";

const db = new Dexie("SavedStationsDatabase") as Dexie & {
  stations: EntityTable<SavedStation, "id">;
};

db.version(1).stores({ stations: "++id, stationId, synced" });

export { db };
