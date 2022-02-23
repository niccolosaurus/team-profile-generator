const Engineer = require("../lib/Engineer");

test("engineer", () => {
    let engineer = new Engineer('Niccolo', '100', 'niccolo@email.com', 'niccologithub');
    it("getName = name", () => {
      expect(engineer.getName()).toEqual('Niccolo');
    })
    it("getID = id", () => {
      expect(engineer.getId()).toEqual('100');
    })
    it("getEmail = email", () => {
      expect(engineer.getEmail()).toEqual('niccolo@email.com');
    })
    it("getGitHub = gitHub", () => {
      expect(engineer.getGitHub()).toEqual('niccologithub');
    })    
  });