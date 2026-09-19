import { circularType } from "./circular";
import {
  dateSheetType,
  summerAssignmentType,
  winterAssignmentType,
} from "./downloadPdfs";
import { newsletterType } from "./newsletter";
import { vacancyType } from "./vacancy";

export const schemaTypes = [
  circularType,
  newsletterType,
  summerAssignmentType,
  winterAssignmentType,
  dateSheetType,
  vacancyType,
];
