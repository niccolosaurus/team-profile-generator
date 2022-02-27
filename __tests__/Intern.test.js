const Intern = require("../lib/Intern");

// creating intern object  
test('creates an Intern object', () => {
  const intern = new Intern('Niccolo', 10, 'nicco.eck@gmail.com', 'SDSU');
  
  expect(intern.school) .toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets employee school', () => {
  const intern = new Intern('Niccolo', 10, 'nicco.eck@gmail.com', 'SDSU');
  
  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getJob()
test('gets role of employee', () => {
  const intern = new Intern('Niccolo', 10, 'nicco.eck@gmail.com', 'SDSU');

  expect(intern.getJob()).toEqual("Intern");
}); 