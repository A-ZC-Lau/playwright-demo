module.exports = {
	"env" : {
		"es2021" : true,
		"node" : true,
	},
	"extends" : [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
	],
	"parser" : "@typescript-eslint/parser",
	"parserOptions" : {
		"ecmaVersion" : 13,
		"sourceType" : "module",
	},
	"plugins" : [
		"@typescript-eslint",
	],
	"rules" : {
		"@typescript-eslint/no-explicit-any" : ["off"],
		"@typescript-eslint/no-this-alias" : "off",
		"@typescript-eslint/explicit-module-boundary-types" : "off",
		"@typescript-eslint/type-annotation-spacing" : [
			"error",
			{
				"before" : true,
			},
		],
		"comma-dangle" : ["error", "always-multiline"],
		"eol-last" : ["error", "always"],
		"key-spacing" : ["error", { "beforeColon" : true }],
		"indent" : [
			"error",
			"tab",
			{
				"SwitchCase" : 1,
			},
		],
		"linebreak-style" : [
			"error",
			"unix",
		],
		"no-inner-declarations" : "off",
		"no-trailing-spaces" : "error",
		"quotes" : [
			"error",
			"double",
			{
				"allowTemplateLiterals" : true,
				"avoidEscape" : true,
			},
		],
		"semi" : [
			"error",
			"always",
		],
		"no-undef" : "error",
	},
	"overrides" : [
		{
			"files" : ["*.ts"],
			"rules" : {
				"no-undef" : "off",
			},
		},
	],
};
