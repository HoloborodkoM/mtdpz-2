const List = require('../source/List.js')

let testList

describe("List test: method length()", () => {

   beforeEach(() => { testList = new List() })
   
   test("Checking the length of the list", () => { 
      
      testList.append('W')
      testList.append('h')
      testList.append('y')
      testList.append(' ')
      testList.append('k')
      testList.append('i')
      testList.append('d')
      testList.append('s')
      testList.append('?')
      
      expect(testList.length()).toBe(9)
   })
   
   test("Checking the length of the empty list", () => {

      expect(testList.length()).toBe(0)

   })
})