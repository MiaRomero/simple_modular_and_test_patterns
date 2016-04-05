#Simple Modular and Test Patterns, April 5, 2016

##Description:
This program creates a sayHello object that has a 'greet' function.  This greet function will say hello to the name passed as a command line argument.  If no command line argument exists, it will say hello to the name passed in as a parameter (in this case 'Sam'). The sayHello object is exported and then required in index.js, the file the user will execute.

Two tests were created to verify the output.  Test one verifies the function will output a name passed as a parameter if not command line args exist.  Test two uses a command line argument created in the test suite to verify the greet function process command line args.  

Run this exciting program in the command line (with a name as an argument if you choose), with lib/index.js.
