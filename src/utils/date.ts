export function formatDateLong(date?: string) {
  if (!date) return undefined;

  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export function formatDateFallback(date?: string) {
  if (!date) return undefined;

  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}