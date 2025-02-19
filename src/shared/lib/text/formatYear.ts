export const formatYear = (year: number) => {
    const formatter = new Intl.NumberFormat('ru', {
        style: 'unit',
        unit: 'year',
        unitDisplay: 'long',
    });
    return formatter.format(year);
};