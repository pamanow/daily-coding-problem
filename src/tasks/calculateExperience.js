/* Calculate number of months of experience
For an array with the following structure:
[
  { from: '01-2015', to: '02-2016' },
  { from: '05-2015', to: '05-2016' },
  { from: '12-2015', to: '01-2016' },
  { from: '08-2016', to: '07-2017' },
  { from: '06-2016', to: '07-2017' },
]
Calculate number of months of experience, excluding duplicates.
*/

const getUniqueValues = (arr) => new Set(arr).size;

const extractExpFromDates = (from, to) => {
  const [fromM, fromY] = from.split('-');
  let currentMonth = Number(fromM);
  let currentYear = Number(fromY);

  const [toM, toY] = to.split('-');
  const endMonth = Number(toM);
  const endYear = Number(toY);

  const result = [];

  while (currentYear <= endYear) {
    if (currentYear === endYear && currentMonth > endMonth) {
      break;
    }
    
    result.push(`${currentMonth}-${currentYear}`);

    if (currentMonth === 12) {
      currentMonth = 1;
      currentYear += 1;
    } else {
      currentMonth += 1;
    }
  }
  
  return result;
};

const calculateExperience = (experienceData) => {
  const experienceMonthsList = experienceData.reduce((prev, current) => 
    [...prev, ...extractExpFromDates(current.from, current.to)], []
  );

  return getUniqueValues(experienceMonthsList);
};

export default calculateExperience;
