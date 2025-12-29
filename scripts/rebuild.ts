import { execSync } from "child_process";

try {
  console.log("Regénération des pages Next.js...");
  execSync("npm run build", { stdio: "inherit" });
  execSync("npm run export", { stdio: "inherit" }); // si tu utilises next export
  console.log("Pages Next.js regénérées avec succès !");
} catch (error) {
  console.error("Erreur lors de la régénération :", error);
  process.exit(1);
}