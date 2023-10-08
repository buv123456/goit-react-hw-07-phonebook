export default function sorting(items, indicator) {
  return items.sort((a, b) =>
    b[indicator].toLowerCase() > a[indicator].toLowerCase() ? -1 : 1
  );
}
