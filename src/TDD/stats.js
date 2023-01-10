exports.max = numbers => Math.max(...numbers);
exports.min = numbers => Math.min(...numbers);
exports.avg = numbers=>{
    const sum = numbers.reduce((acc,current)=>acc+current,0)
    return sum / numbers.length;
}

exports.sort= numbers=>numbers.sort((a,b)=>a-b)

exports.median = numbers => {
    const { length } = numbers;
    const middle = Math.floor(length / 2);
    return length % 2
      ? numbers[middle]
      : (numbers[middle - 1] + numbers[middle]) / 2;
  };

  exports.mode = numbers => {
    const counts = new Map();
    numbers.forEach(n => {
      const count = counts.get(n) || 0;
      counts.set(n, count + 1);
    });
    const maxCount = Math.max(...counts.values());
    const modes = [...counts.keys()].filter(
      number => counts.get(number) === maxCount
    );
  
    if (modes.length === numbers.length) {
      // 최빈값이 없음
      return null;
    }
  
    if (modes.length > 1) {
      // 최빈값이 여러개
      return modes;
    }
  
    // 최빈값이 하나
    return modes[0];
  };