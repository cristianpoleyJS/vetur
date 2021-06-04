(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{378:function(t,a,s){"use strict";s.r(a);var e=s(44),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"interpolation-support"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interpolation-support"}},[t._v("#")]),t._v(" Interpolation Support")]),t._v(" "),s("p",[t._v("Vue template allows JavaScript-esque expression in four constructs:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org/v2/guide/syntax.html#Directives",target:"_blank",rel:"noopener noreferrer"}},[t._v("Directives"),s("OutboundLink")],1),t._v(" like "),s("code",[t._v('v-if="exp"')])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://vuejs.org/v2/guide/syntax.html#Attributes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Attributes"),s("OutboundLink")],1),t._v(" like "),s("code",[t._v(':id="exp"')])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://vuejs.org/v2/guide/events.html#Method-Event-Handlers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Event Handlers"),s("OutboundLink")],1),t._v(" like "),s("code",[t._v('@click="exp"')])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://vuejs.org/v2/guide/syntax.html#Text",target:"_blank",rel:"noopener noreferrer"}},[t._v("Template Interpolations"),s("OutboundLink")],1),t._v(" like")])]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ exp }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("Other than the "),s("a",{attrs:{href:"https://vuejs.org/v2/guide/filters.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("filter syntax"),s("OutboundLink")],1),t._v(", the expression is 100% JavaScript expression.")]),t._v(" "),s("p",[t._v("Vetur now offers completion, diagnostics, hover, jump to definition, find references for these JavaScript snippets.")]),t._v(" "),s("h2",{attrs:{id:"generic-language-features"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generic-language-features"}},[t._v("#")]),t._v(" Generic Language Features")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("These features are experimental and you need to set "),s("code",[t._v("vetur.experimental.templateInterpolationService: true")]),t._v(" to enable them. You can also only disable template diagnostics with "),s("code",[t._v("vetur.validation.interpolation: false")]),t._v(".")])]),t._v(" "),s("p",[t._v("Currently diagnostics, hover, jump to definition and find references are implemented in this way:")]),t._v(" "),s("ul",[s("li",[t._v("Compile original Vue template into a virtual TypeSript file")]),t._v(" "),s("li",[t._v("Generate a sourcemap between expressions in original "),s("code",[t._v(".vue")]),t._v(" file and the virtual file")]),t._v(" "),s("li",[t._v("Run language feature requests on the virtual TypeScript file")]),t._v(" "),s("li",[t._v("Map results back to original "),s("code",[t._v(".vue")]),t._v(" file")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v('Use the command "Vetur: Show corresponding virtual file and sourcemap" to understand how the\ntemplates are represented in Vetur. Useful for bug filing too.')])]),t._v(" "),s("p",[t._v("If you do find bugs, please "),s("a",{attrs:{href:"https://github.com/vuejs/vetur/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("fill an issue"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("If you want more details as to how this feature is implemented, I wrote a blog post: "),s("a",{attrs:{href:"https://blog.matsu.io/generic-vue-template-interpolation-language-features",target:"_blank",rel:"noopener noreferrer"}},[t._v("Generic Vue Template Interpolation Language Features\n"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"completion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#completion"}},[t._v("#")]),t._v(" Completion")]),t._v(" "),s("p",[t._v("Completion now works a little bit differently than the other language features. Mainly because completion works off a\nSyntactically incomplete file and the generic compiler from Vue template to virtual TypeScript file cannot handle that yet.")]),t._v(" "),s("p",[t._v("Completion:")]),t._v(" "),s("ul",[s("li",[t._v("Collects information from "),s("code",[t._v("<script>")]),t._v(" region by traversing its AST")]),t._v(" "),s("li",[t._v("Offer "),s("code",[t._v("props")]),t._v(", "),s("code",[t._v("data")]),t._v(" and "),s("code",[t._v("methods")]),t._v(" in interpolation regions")]),t._v(" "),s("li",[t._v("Offer "),s("code",[t._v(":prop")]),t._v(" completion on child components")])]),t._v(" "),s("h2",{attrs:{id:"type-checking-with-jsdocs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-checking-with-jsdocs"}},[t._v("#")]),t._v(" Type Checking with JSDocs")]),t._v(" "),s("p",[t._v("You don't have to use "),s("code",[t._v('lang="ts"')]),t._v(" for typing functions. This would show error that "),s("code",[t._v("'foo'")]),t._v(" is not assignable to "),s("code",[t._v("number")])]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ numOnly(post.body) }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @typedef {object} Post\n * @property {string} body\n */")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    post"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n       * @type {import('vue').PropType<Post>}\n       */")]),t._v("\n      type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      required"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @param {number} num\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("numOnly")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"prop-validation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prop-validation"}},[t._v("#")]),t._v(" Prop Validation")]),t._v(" "),s("p",[s("em",[t._v("You can turn on/off this feature with "),s("code",[t._v("vetur.validation.templateProps")]),t._v(".")])]),t._v(" "),s("p",[t._v("Vetur will now validate HTML templates that uses child components. For example, given two children:")]),t._v(" "),s("p",[s("code",[t._v("Simple.vue")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("code",[t._v("Complex.vue")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    foo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      required"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("Vetur will show a warning for "),s("code",[t._v("<simple>")]),t._v(" and an error for "),s("code",[t._v("<complex>")]),t._v(".")]),t._v(" "),s("p",[t._v("The rules are:")]),t._v(" "),s("ul",[s("li",[t._v("When using "),s("a",{attrs:{href:"https://vuejs.org/v2/guide/components-props.html#Prop-Types",target:"_blank",rel:"noopener noreferrer"}},[t._v("array props"),s("OutboundLink")],1),t._v(", show "),s("strong",[t._v("warning")]),t._v(" for missing props.")]),t._v(" "),s("li",[t._v("When using "),s("a",{attrs:{href:"https://vuejs.org/v2/guide/components-props.html#Prop-Validation",target:"_blank",rel:"noopener noreferrer"}},[t._v("object prop validation"),s("OutboundLink")],1),t._v(", show errors for missing "),s("code",[t._v("required")]),t._v(" props.")])]),t._v(" "),s("h2",{attrs:{id:"prop-type-validation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prop-type-validation"}},[t._v("#")]),t._v(" Prop Type Validation")]),t._v(" "),s("p",[s("em",[t._v("You can turn on/off this feature with "),s("code",[t._v("vetur.validation.templateProps")]),t._v(".")])]),t._v(" "),s("p",[t._v("Vetur will now validate that the interpolation expression you pass to child component's props match the props signature. Consider this simple case:")]),t._v(" "),s("p",[s("code",[t._v("Child.vue")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" str"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("code",[t._v("Parent.vue")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("test")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":str")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Test "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Test.vue'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Test "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      num"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("Vetur will generate a diagnostic error on "),s("code",[t._v("str")]),t._v(" in "),s("code",[t._v("Parent.vue")]),t._v(" template "),s("code",[t._v(':str="num"')]),t._v(", with a message that "),s("code",[t._v("type 'number' is not assignable to type 'string'")]),t._v(".")]),t._v(" "),s("p",[t._v("Supported:")]),t._v(" "),s("ul",[s("li",[t._v("JS file with "),s("code",[t._v("export default {...}")])]),t._v(" "),s("li",[t._v("TS file with "),s("code",[t._v("defineComponent")]),t._v(" in Vue 3 or "),s("code",[t._v("Vue.extend")]),t._v(" in Vue 2")]),t._v(" "),s("li",[t._v("Prop Type: "),s("code",[t._v("foo: String")]),t._v(", "),s("code",[t._v("foo: { type: String }")]),t._v(" or "),s("code",[t._v("foo: String as PropType<string>")]),t._v(" or "),s("code",[t._v("foo: String as Vue.PropType<string>")]),t._v(" "),s("ul",[s("li",[t._v("This is useful in the case of "),s("code",[t._v("foo: Array")]),t._v(". If you are using JS, there's no way to say "),s("code",[t._v("foo is a string array")]),t._v(", however with TS you can use "),s("code",[t._v("foo: Array as PropType<string[]>")]),t._v(". Vetur will then check that the provided expression matches "),s("code",[t._v("string[]")]),t._v(".")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);