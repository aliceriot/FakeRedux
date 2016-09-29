var fp = require("./fp")
const {
  cons,
  flatten
} = fp;

describe("alice's little functional programming library", () => {
  describe('cons', () => {
    it('should build arrays from an element and an array', () => {
      cons('a', ['b', 'c'])
    });
  });


  describe('flatten', () => {
    it('should flatten', () => {
      let bumpy = [ [ 'a', 'b' ], ['c', 'd'] ]
      flatten(bumpy)

      console.log(flatten(bumpy));
    });
  });
  
});
