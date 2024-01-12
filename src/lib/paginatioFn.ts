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

  for (let i = 0; i < res; i++) {
    element.push(i);
  }
  return element;
}

function totalPages(x: number, y: number) {
  const res = x / y;
  if (Number.isInteger(res)) {
    return res;
  }

  return Math.floor(res) + 1;
}
