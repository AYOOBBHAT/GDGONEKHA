import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("School bulletin")
        .child(
          S.list()
            .title("School bulletin")
            .items([
              S.documentTypeListItem("circular").title("Circulars"),
              S.documentTypeListItem("newsletter").title("Newsletters"),
            ]),
        ),
      S.listItem()
        .title("Downloads")
        .child(
          S.list()
            .title("Downloads")
            .items([
              S.documentTypeListItem("summerAssignment").title(
                "Summer assignments",
              ),
              S.documentTypeListItem("winterAssignment").title(
                "Winter assignments",
              ),
              S.documentTypeListItem("dateSheet").title("Date sheets"),
            ]),
        ),
      S.documentTypeListItem("vacancy").title("Vacancies"),
    ]);
