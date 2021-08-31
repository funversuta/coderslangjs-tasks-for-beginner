export const getBMICategory = (bmi) => {
  if (bmi <= 18.5){
    return 'Underweight';
  }else if (bmi >= 18.5 && bmi < 25 ){
    return 'Normal weight';
  }else if (bmi >= 25 && bmi < 30){
    return 'Overweight';
  }else if (bmi >= 30){
    return 'Obesity';
  }
  }
 