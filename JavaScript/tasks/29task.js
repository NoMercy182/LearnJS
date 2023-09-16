'use strict';

function calculateVolumeAndArea(a) {
  if (!isNaN(a) && a >= 0) {
    let result = `Объем куба: ${a ** 3}, площадь всей поверхности: ${(a ** 2) * 6}`;
    console.log(result);
  } else {
    console.log("При вычислении произошла ошибка")
  }
  
}

calculateVolumeAndArea(-5);