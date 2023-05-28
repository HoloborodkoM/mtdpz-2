const LinkedList = require('../source/LinkedList.js')

let testLinkedList

function checkTail(linkedList) {

   let currentNode = linkedList.head

   while (currentNode.next !== linkedList.head) {
      currentNode = currentNode.next
   }

   expect(currentNode.next).toEqual(linkedList.head)
}

describe("LinkedList test: method length()", () => {

   beforeEach(() => { testLinkedList = new LinkedList() })
   
   test("Checking the length of the linked list", () => { 
      
      testLinkedList.append('W')
      testLinkedList.append('h')
      testLinkedList.append('y')
      testLinkedList.append(' ')
      testLinkedList.append('k')
      testLinkedList.append('i')
      testLinkedList.append('d')
      testLinkedList.append('s')
      testLinkedList.append('?')
      
      expect(testLinkedList.length()).toBe(9)
      checkTail(testLinkedList)

   })
   
   test("Checking the length of the empty linked list", () => {

      expect(testLinkedList.length()).toBe(0)

   })
})

describe("LinkedList test: method append(element)", () => {

   beforeEach(() => { testLinkedList = new LinkedList() })
  
   test("Checking the correct addition of elements to the end", () => {
      
      testLinkedList.append('k')
      testLinkedList.append('i')
      testLinkedList.append('d')
      testLinkedList.append('s')
      
      expect(testLinkedList.get(0)).toBe('k')
      expect(testLinkedList.get(1)).toBe('i')
      expect(testLinkedList.get(2)).toBe('d')
      expect(testLinkedList.get(3)).toBe('s')
      checkTail(testLinkedList)

   })
   
   test("Checking element type", () => {
      
      const tryAddCase1 = () => testLinkedList.append(5)
      const tryAddCase2 = () => testLinkedList.append(['1', '2', '3'])
      const tryAddCase3 = () => testLinkedList.append({a: 2})
      const tryAddCase4 = () => testLinkedList.append("Hi there")
      const tryAddCase5 = () => testLinkedList.append('')
      
      expect(testLinkedList.length()).toBe(0)
      
      expect(tryAddCase1).toThrow('Error. Expected character type!!!')
      expect(tryAddCase2).toThrow('Error. Expected character type!!!')
      expect(tryAddCase3).toThrow('Error. Expected character type!!!')
      expect(tryAddCase4).toThrow('Error. Expected character type!!!')
      expect(tryAddCase5).toThrow('Error. Expected character type!!!')

  })
})

describe("LinkedList test: method insert(element, index)", () => {

   beforeEach(() => { testLinkedList = new LinkedList() })
   
   test("Checking insert through index", () => {
      
      testLinkedList.append('i')
      testLinkedList.append('s')

      testLinkedList.insert('k', 0)
      testLinkedList.insert('d', 2)
      testLinkedList.insert('?', testLinkedList.length())

      expect(testLinkedList.length()).toBe(5)

      expect(testLinkedList.get(0)).toBe('k')
      expect(testLinkedList.get(1)).toBe('i')
      expect(testLinkedList.get(2)).toBe('d')
      expect(testLinkedList.get(3)).toBe('s')
      expect(testLinkedList.get(4)).toBe('?')
      checkTail(testLinkedList)
   
   })
   
   test("Checking insert through incorrect index", () => {
      
      testLinkedList.append('k')

      const tryInsertCase1 = () => testLinkedList.insert('r', -1)
      const tryInsertCase2 = () => testLinkedList.insert('r', testLinkedList.length() + 1)
      
      expect(testLinkedList.length()).toBe(1)
      
      expect(tryInsertCase1).toThrow('Error. Incorrect index!!!')
      expect(tryInsertCase2).toThrow('Error. Incorrect index!!!')
      checkTail(testLinkedList)

   })

   test("Checking element type", () => {
      
      const tryInsertCase1 = () => testLinkedList.insert([1, 2, 3], 0)
      const tryInsertCase2 = () => testLinkedList.insert("Ho-ho-ho", testLinkedList.length())
      const tryInsertCase3 = () => testLinkedList.insert({add: 'e'}, 0)
      const tryInsertCase4 = () => testLinkedList.insert(3, 0)
      const tryInsertCase5 = () => testLinkedList.append('', 0)
      
      expect(testLinkedList.length()).toBe(0)
      
      expect(tryInsertCase1).toThrow('Error. Expected character type!!!')
      expect(tryInsertCase2).toThrow('Error. Expected character type!!!')
      expect(tryInsertCase3).toThrow('Error. Expected character type!!!')
      expect(tryInsertCase4).toThrow('Error. Expected character type!!!')
      expect(tryInsertCase5).toThrow('Error. Expected character type!!!')

  })
})

describe("LinkedList test: method delete(element, index)", () => {

   beforeEach(() => { testLinkedList = new LinkedList() })
   
   test("Cheking deleted element through index", () => {

      testLinkedList.append('k')
      testLinkedList.append('i')
      testLinkedList.append('d')
      testLinkedList.append('s')
      
      const deletedElement1 = testLinkedList.delete(0)
      const deletedElement2 = testLinkedList.delete(testLinkedList.length() - 1)
      
      expect(testLinkedList.length()).toBe(2)
      
      expect(deletedElement1).toBe('k')
      expect(deletedElement2).toBe('s')

      expect(testLinkedList.get(0)).toBe('i')
      expect(testLinkedList.get(1)).toBe('d')
      checkTail(testLinkedList)
   
   })

   test("Checking delet through incorrect index", () => {
      
      testLinkedList.append('k')

      const tryDeleteCase1 = () => testLinkedList.delete(-1)
      const tryDeleteCase2 = () => testLinkedList.delete(testLinkedList.length())
      
      expect(testLinkedList.length()).toBe(1)
      
      expect(tryDeleteCase1).toThrow('Error. Incorrect index!!!')
      expect(tryDeleteCase2).toThrow('Error. Incorrect index!!!')
      checkTail(testLinkedList)

   })
})

describe("LinkedList test: method deleteAll(element)", () => {

   beforeEach(() => { testLinkedList = new LinkedList() })
   
   test("Checking to remove all matching elements", () => {
      
      testLinkedList.append('t')
      testLinkedList.append('k')
      testLinkedList.append('t')
      testLinkedList.append('i')
      testLinkedList.append('t')
      testLinkedList.append('t')
      testLinkedList.append('t')
      testLinkedList.append('d')
      testLinkedList.append('s')
      testLinkedList.append('t')
      
      testLinkedList.deleteAll('t')
      
      expect(testLinkedList.length()).toBe(4)

      expect(testLinkedList.get(0)).toBe('k')
      expect(testLinkedList.get(1)).toBe('i')
      expect(testLinkedList.get(2)).toBe('d')
      expect(testLinkedList.get(3)).toBe('s')
      checkTail(testLinkedList)
   
   })
   
   test("Checking for non-existent element in the linked list -> do nothing", () => {
      
      testLinkedList.append('k')
      testLinkedList.append('i')
      testLinkedList.append('d')
      testLinkedList.append('s')

      testLinkedList.deleteAll('n')

      expect(testLinkedList.length()).toBe(4)

      expect(testLinkedList.get(0)).toBe('k')
      expect(testLinkedList.get(1)).toBe('i')
      expect(testLinkedList.get(2)).toBe('d')
      expect(testLinkedList.get(3)).toBe('s')
      checkTail(testLinkedList)

   })
})

describe("LinkedList test: method get(index)", () => {
   
   beforeEach(() => { testLinkedList = new LinkedList() })
   
   test("Checking element by index", () => {

      testLinkedList.append('k')
      testLinkedList.append('i')
      testLinkedList.append('d')
      testLinkedList.append('s')

      expect(testLinkedList.get(0)).toBe('k')
      expect(testLinkedList.get(1)).toBe('i')
      expect(testLinkedList.get(2)).toBe('d')
      expect(testLinkedList.get(3)).toBe('s')

   })
   
   test("Checking element by incorrect index", () => {

      testLinkedList.append('k')

      const tryGetElementCase1 = () => testLinkedList.get(-1)
      const tryGetElementCase2 = () => testLinkedList.get(testLinkedList.length())
      
      expect(testLinkedList.length()).toBe(1)
      
      expect(tryGetElementCase1).toThrow('Error. Incorrect index!!!')
      expect(tryGetElementCase2).toThrow('Error. Incorrect index!!!')
      checkTail(testLinkedList)
   
   })
})

describe("LinkedList test: method clone()", () => {

   beforeEach(() => { 

      testLinkedList = new LinkedList() 

      testLinkedList.append('k')
      testLinkedList.append('i')
      testLinkedList.append('d')
      testLinkedList.append('s')

   })
   
   test("Cheking clone of the linked list", () => {

      const cloneLinkedList = testLinkedList.clone()
      
      expect(cloneLinkedList.get(0)).toBe('k')
      expect(cloneLinkedList.get(1)).toBe('i')
      expect(cloneLinkedList.get(2)).toBe('d')
      expect(cloneLinkedList.get(3)).toBe('s')
      checkTail(testLinkedList)
   
   })
   
   test("Checking independence of these lists", () => {
      
      const cloneLinkedList = testLinkedList.clone()
      
      testLinkedList.append('?')
      testLinkedList.append('p')

      const tryGetElement = () => cloneLinkedList.get(4)
      
      expect(cloneLinkedList.length()).toBe(4)
      expect(cloneLinkedList.get(3)).toBe('s')
      expect(tryGetElement).toThrow('Error. Incorrect index!!!')
      expect(cloneLinkedList.head).not.toEqual(testLinkedList.head)
      checkTail(cloneLinkedList)
      
      expect(testLinkedList.length()).toBe(6)
      expect(testLinkedList.get(5)).toBe('p')
      checkTail(testLinkedList)

   })
})

describe("LinkedList test: method reverse()", () => {

   beforeEach(() => { testLinkedList = new LinkedList() })
   
   test("Checking reverse of the linked list", () => {
      
      testLinkedList.append('k')
      testLinkedList.append('i')
      testLinkedList.append('d')
      testLinkedList.append('s')
      
      testLinkedList.reverse()

      expect(testLinkedList.get(0)).toBe('s')
      expect(testLinkedList.get(1)).toBe('d')
      expect(testLinkedList.get(2)).toBe('i')
      expect(testLinkedList.get(3)).toBe('k')
      checkTail(testLinkedList)

  })
})

describe("LinkedList test: method findFirst(element)", () => {

   beforeEach(() => { 

      testLinkedList = new LinkedList() 

      testLinkedList.append('k')
      testLinkedList.append('i')
      testLinkedList.append('d')
      testLinkedList.append(' ')
      testLinkedList.append('i')
      testLinkedList.append('s')

   })
   
   test("Checking first find element in the linked list", () => {
      
      const firstFindElement = testLinkedList.findFirst('i')
      
      expect(firstFindElement).toBe(1)
   })
  
   test("Checking missing element", () => {
  
      const firstFindElement = testLinkedList.findFirst('Q')

      expect(firstFindElement).toBe(-1)  
   })
})

describe("LinkedList test: method findLast(element)", () => {

   beforeEach(() => { 

      testLinkedList = new LinkedList() 

      testLinkedList.append('k')
      testLinkedList.append('i')
      testLinkedList.append('d')
      testLinkedList.append(' ')
      testLinkedList.append('i')
      testLinkedList.append('s')

   })
   
   test("Checking last find element in the linked list", () => {
  
      const lastFindElement = testLinkedList.findLast('i')

      expect(lastFindElement).toBe(4)
   })
  
   test("Checking missing element", () => {
  
      const lastFindElement = testLinkedList.findLast("Q")

      expect(lastFindElement).toBe(-1)  
   })
})

describe("LinkedList test: method clear()", () => {

   beforeEach(() => { 

      testLinkedList = new LinkedList() 

      testLinkedList.append('k')
      testLinkedList.append('i')
      testLinkedList.append('d')
      testLinkedList.append('s')

   })

   test("Checking clear list", () => {

      expect(testLinkedList.length()).toBe(4)
    
      testLinkedList.clear()
    
      expect(testLinkedList.length()).toBe(0)

      const tryGetElement = () => testLinkedList.get(0)

      expect(tryGetElement).toThrow('Error. Incorrect index!!!')
   })
})

describe("LinkedList test: method extend(elements)", () => {

   let addedLinkedList;
   
   beforeEach(() => { 

      testLinkedList = new LinkedList() 

      testLinkedList.append('k')
      testLinkedList.append('i')
      testLinkedList.append('d')
      testLinkedList.append('s')

      addedLinkedList = new LinkedList()

      addedLinkedList.append('w')
      addedLinkedList.append('o')
      addedLinkedList.append('w')

   })
   
   test("Checking extend of the linked list", () => {

      testLinkedList.extend(addedLinkedList)
      
      expect(testLinkedList.length()).toBe(7)
      expect(addedLinkedList.length()).toBe(3)

      expect(testLinkedList.get(0)).toBe('k')
      expect(testLinkedList.get(1)).toBe('i')
      expect(testLinkedList.get(2)).toBe('d')
      expect(testLinkedList.get(3)).toBe('s')
      expect(testLinkedList.get(4)).toBe('w')
      expect(testLinkedList.get(5)).toBe('o')
      expect(testLinkedList.get(6)).toBe('w')
      checkTail(testLinkedList)
   
   })
   
   test("Checking independence of these lists", () => {
   
      testLinkedList.extend(addedLinkedList)

      testLinkedList.append('?')
      testLinkedList.append('p')

      const tryGetElement = () => addedLinkedList.get(3)
      
      expect(addedLinkedList.length()).toBe(3)
      expect(addedLinkedList.get(2)).toBe('w')
      expect(tryGetElement).toThrow('Error. Incorrect index!!!')
      expect(addedLinkedList.head).not.toEqual(testLinkedList.head)
      checkTail(addedLinkedList)
      
      expect(testLinkedList.length()).toBe(9)
      expect(testLinkedList.get(8)).toBe('p')
      checkTail(testLinkedList)

   })
})

describe("Linked List test: method result(elements)", () => {
   
   beforeEach(() => { testLinkedList = new LinkedList() })
   
   test("Checking result string of the linked list", () => {

      testLinkedList.append('W')
      testLinkedList.append('h')
      testLinkedList.append('y')
      testLinkedList.append(' ')
      testLinkedList.append('k')
      testLinkedList.append('i')
      testLinkedList.append('d')
      testLinkedList.append('s')
      testLinkedList.append('?')
      
      expect(testLinkedList.result()).toBe('Why kids?')
   })

   test("Checking empty linked list", () => {

      expect(testLinkedList.result()).toBe('')
      
   })
})