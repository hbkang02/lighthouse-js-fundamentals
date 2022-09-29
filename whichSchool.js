function whichSchool(age) {
  if (age < 13) {
    return "You are: " + age + " years old. You should attend Elementary School.";
  } else if (age >=13 && age <= 18) {
    return "You are: " + age + " years old. You should attend Secondary School.";
  } else {
    return "You are: " + age + " years old. You should attend Lighthouse Labs";
  }
}

console.log(whichSchool(9));
