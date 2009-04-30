var x = {
  test: function(){
    print("Setting test1\n");
    this.test1 += 1;
  },
  printTest1: function(){
    print("Test1: " + this.test1);
  },
  test1: 5
};

var x = {
  test1: 5,
  test2: 6
};