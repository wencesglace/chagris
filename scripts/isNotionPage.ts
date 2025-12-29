import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export function isPage(
  page: unknown
): page is PageObjectResponse {
  return (
    typeof page === "object" &&
    page !== null &&
    (page as PageObjectResponse).object === "page"
  );
}
