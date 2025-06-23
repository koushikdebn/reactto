export default function Utils() {
    const DateTimeDisplay = (dateTimeString) => {
      const currentDate = new Date();
      const [date, time] = dateTimeString.split("T");
      const [year, month, day] = date.split("-");
      const [hour, minute] = time.split(":");
      const inputDate = new Date(year, month - 1, day, hour, minute);
      const isSameDay = currentDate.toDateString() === inputDate.toDateString();
  
      const formatDate = (date) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString(undefined, options);
      };
  
      return isSameDay ? `${hour}:${minute}` : formatDate(inputDate);
    };
    const getCurrentDateTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
  
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };
    const differenceBetweenTwoTime = (gettime) => {
      const istDate = new Date(gettime);
      const now = new Date(); // Current local time
  
      const secondsAgo = Math.floor((now - istDate) / 1000);
  
      if (secondsAgo < 60) {
        return secondsAgo <= 1
          ? "a few seconds ago"
          : `${secondsAgo} seconds ago`;
      }
  
      const minutesAgo = Math.floor(secondsAgo / 60);
      if (minutesAgo < 60) {
        return minutesAgo === 1 ? "a minute ago" : `${minutesAgo} minutes ago`;
      }
  
      const hoursAgo = Math.floor(minutesAgo / 60);
      if (hoursAgo < 24) {
        return hoursAgo === 1 ? "an hour ago" : `${hoursAgo} hours ago`;
      }
  
      const daysAgo = Math.floor(hoursAgo / 24);
      if (daysAgo < 7) {
        return daysAgo === 1 ? "a day ago" : `${daysAgo} days ago`;
      }
  
      const weeksAgo = Math.floor(daysAgo / 7);
      if (weeksAgo < 4) {
        return weeksAgo === 1 ? "a week ago" : `${weeksAgo} weeks ago`;
      }
  
      const monthsAgo = Math.floor(daysAgo / 30);
      if (monthsAgo < 12) {
        return monthsAgo === 1 ? "a month ago" : `${monthsAgo} months ago`;
      }
  
      const yearsAgo = Math.floor(daysAgo / 365);
      return yearsAgo === 1 ? "a year ago" : `${yearsAgo} years ago`;
    };
    return {
      DateTimeDisplay,
      getCurrentDateTime,
      differenceBetweenTwoTime
    };
  }
  