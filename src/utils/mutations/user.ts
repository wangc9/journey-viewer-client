import { SavedStation } from "@/types/utils";
import { db } from "../indexDB/db";

export const updateSavedStations = async ({
  savedStations,
  stationId,
  loggedIn,
}: {
  savedStations: SavedStation[];
  stationId: number;
  loggedIn: boolean;
}) => {
  if (savedStations.length > 0) {
    const savedStation = savedStations.find(
      (station) => station.stationId === stationId,
    );
    if (savedStation) {
      try {
        await db.stations.where("stationId").equals(stationId).delete();

        if (loggedIn) {
        }

        return;
      } catch (error) {
        console.log(error);
      }
    }
  }
  try {
    await db.stations.add({ stationId, synced: false });
  } catch (error) {
    console.log(error);
  }
  if (loggedIn) {
    try {
      await db.stations
        .where("stationId")
        .equals(stationId)
        .modify({ synced: true });
    } catch (error) {
      console.log(error);
    }
  }
};
