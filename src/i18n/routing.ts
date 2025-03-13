/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "fi", "sv"],
  defaultLocale: "en",
});
