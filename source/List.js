class List {

   constructor() {
      this.list = [];
   }

   length() {
      return this.list.length;
   }

   append(element) {

      if (typeof(element) !== 'string' || element.length !== 1) {
         throw new Error('Error. Expected character type!!!');
      }

      this.list.push(element);
   }

   insert(element, index) {

      if (typeof(element) !== 'string' || element.length !== 1) {
         throw new Error('Error. Expected character type!!!');
      }

      if (index < 0 || index > this.list.length) {
         throw new Error('Error. Incorrect index!!!');
      }
   
      this.list.splice(index, 0, element);
   }

   delete(index) {

      if (index < 0 || index >= this.list.length) {
         throw new Error('Error. Incorrect index!!!');
      }

      const value = this.list[index];
      this.list.splice(index, 1);
      
      return value;
   }

   deleteAll(element) {

      if (typeof(element) !== 'string' || element.length !== 1) {
         throw new Error('Error. Expected character type!!!');
      }

      this.list = this.list.filter((item) => item !== element);
   }

   get(index) {
      
      if (index < 0 || index >= this.list.length) {
         throw new Error('Error. Incorrect index!!!');
      }
   
      return this.list[index];
   }

   clone() {

      const cloneList = new List();
      cloneList.list = [...this.list];
      return cloneList;

   }

   reverse() {
      this.list.reverse();
   }

   findFirst(element) {

      if (typeof(element) !== 'string' || element.length !== 1) {
         throw new Error('Error. Expected character type!!!');
      }

      return this.list.indexOf(element);
   }

   findLast(element) {
      
      if (typeof(element) !== 'string' || element.length !== 1) {
         throw new Error('Error. Expected character type!!!');
      }

      return this.list.lastIndexOf(element);
   }

   clear() {
      this.list = [];
   }

   extend(elements) {
      this.list.push(...elements.list);
   }

   result() {
      
      let string = "";

      for(const element of this.list) {
         string += element;
      }

      return string;
   }

}

module.exports = List;