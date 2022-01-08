function StarRating(str) {
  const stars = {
    star1: 0,
    star2: 0,
    star3: 0,
    star4: 0,
    star5: 0
  };

  const rating = (Math.round(+str * 2) / 2).toFixed(1).split('.');

  for (let i = 1; i <= +rating[0]; i++) {
    stars[`star${i}`] = i;
  }

  if (+rating[1] === 5) {
    stars[`star${+rating[0] + 1}`] = 0.5
  }

  let strObj = ''

  for (let s in stars) {
    stars[s] === 0 ? strObj += 'empty '
    : stars[s] % 1 === 0 ? strObj += 'full '
    : strObj += 'half '
  }

  return strObj;

}