"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { usersOptions } from "@/utils/queries/users";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function Admin() {
  const usersQueryOptions = usersOptions({});
  const { data: users } = useSuspenseQuery(usersQueryOptions);

  return (
    <main className="grid grid-cols-1">
      <section className="flex flex-col gap-y-2">
        {users && Array.isArray(users) && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>id</TableHead>
                <TableHead>email</TableHead>
                <TableHead>registration</TableHead>
                <TableHead>update</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.registrationDate}</TableCell>
                  <TableCell>{user.lastLoginDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </section>
    </main>
  );
}
