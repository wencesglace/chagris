import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import qrSources from "../../data/qrSources.json";

// Mapping source -> destination édité dans src/data/qrSources.json
// (pas besoin de toucher ce fichier pour ajouter une nouvelle source).
const sources = qrSources as Record<string, string>;

export default function QrRedirect() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const source = searchParams.get("source");
    const destination = (source && sources[source]) || sources.default;

    const url = new URL(destination, window.location.origin);
    if (source) {
      url.searchParams.set("utm_source", source);
      url.searchParams.set("utm_medium", "qr_code");
    }

    window.location.replace(url.toString());
  }, [searchParams]);

  return null;
}
