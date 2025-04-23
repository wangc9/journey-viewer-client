"use client";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { useMapContext } from "@/context/MapContext";
import { useTranslations } from "next-intl";

export default function JourneyDropDown() {
  const t = useTranslations("DropDown");
  const {
    id,
    rTime,
    dTime,
    distance,
    duration,
    setId,
    setRTime,
    setDTime,
    setDistance,
    setDuration,
  } = useMapContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          {t("order")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-50 w-full overflow-x-hidden overflow-y-auto bg-white sm:w-56">
        <DropdownMenuLabel>{t("journey_id")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={id === "ASC"}
          onCheckedChange={() => {
            switch (id) {
              case "ASC":
                setId(undefined);
                break;
              case "DESC":
                setId("ASC");
                break;
              default:
                setId("ASC");
                break;
            }
          }}
        >
          {t("assending")}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={id === "DESC"}
          onCheckedChange={() => {
            switch (id) {
              case "ASC":
                setId("DESC");
                break;
              case "DESC":
                setId(undefined);
                break;
              default:
                setId("DESC");
                break;
            }
          }}
        >
          {t("descending")}
        </DropdownMenuCheckboxItem>

        <DropdownMenuLabel>{t("rTime")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={rTime === "ASC"}
          onCheckedChange={() => {
            switch (rTime) {
              case "ASC":
                setRTime(undefined);
                break;
              case "DESC":
                setRTime("ASC");
                break;
              default:
                setRTime("ASC");
                break;
            }
          }}
        >
          {t("assending")}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={rTime === "DESC"}
          onCheckedChange={() => {
            switch (rTime) {
              case "ASC":
                setRTime("DESC");
                break;
              case "DESC":
                setRTime(undefined);
                break;
              default:
                setRTime("DESC");
                break;
            }
          }}
        >
          {t("descending")}
        </DropdownMenuCheckboxItem>

        <DropdownMenuLabel>{t("dTime")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={dTime === "ASC"}
          onCheckedChange={() => {
            switch (dTime) {
              case "ASC":
                setDTime(undefined);
                break;
              case "DESC":
                setDTime("ASC");
                break;
              default:
                setDTime("ASC");
                break;
            }
          }}
        >
          {t("assending")}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={dTime === "DESC"}
          onCheckedChange={() => {
            switch (dTime) {
              case "ASC":
                setDTime("DESC");
                break;
              case "DESC":
                setDTime(undefined);
                break;
              default:
                setDTime("DESC");
                break;
            }
          }}
        >
          {t("descending")}
        </DropdownMenuCheckboxItem>

        <DropdownMenuLabel>{t("distance")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={distance === "ASC"}
          onCheckedChange={() => {
            switch (distance) {
              case "ASC":
                setDistance(undefined);
                break;
              case "DESC":
                setDistance("ASC");
                break;
              default:
                setDistance("ASC");
                break;
            }
          }}
        >
          {t("assending")}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={distance === "DESC"}
          onCheckedChange={() => {
            switch (distance) {
              case "ASC":
                setDistance("DESC");
                break;
              case "DESC":
                setDistance(undefined);
                break;
              default:
                setDistance("DESC");
                break;
            }
          }}
        >
          {t("descending")}
        </DropdownMenuCheckboxItem>

        <DropdownMenuLabel>{t("duration")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={duration === "ASC"}
          onCheckedChange={() => {
            switch (duration) {
              case "ASC":
                setDuration(undefined);
                break;
              case "DESC":
                setDuration("ASC");
                break;
              default:
                setDuration("ASC");
                break;
            }
          }}
        >
          {t("assending")}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={duration === "DESC"}
          onCheckedChange={() => {
            switch (duration) {
              case "ASC":
                setDuration("DESC");
                break;
              case "DESC":
                setDuration(undefined);
                break;
              default:
                setDuration("DESC");
                break;
            }
          }}
        >
          {t("descending")}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
