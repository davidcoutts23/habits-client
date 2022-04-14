export const parseDaysOfWeekActiveSelected = (selectedDays) => {
    let daysOfWeekActive = []
    selectedDays.map((day) => {
        daysOfWeekActive.push(day['value'])
    })
    return daysOfWeekActive;
}

export const daysOfWeek = [
  { value: "monday", label: "Monday" },
  { value: "tuesday", label: "Tuesday" },
  { value: "wednesday", label: "Wednesday" },
  { value: "thursday", label: "Thursday" },
  { value: "friday", label: "Friday" },
  { value: "saturday", label: "Saturday" },
  { value: "sunday", label: "Sunday" },
];