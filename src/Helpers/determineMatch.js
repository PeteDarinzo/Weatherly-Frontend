
function determineMatch(day, userPrefs) {
  let conditionsMet;
  let tempMet;
  const conditionCode = day.weather[0].id;
  const temperature = day.feels_like.day;
  if (((200 <= conditionCode) && (conditionCode <= 232)) && (userPrefs.thunderstorm)) {
    conditionsMet = true;
  } else if (((300 <= conditionCode) && (conditionCode <= 321)) && (userPrefs.drizzle)) {
    conditionsMet = true;
  } else if (((500 <= conditionCode) && (conditionCode <= 531)) && (userPrefs.drizzle)) {
    conditionsMet = true;
  } else if (((600 <= conditionCode) && (conditionCode <= 622)) && (userPrefs.snow)) {
    conditionsMet = true;
  } else if (((801 <= conditionCode) && (conditionCode <= 804)) && (userPrefs.overcast)) {
    conditionsMet = true;
  } else {
    conditionsMet = false
  }

  if (temperature <= userPrefs.minTemp || userPrefs.maxTemp <= temperature) {
    tempMet = true;
  }

  if (conditionsMet && tempMet) {
    return 3;
  } else if (conditionsMet || tempMet) {
    return 2;
  } else {
    return 1;
  }
}

export default determineMatch;