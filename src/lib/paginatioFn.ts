/** Function pagination spliter */
export function paginationSplit({
  total,
  limit,
}: {
  total: number;
  limit: number;
}) {
  const element = [];
  const res = totalPages(total, limit);

  for (let i = 1; i <= res; i++) {
    element.push(i);
  }
  return element;
}

function totalPages(x: number, y: number) {
  return Math.floor(x / y);
}
