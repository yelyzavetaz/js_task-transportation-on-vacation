function calculateRentalCost(days) {
  const numberOfDays = days;
  const dailyRentalCost = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const totalRentalCost = numberOfDays * dailyRentalCost;

  if (numberOfDays >= LONG_TERM) {
    return totalRentalCost - LONG_TERM_DISCOUNT;
  } else if (numberOfDays >= SHORT_TERM) {
    return totalRentalCost - SHORT_TERM_DISCOUNT;
  }

  return totalRentalCost;
}

module.exports = calculateRentalCost;
