import moment from "moment";

export function GetAge(date, type) {
  const today = moment();
  return today.diff(date, type);
}
