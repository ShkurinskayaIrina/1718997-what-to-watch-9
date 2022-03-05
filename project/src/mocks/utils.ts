export const getRandomPositive = function(count1:number, count2:number):number {
  const lower = Math.ceil(Math.min(Math.abs(count1), Math.abs(count2)));
  const upper = Math.floor(Math.max(Math.abs(count1), Math.abs(count2)));
  const result = Math.random() * (upper - lower+1) + lower;

  return Math.floor(result);
};
