const Manager = require("../lib/Manager");

// creating manager object  
test('creates an Manager object', () => {
  const manager = new Manager('Niccolo', 10, 'nicco.eck@gmail.com', 15);
  
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getJob()
test('gets role of employee', () => {
  const manager = new Manager('Niccolo', 10, 'nicco.eck@gmail.com', 15);

  expect(manager.getJob()).toEqual("Manager");
}); 