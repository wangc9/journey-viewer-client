import { NumberCardProps } from "@/types/utils";

export default function NumberCard({ title, value }: NumberCardProps) {
  return (
    <article className="flex flex-col gap-y-2 rounded-xl border-2 border-gray-500 p-4">
      <p className="text-xl">{title}</p>
      <p className="py-4 text-center text-3xl font-bold">{value}</p>
    </article>
  );
}
