export default function sorting(items, indikator) {
  return items.sort((a, b) =>
    b[indikator].toLowerCase() > a[indikator].toLowerCase() ? -1 : 1
  );
}
