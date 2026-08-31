import { useEffect } from "react";

// C'est CETTE URL que le QR code physique (imprimé sur le kakemono) encode.
// Elle ne bouge jamais. Pour changer où le QR code amène les gens (ex: vers
// une page événement ponctuelle, une cagnotte spéciale...), il suffit de
// changer la valeur ci-dessous et de redéployer — pas besoin de réimprimer
// le support physique.
const QR_REDIRECT_TARGET = "/links";

export default function QrRedirect() {
  useEffect(() => {
    window.location.replace(QR_REDIRECT_TARGET);
  }, []);

  return null;
}
