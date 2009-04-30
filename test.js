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

x.test();
var y = x.test1;
if y == 6
print("i have a clue");
else
print("no clue what so ever")