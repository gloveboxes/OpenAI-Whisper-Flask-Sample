"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[163],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,d=u["".concat(p,".").concat(h)]||u[h]||m[h]||r;return n?o.createElement(d,i(i({ref:t},l),{},{components:n})):o.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(4137));const r={},i="OpenAI Functions",s={unversionedId:"OpenAI-Functions",id:"OpenAI-Functions",title:"OpenAI Functions",description:"This sample uses OpenAI Functions extensive to power the home assistant. OpenAI Functions enables you to describe functions to gpt-3.5-turbo-0613 and gpt-4-0613 models and later, and have the GPT model intelligently select which function (if any) best matches the data in the prompt. The function definitions along with the prompt are passed to the OpenAI Chat Completion API. The GPT model then determines which function best matches the prompt and populates a JSON object using the function JSON schema and prompt data. If there is a successful match, the chat completion API returns the function name and the JSON object/entity.",source:"@site/docs/15-OpenAI-Functions.md",sourceDirName:".",slug:"/OpenAI-Functions",permalink:"/OpenAI-Whisper-Transcriber-Sample/OpenAI-Functions",draft:!1,editUrl:"https://github.com/gloveboxes/OpenAI-Whisper-Transcriber-Sample/tree/master/docs/docs/15-OpenAI-Functions.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/OpenAI-Whisper-Transcriber-Sample/"},next:{title:"Whisper server setup",permalink:"/OpenAI-Whisper-Transcriber-Sample/Whisper-Server/Whisper-Server-Setup"}},p={},c=[{value:"OpenAI Function Examples",id:"openai-function-examples",level:3},{value:"Home assistant OpenAI Functions",id:"home-assistant-openai-functions",level:2},{value:"How the code works",id:"how-the-code-works",level:3}],l={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"openai-functions"},"OpenAI Functions"),(0,a.kt)("p",null,"This sample uses OpenAI Functions extensive to power the home assistant. OpenAI Functions enables you to describe functions to gpt-3.5-turbo-0613 and gpt-4-0613 models and later, and have the GPT model intelligently select which function (if any) best matches the data in the prompt. The function definitions along with the prompt are passed to the OpenAI Chat Completion API. The GPT model then determines which function best matches the prompt and populates a JSON object using the function JSON schema and prompt data. If there is a successful match, the chat completion API returns the function name and the JSON object/entity."),(0,a.kt)("p",null,"It's important to note that the model doesn't magically call the function on your behalf, that's your codes job, you are returned a function name and arguments and it's up to your code to determine what to do with the data. You can read more about OpenAI Functions in the ",(0,a.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/gpt/function-calling"},"OpenAI Functions documentation"),"."),(0,a.kt)("h3",{id:"openai-function-examples"},"OpenAI Function Examples"),(0,a.kt)("p",null,"Here are two examples of OpenAI Functions. Take a moment to review the following JSON OpenAI Function definitions, you'll see a function name, description, parameters and and a series of properties that describe the function and its schema. You can define and pass multiple function definitions to the OpenAI Chat Completion API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "get_current_weather",\n    "description": "Get the current weather in a given location",\n    "parameters": {\n        "type": "object",\n        "properties": {\n            "location": {\n                "type": "string",\n                "description": "The city and state, e.g. San Francisco, CA"\n            },\n            "unit": {\n                "type": "string",\n                "enum": ["celsius", "fahrenheit"]\n            }\n        },\n        "required": ["location"]\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'light_state = {\n    "name": "set_light_state",\n    "description": "Turn a light on or off and sets it to a given color and brightness",\n    "parameters": {\n        "type": "object",\n        "properties": {\n            "device": {\n                "type": "string",\n                "description": "The name of the light"\n            },\n            "state": {\n                "type": "string",\n                "enum": ["on", "off"]\n            },\n            "brightness": {\n                "type": "string",\n                "enum": ["low", "medium", "high"]\n            },\n            "color": {\n                "type": "string",\n                "enum": ["red", "white", "blue", "green", "yellow", "purple", "orange", "pink", "cyan", "magenta", "lime", "indigo", "teal", "olive", "brown", "black", "grey", "silver", "gold", "bronze", "platinum", "rainbow"]\n            }\n        },\n        "required": ["device"]\n    }\n}\n')),(0,a.kt)("h2",{id:"home-assistant-openai-functions"},"Home assistant OpenAI Functions"),(0,a.kt)("p",null,"This home assistant uses the following OpenAI Functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"get_current_weather: for getting weather data from ",(0,a.kt)("a",{parentName:"li",href:"https://www.weatherapi.com/"},"https://www.weatherapi.com/")," and using to ground a GPT prompt."),(0,a.kt)("li",{parentName:"ul"},"light_state: for controlling imaginary lights"),(0,a.kt)("li",{parentName:"ul"},"washing_machine_state: for controlling imaginary washing machines"),(0,a.kt)("li",{parentName:"ul"},"lock_state: for controlling imaginary locks")),(0,a.kt)("h3",{id:"how-the-code-works"},"How the code works"),(0,a.kt)("p",null,"The code defines the role prompts, a list of OpenAI Functions, the temperature, and maximum number of tokens. The ",(0,a.kt)("inlineCode",{parentName:"p"},"openai_functions")," contains a list of all the OpenAI Function definitions. To learn more about OpenAI Functions, see the ",(0,a.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/gpt/function-calling"},"OpenAI Functions documentation"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\n```python\nresponse_1 = openai.ChatCompletion.create(\n    model="gpt-3.5-turbo-0613",\n    messages=[\n        {"role": "system", "content": "You are a home automation assistant and you can only help with home automation. Device types limited to those listed in functions. Ask for the device name. Device names have no spaces."},\n        {"role": "system", "content": "Start all responses with \'I\'m a home automation assistant\'."},\n        {"role": "assistant", "content": last_assistant_message},\n        {"role": "user", "content": text},\n    ],\n    functions=openai_functions,\n    temperature=0.0,\n    max_tokens=OPENAI_MAX_TOKENS,\n)\n')))}m.isMDXComponent=!0}}]);