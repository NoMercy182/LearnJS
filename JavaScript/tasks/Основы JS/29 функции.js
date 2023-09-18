'use strict';

function calculateVolumeAndArea(a) {
  if (!isNaN(a) && a >= 0) {
    let result = `Объем куба: ${a ** 3}, площадь всей поверхности: ${(a ** 2) * 6}`;
    console.log(result);
  } else {
    console.log("При вычислении произошла ошибка")
  }
  
}

// calculateVolumeAndArea(-5);

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

// getCoupeNumber(36);

function getTimeFromMinutes(min) {
  if (isNaN(min) || !Number.isInteger(min) || min < 0) {
    console.log('Ошибка, проверьте данные');
  } else {
    let hours = Math.floor(min / 60);
    let minutes = min % 60;
    console.log(`Это ${hours} часа и ${minutes} минут`);
  }
}

// getTimeFromMinutes(77);

function findMaxNumber(a, b, c, d) {
  let arr = [];
  arr[0] = a;
  arr[1] = b;
  arr[2] = c;
  arr[3] = d;
  function cNum(a, b) {
    return a - b;
  }
  arr = arr.sort(cNum)
  console.log(arr[arr.length - 1]);
}

// findMaxNumber(345, 66, 7, 2);