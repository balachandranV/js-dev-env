
 // register bable to transpile before test run
 require("babel-register")();
// disable webpack feature that  moch does't understand
require.extensions['.css']=function() {};
