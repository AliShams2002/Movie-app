export const toPersianDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('fa-IR');
}