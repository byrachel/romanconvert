function parseToRoman(number) {
    const decimal = [1000, 500, 100, 50, 10, 9, 5, 4, 1, 0];
    const roman = ['M', 'D', 'C', 'L', 'X', 'IX', 'V', 'IV', 'I', '0'];
  
    let result = '';
    console.log(number);

    for(let i=0; i<decimal.length; i++) {
      if(number%decimal[i] < number) {
        result += roman[i];
        number -= decimal[i];
      }
      else {
          console.log('erreur');
      }
    }
    console.log(result)
  
    return result;
  }