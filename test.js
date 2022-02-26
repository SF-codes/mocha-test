/* 
!!!TESTING WITH MOCHA!!!

Assert is a built in node.js module. It tests equality(==) not (===)!

 Describe takes 2 params, first is the name then a function with a describe of what it does.
 Describes can be nested 

//it() should be like you're saying what it 'should' do, and then have a function with assert.equal(if using this module) And assert.equal takes 2 params, first one is the ACTUAL value, and the second one is the EXPECTED value.

// Both ways work, equality

*/

//MOCHAS COPY:

// var assert = require("assert");
// describe("Array", function () {
//   describe("#indexOf()", function () {
//     it("should return -1 when the value is not present", function () {
//       assert.equal(-1, [1, 2, 3].indexOf(4));
//     });
//   });
// });

// My own tests:

// let assert = require("assert");
// describe("equalNum", function () {
//   describe("equals", function () {
//     it("should equal 22", function () {
//       assert.equal(22, "22");
//     });
//   });
// });

// let assert = require("assert");
// describe("equalNum", function () {
//   describe("equals", function () {
//     it("should equal 22", function () {
//       assert.equal(22, 22);
//     });
//   });
// });

// NESTED ASSERT!

let assert = require("assert");
describe("Math", function () {
  describe("equals-8", function () {
    it("should equal -8", function () {
      assert.equal(-8, (3 - 4) * 8);
    });
  });
  describe("equals9", function () {
    it("should test if 3 * 3 = 9", function () {
      assert.equal(9, 3 * 3);
    });
  });
});
