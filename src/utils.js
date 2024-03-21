export function groupByKey(data, key) {
  const groupedData = {};
  const result = [];

  data.forEach((item) => {
    const keyValue = item[key];
    if (!groupedData[keyValue]) {
      result.push(keyValue);
      groupedData[keyValue] = [];
    }
    groupedData[keyValue].push(item);
  });

  return result.map((keyValue) => ({
    [key]: keyValue,
    items: groupedData[keyValue],
  }));
}
