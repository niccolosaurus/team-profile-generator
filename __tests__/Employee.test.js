const Employee = require("../lib/Employee");

test("employee", () => {
    let employee = new Employee('Niccolo', '100', 'niccolo@email.com');
    it("getName = name", () => {
      expect(employee.getName()).toEqual('Niccolo');
    })
    it("getID = id", () => {
      expect(employee.getId()).toEqual('100');
    })
    it("getEmail = email", () => {
      expect(employee.getEmail()).toEqual('niccolo@email.com');
    })
  });