export default function pageNumbers(total, current) {
  let result = [];
  if (total < 5) {
    for (let i = 1; i <= total; i++) {
      result.push(i);
    }
  } else if (total >= 5 && current <= 3) {
    result = [1, 2, 3, 4, '...', total];
  } else if (total >= 5 && total - current <= 2) {
    result = [1, '...', total - 3, total - 2, total - 1, total];
  } else {
    result = [1, '...', current - 1, current, current + 1, '...', total];
  }
  return result;
}
