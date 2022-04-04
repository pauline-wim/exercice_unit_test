const formatDate = (date) => {
  const newDate = new Date(date);

  if (newDate.toString() === "Invalid Date") {
    return null;
  }

  const days = newDate.getDate().toString().padStart(2, "0");
  const month = (newDate.getMonth() + 1).toString().padStart(2, "0");

  return `${days}/${month}/${newDate.getFullYear()}`;
};

module.exports = formatDate;
