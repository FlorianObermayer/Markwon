(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{238:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Use "),a("router-link",{attrs:{to:"/docs/v3/syntax-highlight/"}},[t._v("syntax-highlight")]),t._v(" to add syntax highlighting\nto your application")],1)]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Please note that "),a("code",[t._v("Markwon")]),t._v(" will apply "),a("code",[t._v("LinkMovementMethod")]),t._v(" to a resulting TextView\nif there is none registered. if you wish to register own instance of a "),a("code",[t._v("MovementMethod")]),t._v("\napply it directly to a TextView or use "),a("router-link",{attrs:{to:"/docs/v3/core/movement-method-plugin.html"}},[t._v("MovementMethodPlugin")])],1)]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("One must explicitly use "),a("router-link",{attrs:{to:"/docs/v3/html/"}},[t._v("HtmlPlugin")]),t._v(" in order to display\nHTML content in markdown. Without specified HTML parser "),a("strong",[t._v("no HTML content\nwill be rendered")]),t._v(".")],1),t._v(" "),t._m(30),t._m(31)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("MarkwonConfiguration")]),this._v(" class holds common Markwon functionality.\nThese are "),s("em",[this._v("configurable")]),this._v(" properties:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("SyntaxHighlight")])]),t._v(" "),a("li",[a("code",[t._v("LinkSpan.Resolver")])]),t._v(" "),a("li",[a("code",[t._v("UrlProcessor")])]),t._v(" "),a("li",[a("code",[t._v("ImageSizeResolver")])]),t._v(" "),a("li",[a("code",[t._v("MarkwonHtmlParser")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Additionally "),a("code",[t._v("MarkwonConfiguration")]),t._v(" holds:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("MarkwonTheme")])]),t._v(" "),a("li",[a("code",[t._v("AsyncDrawableLoader")])]),t._v(" "),a("li",[a("code",[t._v("MarkwonHtmlRenderer")])]),t._v(" "),a("li",[a("code",[t._v("MarkwonSpansFactory")])])]),t._v(" "),a("p",[t._v("Please note that these values can be retrieved from "),a("code",[t._v("MarkwonConfiguration")]),t._v("\ninstance, but their "),a("em",[t._v("configuration")]),t._v(" must be done by a "),a("code",[t._v("Plugin")]),t._v(" by overriding\none of the methods:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Plugin#configureTheme")])]),t._v(" "),a("li",[a("code",[t._v("Plugin#configureImages")])]),t._v(" "),a("li",[a("code",[t._v("Plugin#configureHtmlRenderer")])]),t._v(" "),a("li",[a("code",[t._v("Plugin#configureSpansFactory")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"syntaxhighlight"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntaxhighlight","aria-hidden":"true"}},[this._v("#")]),this._v(" SyntaxHighlight")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Markwon markwon "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Markwon"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("builder")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("usePlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("AbstractMarkwonPlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("configureConfiguration")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" MarkwonConfiguration"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("syntaxHighlight")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("SyntaxHighlightNoOp")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("build")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"linkspan-resolver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linkspan-resolver","aria-hidden":"true"}},[this._v("#")]),this._v(" LinkSpan.Resolver")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("React to a link click event. By default "),a("code",[t._v("LinkResolverDef")]),t._v(" is used,\nwhich tries to start an Activity given the "),a("code",[t._v("link")]),t._v(" argument. If no\nActivity can handle "),a("code",[t._v("link")]),t._v(" "),a("code",[t._v("LinkResolverDef")]),t._v(" silently ignores click event")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Markwon markwon "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Markwon"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("builder")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("usePlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("AbstractMarkwonPlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("configureConfiguration")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" MarkwonConfiguration"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("linkResolver")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LinkSpan"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Resolver")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n                    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("View view"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" String link"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),a("span",{attrs:{class:"token comment"}},[t._v("// react to link click here")]),t._v("\n                    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("build")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"urlprocessor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#urlprocessor","aria-hidden":"true"}},[this._v("#")]),this._v(" UrlProcessor")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Process URLs in your markdown (for links and images). If not provided explicitly,\ndefault "),s("strong",[this._v("no-op")]),this._v(" implementation will be used, which does not modify URLs (keeping them as-is).")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("Markwon")]),this._v(" provides 2 implementations of "),s("code",[this._v("UrlProcessor")]),this._v(":")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("UrlProcessorRelativeToAbsolute")])]),this._v(" "),s("li",[s("code",[this._v("UrlProcessorAndroidAssets")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"urlprocessorrelativetoabsolute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#urlprocessorrelativetoabsolute","aria-hidden":"true"}},[this._v("#")]),this._v(" UrlProcessorRelativeToAbsolute")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("UrlProcessorRelativeToAbsolute")]),t._v(" can be used to make relative URL absolute. For example if an image is\ndefined like this: "),a("code",[t._v("![img](./art/image.JPG)")]),t._v(" and "),a("code",[t._v("UrlProcessorRelativeToAbsolute")]),t._v("\nis created with "),a("code",[t._v("https://github.com/noties/Markwon/raw/master/")]),t._v(" as the base:\n"),a("code",[t._v('new UrlProcessorRelativeToAbsolute("https://github.com/noties/Markwon/raw/master/")')]),t._v(",\nthen final image will have "),a("code",[t._v("https://github.com/noties/Markwon/raw/master/art/image.JPG")]),t._v("\nas the destination.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"urlprocessorandroidassets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#urlprocessorandroidassets","aria-hidden":"true"}},[this._v("#")]),this._v(" UrlProcessorAndroidAssets")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("UrlProcessorAndroidAssets")]),this._v(" can be used to make processed links to point to Android assets folder.\nSo an image: "),s("code",[this._v("![img](./art/image.JPG)")]),this._v(" will have "),s("code",[this._v("file:///android_asset/art/image.JPG")]),this._v(" as the\ndestination.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Please note that "),a("code",[t._v("UrlProcessorAndroidAssets")]),t._v(" will process only URLs that have no "),a("code",[t._v("scheme")]),t._v(" information,\nso a "),a("code",[t._v("./art/image.png")]),t._v(" will become "),a("code",[t._v("file:///android_asset/art/image.JPG")]),t._v(" whilst "),a("code",[t._v("https://so.me/where.png")]),t._v("\nwill be kept as-is.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("In order to display an image from assets you still need to register "),a("code",[t._v("ImagesPlugin#createWithAssets(Context)")]),t._v("\nplugin in resulting "),a("code",[t._v("Markwon")]),t._v(" instance. As "),a("code",[t._v("UrlProcessorAndroidAssets")]),t._v(" only\n"),a("em",[t._v("processes")]),t._v(" URLs and doesn't take any part in displaying an image.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"imagesizeresolver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#imagesizeresolver","aria-hidden":"true"}},[this._v("#")]),this._v(" ImageSizeResolver")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("ImageSizeResolver")]),this._v(" controls the size of an image to be displayed. Currently it\nhandles only HTML images (specified via "),s("code",[this._v("img")]),this._v(" tag).")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Markwon markwon "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Markwon"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("builder")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("usePlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("AbstractMarkwonPlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("configureConfiguration")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" MarkwonConfiguration"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("imageSizeResolver")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ImageSizeResolver")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v("\n                    "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n                    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Rect "),a("span",{attrs:{class:"token function"}},[t._v("resolveImageSize")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                            "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Nullable")]),t._v(" ImageSize imageSize"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" Rect imageBounds"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" canvasWidth"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            "),a("span",{attrs:{class:"token keyword"}},[t._v("float")]),t._v(" textSize"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" null"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("build")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If not provided explicitly, default "),s("code",[this._v("ImageSizeResolverDef")]),this._v(" implementation will be used.\nIt handles 3 dimension units:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("%")]),t._v(" (percent, relative to Canvas width)")]),t._v(" "),a("li",[a("code",[t._v("em")]),t._v(" (relative to text size)")]),t._v(" "),a("li",[a("code",[t._v("px")]),t._v(" (absolute size, every dimension that is not "),a("code",[t._v("%")]),t._v(" or "),a("code",[t._v("em")]),t._v(" is considered to be "),a("em",[t._v("absolute")]),t._v(")")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("width")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("100%"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("width")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2em"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("height")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("10px"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),a("span",{attrs:{class:"token style-attr language-css"}},[a("span",{attrs:{class:"token attr-name"}},[t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 8em"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("ImageSizeResolverDef")]),this._v(" keeps the ratio of original image if one of the dimensions is missing.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Height%")]),t._v(" "),a("p",[t._v("There is no support for "),a("code",[t._v("%")]),t._v(" units for "),a("code",[t._v("height")]),t._v(" dimension. This is due to the fact that\nheight of an TextView in which markdown is displayed is non-stable and changes with time\n(for example when image is loaded and applied to a TextView it will "),a("em",[t._v("increase")]),t._v(" TextView's height),\nso we will have no point-of-reference from which to "),a("em",[t._v("calculate")]),t._v(" image height.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("ImageSizeResolverDef")]),t._v(" also takes care for an image to "),a("strong",[t._v("not")]),t._v(" exceed\ncanvas width. If an image has greater width than a TextView Canvas, then\nimage will be "),a("em",[t._v("scaled-down")]),t._v(" to fit the canvas. Please note that this rule\napplies only if image has no absolute sizes (for example width is specified\nin pixels).")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"markwonhtmlparser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markwonhtmlparser","aria-hidden":"true"}},[this._v("#")]),this._v(" MarkwonHtmlParser")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Specify which HTML parser to use. Default implementation is "),s("strong",[this._v("no-op")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("Markwon"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("builder")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("usePlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HtmlPlugin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("create")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Please note that adding "),s("code",[this._v("HtmlPlugin")]),this._v(" will take care of initializing parser,\nso after "),s("code",[this._v("HtmlPlugin")]),this._v(" is used, no additional configuration steps are required.")])}],!1,null,null,null);e.options.__file="configuration.md";s.default=e.exports}}]);