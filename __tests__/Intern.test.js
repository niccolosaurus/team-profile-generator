const Intern = require("../lib/Intern");

test("intern", () => {
    let intern = new Intern('Niccolo', '100', 'niccolo@email.com', 'SDSU');
    it("getName = name", () => {
      expect(intern.getName()).toEqual('Niccolo');
    })
    it("getID = id", () => {
      expect(intern.getId()).toEqual('100');
    })
    it("getEmail = email", () => {
      expect(intern.getEmail()).toEqual('niccolo@email.com');
    })
    it("getSchool = school", () => {
      expect(intern.getSchool()).toEqual('SDSU');
    })    
  });