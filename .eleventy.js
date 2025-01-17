const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginWebc, {
		components: "_includes/components/**/*.webc"
	});
    
    return {
        dir: {
            input: "input",
            output: "_site",
            includes: "../_includes"
        }
    };
};