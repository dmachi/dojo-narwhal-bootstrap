require("dojo/dojo");
require("dojo/_base/_loader/bootstrap");
require("dojo/_base/_loader/loader");

dojo._loadModule = dojo.require = function(/*String*/moduleName, /*Boolean?*/omitModuleCheck){
        omitModuleCheck = dojo._global_omit_module_check || omitModuleCheck;

        //Check if it is already loadedojo.
        var module = dojo._loadedModules[moduleName];
        if(module){
                return module;
        }

        var module = require(moduleName.split(".").join("/"));
        return module;
}

//should we pull in base by default?
dojo.require("dojo._base");

