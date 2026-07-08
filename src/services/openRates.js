const openRates = async (base, symbol) => {
  try {
    // Handle same-currency conversion for all pairs
    if (base === symbol) {
      return { rate: 1 };
    }

    const fetchRates = await fetch(
      `https://open.er-api.com/v6/latest/${base}`
    );
    const jsonData = await fetchRates.json();

    const rate = jsonData.rates[symbol];

    if (rate === undefined) {
      throw new Error(`Unable to fetch rate for ${base} → ${symbol}`);
    }

    return Promise.resolve({ rate });
  } catch (error) {
    return Promise.reject(error);
  }
};

export default openRates;
