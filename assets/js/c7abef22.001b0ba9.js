"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99],{4137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,u=d["".concat(o,".").concat(h)]||d[h]||c[h]||i;return n?r.createElement(u,l(l({ref:t},m),{},{components:n})):r.createElement(u,l({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(4137));const i={},l="Systems without an NVidia GPU",p={unversionedId:"Whisper-Server/Whisper-Server-no-GPU",id:"Whisper-Server/Whisper-Server-no-GPU",title:"Systems without an NVidia GPU",description:"The Whisper Transcriber Service runs on Windows, macOS, and Linux systems without an NVidia GPU, it'll just run slower as the Whisper model run on the CPU.",source:"@site/docs/30-Whisper-Server/23-Whisper-Server-no-GPU.md",sourceDirName:"30-Whisper-Server",slug:"/Whisper-Server/Whisper-Server-no-GPU",permalink:"/OpenAI-Whisper-Transcriber-Sample/Whisper-Server/Whisper-Server-no-GPU",draft:!1,editUrl:"https://github.com/gloveboxes/OpenAI-Whisper-Transcriber-Sample/tree/master/docs/docs/30-Whisper-Server/23-Whisper-Server-no-GPU.md",tags:[],version:"current",sidebarPosition:23,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ubuntu with an NVidia GPU",permalink:"/OpenAI-Whisper-Transcriber-Sample/Whisper-Server/Whisper-Server-Ubuntu"},next:{title:"Whisper Client Setup",permalink:"/OpenAI-Whisper-Transcriber-Sample/Whisper-Client/Whisper-Client-Setup"}},o={},s=[{value:"Install system dependencies",id:"install-system-dependencies",level:2},{value:"Install Windows 11 dependencies",id:"install-windows-11-dependencies",level:3},{value:"Install macOS dependencies",id:"install-macos-dependencies",level:3},{value:"Install Ubuntu 20.04 dependencies",id:"install-ubuntu-2004-dependencies",level:3},{value:"Start the Whisper Transcriber Service",id:"start-the-whisper-transcriber-service",level:2}],m={toc:s},d="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"systems-without-an-nvidia-gpu"},"Systems without an NVidia GPU"),(0,a.kt)("p",null,"The Whisper Transcriber Service runs on Windows, macOS, and Linux systems without an NVidia GPU, it'll just run slower as the Whisper model run on the CPU."),(0,a.kt)("p",null,"From limited testing, the multilingual and the English-only OpenAI Whisper models for ",(0,a.kt)("inlineCode",{parentName:"p"},"tiny(.en)"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"small(.en)"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"medium(.en)")," models ran with acceptable performance on Windows 11 with a modern CPU and on a MacBook M2 Air with 16 GB of RAM."),(0,a.kt)("h2",{id:"install-system-dependencies"},"Install system dependencies"),(0,a.kt)("p",null,"Follow the instructions for your operating system."),(0,a.kt)("h3",{id:"install-windows-11-dependencies"},"Install Windows 11 dependencies"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("inlineCode",{parentName:"li"},"FFmpeg"),".",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"You can download the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-win64-gpl.zip"},"latest release")," from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/BtbN/FFmpeg-Builds/releases"},"FFmpeg-Builds"),"."),(0,a.kt)("li",{parentName:"ol"},"Unzip the downloaded FFmpeg file and move to your preferred app folder."),(0,a.kt)("li",{parentName:"ol"},"From ",(0,a.kt)("inlineCode",{parentName:"li"},"System Properties"),", select ",(0,a.kt)("inlineCode",{parentName:"li"},"Environment Variables"),", and add the path to the FFmpeg bin folder to the path."),(0,a.kt)("li",{parentName:"ol"},"Test FFmpeg. From a new terminal window, run ",(0,a.kt)("inlineCode",{parentName:"li"},"ffmpeg -version"),".")))),(0,a.kt)("h3",{id:"install-macos-dependencies"},"Install macOS dependencies"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"FFmpeg")),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open a terminal window.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install ",(0,a.kt)("a",{parentName:"p",href:"https://docs.brew.sh/Installation"},"Homebrew"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install FFmpeg. Run"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install ffmpeg\n")))))),(0,a.kt)("h3",{id:"install-ubuntu-2004-dependencies"},"Install Ubuntu 20.04 dependencies"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("inlineCode",{parentName:"li"},"FFmpeg")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"pip3"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Open a terminal window."),(0,a.kt)("li",{parentName:"ol"},"Run:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install ffmpeg python3-pip python3-venv\n")))))),(0,a.kt)("h2",{id:"start-the-whisper-transcriber-service"},"Start the Whisper Transcriber Service"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From a terminal window.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Clone the Whisper Transcriber Sample to your preferred repo folder."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/gloveboxes/OpenAI-Whisper-Transcriber-Sample.git\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," folder."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd OpenAI-Whisper-Transcriber-Sample/server\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a Python virtual environment."),(0,a.kt)("admonition",{parentName:"li",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"At the time of writing (June 2023), the ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/openai-whisper"},"Whisper Python library")," is supported on Python 3.8 to 3.10. The Whisper library worked on Python 3.11.3, but not Python 3.11.4. Be sure to check the version of Python you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"python3 --version"),".")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv .whisper-venv\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Activate the Python virtual environment."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"source whisper-server/bin/activate\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the required Python libraries."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install -r requirements.txt\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Review the following chart is taken from the ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/openai-whisper/"},"OpenAI Whisper Project Description")," page and select the model that will fit in the RAM of your computer. At the time of writing, Whisper multilingual models include ",(0,a.kt)("inlineCode",{parentName:"p"},"tiny"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"small"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"medium"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"large"),", and English-only models include ",(0,a.kt)("inlineCode",{parentName:"p"},"tiny.en"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"small.en"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"medium.en"),".\n",(0,a.kt)("img",{src:n(6120).Z,width:"1583",height:"568"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update the ",(0,a.kt)("inlineCode",{parentName:"p"},"server/config.json")," file to set your desired Whisper model. For example, to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"medium")," model, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"model")," property to ",(0,a.kt)("inlineCode",{parentName:"p"},"medium"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{ "model": "medium" }\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start the Whisper Transcriber Service. From the command line, run:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"uvicorn main:app\n")),(0,a.kt)("p",{parentName:"li"},"  Once the Whisper Transcriber Service starts, you should see output similar to the following."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"[2023-06-04 18:53:46.194411] Whisper API Key: 17ce01e9-ac65-49c8-9cc9-18d8deb78197\n[2023-06-04 18:53:50.375244] Model: medium loaded.\n[2023-06-04 18:53:50.375565] Ready to transcribe audio files.\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Whisper API Key")," will be also be displayed. Save the ",(0,a.kt)("inlineCode",{parentName:"p"},"Whisper API Key")," somewhere safe, you'll need the key to configure the Whisper client."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Whisper API Key: <key>\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To stop the Whisper Transcriber Service, press ",(0,a.kt)("inlineCode",{parentName:"p"},"CTRL+C")," in the terminal.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To deactivate the Python virtual environment, run ",(0,a.kt)("inlineCode",{parentName:"p"},"deactivate"),"."))))}c.isMDXComponent=!0},6120:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/whisper_model_selection-fe215cf6a783f1f3c31a03892f7bcf8d.png"}}]);