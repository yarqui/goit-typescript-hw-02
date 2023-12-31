/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekdays {
  MONDAY = "monday",
  TUESDAY = "tuesday",
  WEDNESDAY = "wednesday",
  THURSDAY = "thursday",
  FRIDAY = "friday",
  SATURDAY = "saturday",
  SUNDAY = "sunday",
}

const isWeekend = (weekday: Weekdays): boolean => {
  return weekday === Weekdays.SATURDAY || weekday === Weekdays.SUNDAY;
};

console.log(isWeekend(Weekdays.SATURDAY));
