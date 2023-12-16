export const formatDate = (date: string | Date): string => {
  if (date) {
    const newDate = typeof date === "string" ? new Date(date) : date;
    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, "0");
    const day = String(newDate.getDate()).padStart(2, "0");
    const hours = String(newDate.getHours()).padStart(2, "0");
    const minutes = String(newDate.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  } else {
    throw new Error('Invalid date input');
  }
};