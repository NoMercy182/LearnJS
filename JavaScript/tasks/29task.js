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

function getCoupeNumber(num) {
  if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
    console.log('Ошибка. Проверьте правильность введенного номера места');
  } else if (num === 0 || num > 36) {
    console.log("Таких мест в вагоне не существует")
  } else {
    let result;
    if ((num % 4) == 0) {
      result = num / 4 
      console.log(result);
    } else {
      result = Math.floor(num / 4) + 1;
      console.log(result);
    }
  }
}

getCoupeNumber(36);