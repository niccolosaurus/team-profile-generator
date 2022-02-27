const Engineer = require("../lib/Engineer");

// creating engineer object  
test('creates an Engineer object', () => {
  const engineer = new Engineer('Niccolo', 10, 'nicco.eck@gmail.com', 'niccolosaurus');
  
  expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github value', () => {
  const engineer = new Engineer('Niccolo', 10, 'nicco.eck@gmail.com', 'niccolosaurus');

  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getJob() 
test('gets role of employee', () => {
  const engineer = new Engineer('Niccolo', 10, 'nicco.eck@gmail.com', 'niccolosaurus');

  expect(engineer.getJob()).toEqual("Engineer");
});