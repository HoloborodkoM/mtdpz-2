class Node {

   constructor(element) {

      this.element = element;
      this.next = this;

   }

}

class LinkedList {

   constructor() {   
      this.head = null;
   }

   length() {

      if (!this.head) return 0;
      
      let currentNode = this.head;
      let count = 1;

      while (currentNode.next !== this.head) {

         currentNode = currentNode.next;
         count++;

      }

      return count;
   }

   append(element) {

      if (typeof(element) !== 'string' || element.length !== 1) {
         throw new Error('Error. Expected character type!!!');
      }
      
      const newNode = new Node(element);

      if (!this.head) {
         this.head = newNode;
      } else {

         let lastNode = this.head;

         while (lastNode.next !== this.head) {
            lastNode = lastNode.next;
         }

         lastNode.next = newNode;
      }

      newNode.next = this.head;
   }

   insert(element, index) {

      if (typeof(element) !== 'string' || element.length !== 1) {
         throw new Error('Error. Expected character type!!!');
      }

      if (index < 0 || index > this.length()) {
         throw new Error('Error. Incorrect index!!!');
      }
   
      const newNode = new Node(element);
      
      if (!this.head) {
         this.head = newNode;
      } else {

         let currentNode = this.head;
   
         if (index === 0) {

            newNode.next = this.head;

            while (currentNode.next !== this.head) {
               currentNode = currentNode.next;
            }

            currentNode.next = newNode;
            this.head = newNode;

         } else {

            let previousNode = null;
            let count = 0;
            
            while (count < index) {

               previousNode = currentNode;
               currentNode = currentNode.next;
               count++;

            }

            newNode.next = currentNode;
            previousNode.next = newNode;

         }
      }
   }

   delete(index) {

      if (index < 0 || index >= this.length()) {
         throw new Error('Error. Incorrect index!!!');
      }

      let currentNode = this.head;
      let deletedNode = null;
   
      if (index === 0) {

         if (this.length() === 1) {
           this.head = null;
         } else {

            while (currentNode.next !== this.head) {
               currentNode = currentNode.next;
            }
            
            deletedNode = currentNode.next
            this.head = this.head.next;
            currentNode.next = this.head;
         }

         return deletedNode.element;
      }
      
      let count = 1;
   
      while (count < index) {

         currentNode = currentNode.next;
         count++;

      }
   
      deletedNode = currentNode.next;
      currentNode.next = currentNode.next.next;
   
      return deletedNode.element;
   }

   deleteAll(element) {

      if (typeof(element) !== 'string' || element.length !== 1) {
         throw new Error('Error. Expected character type!!!');
      }
      
      let currentNode = this.head;
      let previousNode = null;
  
      do {

         if (currentNode.element === element) {

            if (previousNode) {

               previousNode.next = currentNode.next;
               currentNode = currentNode.next;

            } else {

            while (currentNode.next !== this.head) {
               currentNode = currentNode.next;
            }
            
            this.head = this.head.next;
            currentNode.next = this.head;
            currentNode = this.head;

            }

         } else {

            previousNode = currentNode;
            currentNode = currentNode.next;
         }

      } while (currentNode.next !== this.head)

      if (currentNode.element === element) {

         previousNode.next = currentNode.next;
         currentNode = currentNode.next;

      }
   }

   get(index) {
      
      if (index < 0 || index >= this.length()) {
         throw new Error('Error. Incorrect index!!!')
      }

      let currentNode = this.head;
      let count = 0;
      
      while (count < index) {

         currentNode = currentNode.next;
         count++;

      }

      return currentNode.element;
   }

   clone() {

      const cloneList = new LinkedList();

      if (this.head) {

         const cloneHead = new Node(this.head.element);
         cloneList.head = cloneHead;
         
         let currentNode = this.head.next;
         let cloneNode = cloneHead;
         
         while (currentNode !== this.head) {

            const newNode = new Node(currentNode.element);

            cloneNode.next = newNode;
            cloneNode = newNode;
            currentNode = currentNode.next;

         }
         
         cloneNode.next = cloneHead;
      }
      
      return cloneList;
   }

   reverse() {
      
      let currentNode = this.head;
      let previousNode = null;
      let nextNode;
  
      while (currentNode) {

        nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;

      }
  
      this.head = previousNode.next;
   }

   result() {

      let string = "";
      let currentNode = this.head;

      while (currentNode.next !== this.head) {

         string += currentNode.element;
         currentNode = currentNode.next;

      }

      string += currentNode.element;

      return string;
   }
}

module.exports = LinkedList;