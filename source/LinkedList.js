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