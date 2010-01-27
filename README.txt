This is a small package for loading dojo modules.

To Install:

- Copy the package into your narwhal/packages directory.
- Put a copy of the dojo (and optionally dojox) modules in the narwhal/packages/dojo/lib/ directory.
  You should end up having a dojo.js (from this package), a dojo directory containing dojo core, and 
  a dojox directory containing the dojox checkout/src al inside of this directory.

	cd narwhal/packages/dojo/lib
	svn co http://svn.dojotoolkit.org/src/dojo/trunk dojo
	svn co http://svn.dojotoolkit.org/src/dojox/trunk dojox


To Use:

// load dojo base
js> require('dojo');

// then just use dojo like normal.  For example, for DTL:
js> dojo.require('dojox.dtl');
[object Object]
js> var t = new dojox.dtl.Template("{{test||upper}}");
js> var c = new dojox.dtl._Context({test: "hello world"});
js> t.render(c);
HELLO WORLD


