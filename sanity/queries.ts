export const circularsQuery = `*[_type == "circular" && defined(heading) && defined(text)] | order(_createdAt desc) {
  _id,
  heading,
  text,
  _createdAt
}`;

export const newslettersQuery = `*[_type == "newsletter" && defined(heading) && defined(text)] | order(_createdAt desc) {
  _id,
  heading,
  text,
  _createdAt
}`;

export const summerAssignmentsQuery = `*[_type == "summerAssignment" && defined(pdf)] | order(_createdAt desc) {
  _id,
  "url": pdf.asset->url,
  "filename": pdf.asset->originalFilename
}`;

export const winterAssignmentsQuery = `*[_type == "winterAssignment" && defined(pdf)] | order(_createdAt desc) {
  _id,
  "url": pdf.asset->url,
  "filename": pdf.asset->originalFilename
}`;

export const dateSheetsQuery = `*[_type == "dateSheet" && defined(pdf)] | order(_createdAt desc) {
  _id,
  "url": pdf.asset->url,
  "filename": pdf.asset->originalFilename
}`;

export const vacanciesQuery = `*[_type == "vacancy" && defined(title) && defined(summary)] | order(_createdAt desc) {
  _id,
  title,
  summary,
  qualification,
  experience,
  compensation,
  deadline
}`;
