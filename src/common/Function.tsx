//////////////////////////////////////////////////////
// 共通で使用する関数の定義場所
//////////////////////////////////////////////////////

export const NumToDay = (num: number) => {
  let day = 'Sunday';
  if (num === 1) day = 'Monday';
  else if (num === 2) day = 'Tuesday';
  else if (num === 3) day = 'Wednesday';
  else if (num === 4) day = 'Thursday';
  else if (num === 5) day = 'Friday';
  else if (num === 6) day = 'Saturday';
  return day;
};