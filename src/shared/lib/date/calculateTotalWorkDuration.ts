export const calculateTotalWorkDuration = (experienceFields: any): string => {
    const months = [
        "январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"
    ];

    let totalMonths = 0;

    experienceFields.forEach((exp: any) => {
        const startIdx = months.indexOf(exp.startDateMonth.toLowerCase());
        if (startIdx === -1) return;

        const endIdx = exp.isCurrent ? new Date().getMonth() : (exp.endDateMonth ? months.indexOf(exp.endDateMonth.toLowerCase()) : -1);
        const endYear = exp.isCurrent ? new Date().getFullYear() : exp.endDateYear;

        if (!exp.isCurrent && (endIdx === -1 || endYear === null)) return;

        totalMonths += (endYear - exp.startDateYear) * 12 + (endIdx - startIdx);
    });

    const years = Math.floor(totalMonths / 12);
    const monthsRemaining = totalMonths % 12;

    const yearString = years > 0 ? `${years} ${years === 1 ? "год" : (years >= 2 && years <= 4 ? "года" : "лет")}` : "";
    const monthString = monthsRemaining > 0 ? `${monthsRemaining} ${monthsRemaining === 1 ? "месяц" : (monthsRemaining >= 2 && monthsRemaining <= 4 ? "месяца" : "месяцев")}` : "";

    return [yearString, monthString].filter(Boolean).join(" и ");
};
