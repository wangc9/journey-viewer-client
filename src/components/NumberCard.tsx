import { NumberCardProps } from "@/types/utils";

export default function NumberCard({ title, value }: NumberCardProps) {
  return (
    <article className="rounded-xl border-2 border-gray-500 p-4 flex flex-col gap-y-2">
      <p className="text-xl">{title}</p>
      <p className="text-3xl font-bold text-center py-4">{value}</p>
    </article>
  );
}
