import { Table, TableBody, TableCell, TableRow } from "./ui/table";

export default function StationList({ stations }: { stations: StationsList }) {
  return (
    <Table>
      <TableBody>
        {stations.map((station) => (
          <TableRow key={station.id}>
            <TableCell className="flex flex-col gap-y-1">
              <span className="font-medium text-lg">
                {station.stationName ?? ""}
              </span>
              <span className="font-light text-gray-600">
                {station.stationAddress ?? ""}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
