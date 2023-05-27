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

describe("List test: method get(index)", () => {
   
   beforeEach(() => { testList = new List() })
   
   test("Checking element by index", () => {

      testList.append('k')
      testList.append('i')
      testList.append('d')
      testList.append('s')

      expect(testList.get(0)).toBe('k')
      expect(testList.get(1)).toBe('i')
      expect(testList.get(2)).toBe('d')
      expect(testList.get(3)).toBe('s')

   })
   
   test("Checking element by incorrect index", () => {

      testList.append('k')

      const tryGetElementCase1 = () => testList.get(-1)
      const tryGetElementCase2 = () => testList.get(testList.length())
      
      expect(testList.length()).toBe(1)
      
      expect(tryGetElementCase1).toThrow('Error. Incorrect index!!!')
      expect(tryGetElementCase2).toThrow('Error. Incorrect index!!!')
   
   })
})

describe("List test: method clone()", () => {

   beforeEach(() => { 

      testList = new List() 

      testList.append('k')
      testList.append('i')
      testList.append('d')
      testList.append('s')

   })
   
   test("Cheking clone of the list", () => {

      const cloneList = testList.clone()
      
      expect(cloneList.get(0)).toBe('k')
      expect(cloneList.get(1)).toBe('i')
      expect(cloneList.get(2)).toBe('d')
      expect(cloneList.get(3)).toBe('s')
   
   })
   
   test("Checking independence of these lists", () => {
      
      const cloneList = testList.clone()
      
      testList.append('?')
      testList.append('p')

      const tryGetElement = () => cloneList.get(4)
      
      expect(cloneList.length()).toBe(4)
      expect(cloneList.get(3)).toBe('s')
      expect(tryGetElement).toThrow('Error. Incorrect index!!!')
      
      expect(testList.length()).toBe(6)
      expect(testList.get(5)).toBe('p')

   })
})

describe("List test: method reverse()", () => {

   beforeEach(() => { testList = new List() })
   
   test("Checking reverse of the list", () => {
      
      testList.append('k')
      testList.append('i')
      testList.append('d')
      testList.append('s')
      
      testList.reverse()

      expect(testList.get(0)).toBe('s')
      expect(testList.get(1)).toBe('d')
      expect(testList.get(2)).toBe('i')
      expect(testList.get(3)).toBe('k')

  })
})

describe("List test: method findFirst(element)", () => {

   beforeEach(() => { 

      testList = new List() 

      testList.append('k')
      testList.append('i')
      testList.append('d')
      testList.append(' ')
      testList.append('i')
      testList.append('s')

   })
   
   test("Checking first find element in the list", () => {
      
      const firstFindElement = testList.findFirst('i')
      
      expect(firstFindElement).toBe(1)
   })
  
   test("Checking missing element", () => {
  
      const firstFindElement = testList.findFirst('Q')

      expect(firstFindElement).toBe(-1)  
   })
})

describe("List test: method findLast(element)", () => {

   beforeEach(() => { 

      testList = new List() 

      testList.append('k')
      testList.append('i')
      testList.append('d')
      testList.append(' ')
      testList.append('i')
      testList.append('s')

   })
   
   test("Checking last find element in the list", () => {
  
      const lastFindElement = testList.findLast('i')

      expect(lastFindElement).toBe(4)
   })
  
   test("Checking missing element", () => {
  
      const lastFindElement = testList.findLast("Q")

      expect(lastFindElement).toBe(-1)  
   })
})

describe("List test: method clear()", () => {

   beforeEach(() => { 

      testList = new List() 

      testList.append('k')
      testList.append('i')
      testList.append('d')
      testList.append('s')

   })

   test("Checking clear list", () => {

      expect(testList.length()).toBe(4)
    
      testList.clear()
    
      expect(testList.length()).toBe(0)

      const tryGetElement = () => testList.get(0)

      expect(tryGetElement).toThrow('Error. Incorrect index!!!')
   })
})

describe("List test: method extend(elements)", () => {
   
   let addedList

   beforeEach(() => { 

      testList = new List() 

      testList.append('k')
      testList.append('i')
      testList.append('d')
      testList.append('s')

      addedList = new List()

      addedList.append('w')
      addedList.append('o')
      addedList.append('w')

   })
   
   test("Checking extend of the list", () => {

      testList.extend(addedList)
      
      expect(testList.length()).toBe(7)
      expect(addedList.length()).toBe(3)

      expect(testList.get(0)).toBe('k')
      expect(testList.get(1)).toBe('i')
      expect(testList.get(2)).toBe('d')
      expect(testList.get(3)).toBe('s')
      expect(testList.get(4)).toBe('w')
      expect(testList.get(5)).toBe('o')
      expect(testList.get(6)).toBe('w')
   
   })
   
   test("Checking independence of these lists", () => {
   
      testList.extend(addedList)

      testList.append('?')
      testList.append('p')

      const tryGetElement = () => addedList.get(3)
      
      expect(addedList.length()).toBe(3)
      expect(addedList.get(2)).toBe('w')
      expect(tryGetElement).toThrow('Error. Incorrect index!!!')
      
      expect(testList.length()).toBe(9)
      expect(testList.get(8)).toBe('p')

   })
})