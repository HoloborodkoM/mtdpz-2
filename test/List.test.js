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

describe("List test: method insert(element, index)", () => {

   beforeEach(() => { testList = new List() })
   
   test("Checking insert through index", () => {
      
      testList.append('i')
      testList.append('s')

      testList.insert('k', 0)
      testList.insert('d', 2)
      testList.insert('?', testList.length())

      expect(testList.length()).toBe(5)

      expect(testList.get(0)).toBe('k')
      expect(testList.get(1)).toBe('i')
      expect(testList.get(2)).toBe('d')
      expect(testList.get(3)).toBe('s')
      expect(testList.get(4)).toBe('?')
   
   })
   
   test("Checking insert through incorrect index", () => {
      
      testList.append('k')

      const tryInsertCase1 = () => testList.insert('r', -1)
      const tryInsertCase2 = () => testList.insert('r', testList.length() + 1)
      
      expect(testList.length()).toBe(1)
      
      expect(tryInsertCase1).toThrow('Error. Incorrect index!!!')
      expect(tryInsertCase2).toThrow('Error. Incorrect index!!!')

   })

   test("Checking element type", () => {
      
      const tryInsertCase1 = () => testList.insert([1, 2, 3], 0)
      const tryInsertCase2 = () => testList.insert("Ho-ho-ho", testList.length())
      const tryInsertCase3 = () => testList.insert({add: 'e'}, 0)
      const tryInsertCase4 = () => testList.insert(3, 0)
      const tryInsertCase5 = () => testList.append('', 0)
      
      expect(testList.length()).toBe(0)
      
      expect(tryInsertCase1).toThrow('Error. Expected character type!!!')
      expect(tryInsertCase2).toThrow('Error. Expected character type!!!')
      expect(tryInsertCase3).toThrow('Error. Expected character type!!!')
      expect(tryInsertCase4).toThrow('Error. Expected character type!!!')
      expect(tryInsertCase5).toThrow('Error. Expected character type!!!')

  })
})

describe("List test: method delete(element, index)", () => {

   beforeEach(() => { testList = new List() })
   
   test("Cheking deleted element through index", () => {

      testList.append('k')
      testList.append('i')
      testList.append('d')
      testList.append('s')
      
      const deletedElement1 = testList.delete(0)
      const deletedElement2 = testList.delete(testList.length() - 1)
      
      expect(testList.length()).toBe(2)
      
      expect(deletedElement1).toBe('k')
      expect(deletedElement2).toBe('s')

      expect(testList.get(0)).toBe('i')
      expect(testList.get(1)).toBe('d')
   
   })

   test("Checking delet through incorrect index", () => {
      
      testList.append('k')

      const tryDeleteCase1 = () => testList.delete(-1)
      const tryDeleteCase2 = () => testList.delete(testList.length())
      
      expect(testList.length()).toBe(1)
      
      expect(tryDeleteCase1).toThrow('Error. Incorrect index!!!')
      expect(tryDeleteCase2).toThrow('Error. Incorrect index!!!')

   })
})

describe("List test: method deleteAll(element)", () => {

   beforeEach(() => { testList = new List() })
   
   test("Checking to remove all matching elements", () => {
      
      testList.append('t')
      testList.append('k')
      testList.append('t')
      testList.append('i')
      testList.append('t')
      testList.append('t')
      testList.append('t')
      testList.append('d')
      testList.append('s')
      testList.append('t')
      
      testList.deleteAll('t')
      
      expect(testList.length()).toBe(4)

      expect(testList.get(0)).toBe('k')
      expect(testList.get(1)).toBe('i')
      expect(testList.get(2)).toBe('d')
      expect(testList.get(3)).toBe('s')
   
   })
   
   test("Checking for non-existent element in the list -> do nothing", () => {
      
      testList.append('k')
      testList.append('i')
      testList.append('d')
      testList.append('s')

      testList.deleteAll('n')

      expect(testList.length()).toBe(4)

      expect(testList.get(0)).toBe('k')
      expect(testList.get(1)).toBe('i')
      expect(testList.get(2)).toBe('d')
      expect(testList.get(3)).toBe('s')

   })
})
