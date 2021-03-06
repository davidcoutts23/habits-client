export const daysOfWeek = [
  { value: "monday", label: "Monday" },
  { value: "tuesday", label: "Tuesday" },
  { value: "wednesday", label: "Wednesday" },
  { value: "thursday", label: "Thursday" },
  { value: "friday", label: "Friday" },
  { value: "saturday", label: "Saturday" },
  { value: "sunday", label: "Sunday" },
];

export const convertDaysOfWeek = (daysOfWeek) => {
  let daysOfWeekActive = [];
  daysOfWeek.map((day) => {
    daysOfWeekActive.push({ value: day, label: capitalizeFirstLetter(day) });
  });
  return daysOfWeekActive;
};

export const parseDaysOfWeekActiveSelected = (selectedDays) => {
  let daysOfWeekActive = [];
  selectedDays.map((day) => {
    daysOfWeekActive.push(day["value"]);
  });
  return daysOfWeekActive;
};

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
