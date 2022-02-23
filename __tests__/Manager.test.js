const Manager = require("../lib/Manager");

test("manager", () => {
    let manager = new Manager('Niccolo', '100', 'niccolo@email.com', '6196196199');
    it("getName = name", () => {
      expect(manager.getName()).toEqual('Niccolo');
    })
    it("getID = id", () => {
      expect(manager.getId()).toEqual('100');
    })
    it("getEmail = email", () => {
      expect(manager.getEmail()).toEqual('niccolo@email.com');
    })
    it("getNumber = number", () => {
      expect(manager.getNumber()).toEqual('6196196199');
    })    
  });