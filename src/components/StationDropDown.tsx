"use client";

// import useStationFilter from "@/hooks/useFilter";
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

export default function StationDropDown() {
  const t = useTranslations("DropDown");
  const { id, name, address, x, y, setId, setName, setAddress, setX, setY } =
    useMapContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          {t("order")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-50 w-full overflow-x-hidden overflow-y-auto bg-white sm:w-56">
        <DropdownMenuLabel>{t("id")}</DropdownMenuLabel>
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

        <DropdownMenuLabel>{t("name")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={name === "ASC"}
          onCheckedChange={() => {
            switch (name) {
              case "ASC":
                setName(undefined);
                break;
              case "DESC":
                setName("ASC");
                break;
              default:
                setName("ASC");
                break;
            }
          }}
        >
          {t("assending")}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={name === "DESC"}
          onCheckedChange={() => {
            switch (name) {
              case "ASC":
                setName("DESC");
                break;
              case "DESC":
                setName(undefined);
                break;
              default:
                setName("DESC");
                break;
            }
          }}
        >
          {t("descending")}
        </DropdownMenuCheckboxItem>

        <DropdownMenuLabel>{t("address")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={address === "ASC"}
          onCheckedChange={() => {
            switch (address) {
              case "ASC":
                setAddress(undefined);
                break;
              case "DESC":
                setAddress("ASC");
                break;
              default:
                setAddress("ASC");
                break;
            }
          }}
        >
          {t("assending")}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={address === "DESC"}
          onCheckedChange={() => {
            switch (address) {
              case "ASC":
                setAddress("DESC");
                break;
              case "DESC":
                setAddress(undefined);
                break;
              default:
                setAddress("DESC");
                break;
            }
          }}
        >
          {t("descending")}
        </DropdownMenuCheckboxItem>

        <DropdownMenuLabel>{t("latitude")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={x === "ASC"}
          onCheckedChange={() => {
            switch (x) {
              case "ASC":
                setX(undefined);
                break;
              case "DESC":
                setX("ASC");
                break;
              default:
                setX("ASC");
                break;
            }
          }}
        >
          {t("assending")}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={x === "DESC"}
          onCheckedChange={() => {
            switch (x) {
              case "ASC":
                setX("DESC");
                break;
              case "DESC":
                setX(undefined);
                break;
              default:
                setX("DESC");
                break;
            }
          }}
        >
          {t("descending")}
        </DropdownMenuCheckboxItem>

        <DropdownMenuLabel>{t("longitude")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={y === "ASC"}
          onCheckedChange={() => {
            switch (y) {
              case "ASC":
                setY(undefined);
                break;
              case "DESC":
                setY("ASC");
                break;
              default:
                setY("ASC");
                break;
            }
          }}
        >
          {t("assending")}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={y === "DESC"}
          onCheckedChange={() => {
            switch (y) {
              case "ASC":
                setY("DESC");
                break;
              case "DESC":
                setY(undefined);
                break;
              default:
                setY("DESC");
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
