// Transforme un texte HTML (comme celui renvoyé par le flux d'annonces)
// en texte brut lisible, avec des sauts de ligne à la place des paragraphes.

// Entités HTML les plus courantes dans les textes en français.
// Si une entité n'est pas dans cette liste, elle est laissée telle quelle.
const NAMED_ENTITIES: Record<string, string> = {
  nbsp: " ",
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  rsquo: "’",
  lsquo: "‘",
  rdquo: "”",
  ldquo: "“",
  hellip: "…",
  ndash: "–",
  mdash: "—",
  eacute: "é",
  egrave: "è",
  ecirc: "ê",
  euml: "ë",
  agrave: "à",
  acirc: "â",
  auml: "ä",
  ocirc: "ô",
  ouml: "ö",
  ucirc: "û",
  ugrave: "ù",
  uuml: "ü",
  icirc: "î",
  iuml: "ï",
  ccedil: "ç",
  oelig: "œ",
};

function decodeEntities(text: string): string {
  return text
    // entités numériques décimales, ex: &#39;
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    // entités numériques hexadécimales, ex: &#x27;
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) =>
      String.fromCodePoint(parseInt(code, 16))
    )
    // entités nommées, ex: &rsquo;
    .replace(/&([a-zA-Z]+);/g, (match, name) => NAMED_ENTITIES[name] ?? match);
}

export function htmlToText(html?: string): string | undefined {
  if (!html) return undefined;

  const withLineBreaks = html
    // les fins de bloc/paragraphe deviennent des sauts de ligne
    .replace(/<\/(div|p)>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n");

  const withoutTags = withLineBreaks.replace(/<[^>]*>/g, "");

  const decoded = decodeEntities(withoutTags);

  // Nettoie les espaces/lignes vides en trop laissées par les balises supprimées
  return decoded
    .split("\n")
    .map((line) => line.trim())
    .filter((line, i, arr) => line !== "" || arr[i - 1] !== "")
    .join("\n")
    .trim();
}
