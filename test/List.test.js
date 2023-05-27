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

describe("List test: method append(element)", () => {

   beforeEach(() => { testList = new List() })
  
   test("Checking the correct addition of elements to the end", () => {
      
      testList.append('k')
      testList.append('i')
      testList.append('d')
      testList.append('s')
      
      expect(testList.get(0)).toBe('k')
      expect(testList.get(1)).toBe('i')
      expect(testList.get(2)).toBe('d')
      expect(testList.get(3)).toBe('s')

   })
   
   test("Checking element type", () => {
      
      const tryAddCase1 = () => testList.append(5)
      const tryAddCase2 = () => testList.append(['1', '2', '3'])
      const tryAddCase3 = () => testList.append({a: 2})
      const tryAddCase4 = () => testList.append("Hi there")
      const tryAddCase5 = () => testList.append('')
      
      expect(testList.length()).toBe(0)
      
      expect(tryAddCase1).toThrow('Error. Expected character type!!!')
      expect(tryAddCase2).toThrow('Error. Expected character type!!!')
      expect(tryAddCase3).toThrow('Error. Expected character type!!!')
      expect(tryAddCase4).toThrow('Error. Expected character type!!!')
      expect(tryAddCase5).toThrow('Error. Expected character type!!!')

  })
})