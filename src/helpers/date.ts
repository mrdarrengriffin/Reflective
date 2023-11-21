function getOrdinal(number: number | string): string {
    if (typeof number !== "number") {
        number = parseInt(number);
    }

    if (!number || number <= 0 || number > 31) {
        throw new Error("Please provide a number between 0 and 31");
    }

    if (number > 3 && number < 21) return "th";
    switch (number % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}

function getDayName(day: number): string {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesay",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    if (day < 0 || day > 6) {
        throw new Error(
            "Invalid day number. Please provide a number between 0 and 6"
        );
    }

    return days[day];
}

function getMonthName(month: number): string {
    const months = [
        "January",
        "Feburary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    if (month < 0 || month > 11) {
        throw new Error(
            "Invalid month number. Please provide a number between 0 and 11"
        );
    }

    return months[month];
}

export { getOrdinal, getDayName, getMonthName };