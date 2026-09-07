import { redirect } from "next/navigation";

/** Keep the previous URL working; canonical page lives under Know Us. */
export default function MandatoryPublicDisclosureRedirect() {
  redirect("/know-us/mandatory-disclosure");
}
