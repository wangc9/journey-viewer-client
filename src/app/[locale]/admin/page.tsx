"use client";

import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
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
import { useEffect, useState } from "react";

export default function Admin() {
  const usersQueryOptions = usersOptions({});
  const { data: users, refetch } = useSuspenseQuery(usersQueryOptions);
  const { data: session } = useSession();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    async function setCookie() {
      if (session?.user) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: session.user.email,
            password: "Yt690416",
          }),
          credentials: "include",
        });
        await refetch();
      }
    }
    setCookie();
  }, [session]);

  return (
    <main className="grid grid-cols-1">
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        onClick={() =>
          signIn("credentials", { email, password, redirect: false })
        }
      >
        Login
      </Button>
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
