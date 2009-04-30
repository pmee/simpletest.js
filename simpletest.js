var SimpleTest = {
  runTests: function (harness, print_results, label){
    if(typeof(print_results) == 'undefined'){
      this.print_results = false;
    }
    else{
      this.print_results = print_results;
    }
    if(typeof(label) == 'undefined'){
      var label = "";
    }
    this.success = 0;
    this.failure = 0;

    SimpleTest.executeHarness(harness, label);

    if(print_results){
      this.output("Success: " + this.success + "\n");
      this.output("Failure: " + this.failure + "\n");
    }
    return {
      'success': this.success,
      'failure': this.failure
    }
  },

  executeHarness: function(harness, label){
    if(typeof(harness) == "object"){
      for(var func_name in harness){
	if(func_name.match(/^test/i)){
	  this.executeFunction(harness[func_name], label + "." + func_name);
	}
      }
    }
    else if (typeof(harness) == "function"){
      this.executeFunction(harness, label);
    }
  },

  executeFunction: function(func, name){
    if(this.print_results && name){
      this.output("\nRunning " + name)
    }
    var error = false;

    try{
      var return_val = func();
    }
    catch(e){
      error = true;
      if(this.print_results){
	print("Exception caught, test " + name + " failed.  Exception: " + e.name + ": description: " + e.message)
      }
    }
    if(return_val !== false && error !== true){
      this.success += 1;
      if(this.print_results){
	this.output(" ... success\n");
      }
    }
    else {
      this.failure += 1;
      if(this.print_results){
	this.output(" ... failure\n");
      }
    }
  },

  output: function(output){
    if(typeof(print) != 'undefined'){
      print(output);
    }
  },
  assertEquals: function(x, y){
    if(x != y){
      throw new Error("assertEquals failed: " + x + " != " + y);
    }
  },

  assert: function(x){
    if(!x){
      throw new Error("assertion failed: " + x);
    }
  },

  assertFalse: function(x){
    if(x){
      throw new Error("assertFalse failed: " + x);
    }
  },

  assertNotEquals: function(x, y){
    if(x == y){
      throw new Error("assertEquals failed: " + x + " != " + y);
    }
  }

};

