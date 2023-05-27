class List {

   constructor() {
      this.list = [];
   }

   length() {
      return this.list.length;
   }

   append(element) {
      this.list.push(element);
   }

}

module.exports = List;