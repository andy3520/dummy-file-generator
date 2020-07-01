import upperFirst from "lodash.upperfirst";
import camelCase from "lodash.camelcase";

const IconsSet = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue) {
    const requireComponent = require.context(
      // The relative path of the components folder
      "./",
      // Whether or not to look in subfolders
      false,
      // The regular expression used to match base component filenames
      /(Icon[A-Z]\w+\.vue$)|(Icon.vue)/
    );

    requireComponent.keys().forEach((fileName) => {
      // Get component config
      const componentConfig = requireComponent(fileName);

      // Get PascalCase name of component
      const baseComponentName = upperFirst(
        camelCase(
          // Gets the file name regardless of folder depth
          fileName
            .split("/")
            .pop()
            .replace(/\.\w+$/, "")
        )
      );

      // Register component globally
      Vue.component(
        componentConfig.default.name || baseComponentName,
        // Look for the component options on `.default`, which will
        // exist if the component was exported with `export default`,
        // otherwise fall back to module's root.
        componentConfig.default || componentConfig
      );
    });
  }
};

export default IconsSet;
