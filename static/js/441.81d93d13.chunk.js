"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[441],{441:(e,s,a)=>{a.r(s),a.d(s,{default:()=>h});var t=a(43),l=a(3),r=a(858),d=a(298),i=a(579);const o=()=>{const{register:e,handleSubmit:s,setValue:a,formState:{errors:o}}=(0,r.mN)(),c=(0,l.wA)(),{currData:n}=(0,l.d4)((e=>e.formSlice));(0,t.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("formData"));var s,t,l;e&&e.currData&&(a("name",(null===e||void 0===e||null===(s=e.currData)||void 0===s?void 0:s.name)||""),a("email",(null===e||void 0===e||null===(t=e.currData)||void 0===t?void 0:t.email)||""),a("phone",(null===e||void 0===e||null===(l=e.currData)||void 0===l?void 0:l.phone)||""))}),[a]);return(0,i.jsxs)("div",{className:"max-w-lg mx-auto mt-10 bg-blue-900 text-white p-6 rounded-lg shadow-md",children:[(0,i.jsx)("h2",{className:"text-2xl font-semibold mb-6",children:"Step 1: Personal Information"}),(0,i.jsxs)("form",{onSubmit:s((e=>{c((0,d.pb)(e)),c((0,d.N4)(2))})),className:"space-y-4",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"name",className:"block mb-1",children:"Name"}),(0,i.jsx)("input",{type:"text",id:"name",...e("name",{required:"Name is required",minLength:{value:2,message:"Name should be at least 2 characters"}}),defaultValue:n.name||"",className:"border border-gray-600 bg-gray-800 text-black p-2 rounded w-full focus:outline-none focus:border-blue-500 ".concat(o.name?"border-red-500":"")}),o.name&&(0,i.jsx)("p",{className:"text-red-500 text-sm mt-1",children:o.name.message})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"email",className:"block mb-1",children:"Email"}),(0,i.jsx)("input",{type:"email",id:"email",...e("email",{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}}),defaultValue:n.email||"",className:"border border-gray-600 bg-gray-800 text-black p-2 rounded w-full focus:outline-none focus:border-blue-500 ".concat(o.email?"border-red-500":"")}),o.email&&(0,i.jsx)("p",{className:"text-red-500 text-sm mt-1",children:o.email.message})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"phone",className:"block mb-1",children:"Phone"}),(0,i.jsx)("input",{type:"text",id:"phone",...e("phone",{required:"Phone number is required",pattern:{value:/^[0-9]{10}$/,message:"Invalid phone number (should be 10 digits)"}}),defaultValue:n.phone||"",className:"border border-gray-600 bg-gray-800 text-black p-2 rounded w-full focus:outline-none focus:border-blue-500 ".concat(o.phone?"border-red-500":"")}),o.phone&&(0,i.jsx)("p",{className:"text-red-500 text-sm mt-1",children:o.phone.message})]}),(0,i.jsx)("div",{className:"text-center",children:(0,i.jsx)("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300",children:"Next"})})]})]})},c=()=>{const{register:e,handleSubmit:s,setValue:a,formState:{errors:o}}=(0,r.mN)(),c=(0,l.wA)(),{currData:n}=(0,l.d4)((e=>e.formSlice));(0,t.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("formData"));console.log(e.currData),e&&e.currData&&(a("address1",e.currData.address1||""),a("address2",e.currData.address2||""),a("city",e.currData.city||""),a("state",e.currData.state||""),a("zipCode",e.currData.zipCode||""))}),[]);return(0,i.jsxs)("div",{className:"max-w-lg mx-auto mt-10 bg-blue-900 text-white p-6 rounded-lg shadow-md",children:[(0,i.jsx)("h2",{className:"text-2xl font-semibold mb-6",children:"Step 2: Address Information"}),(0,i.jsxs)("form",{onSubmit:s((e=>{c((0,d.pb)(e)),c((0,d.N4)(3))})),className:"space-y-4",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"address1",className:"block mb-1",children:"Address Line 1"}),(0,i.jsx)("input",{type:"text",id:"address1",...e("address1",{required:"Address Line 1 is required"}),defaultValue:n.address1||"",className:"border border-gray-600 bg-gray-800 text-black p-2 rounded w-full focus:outline-none focus:border-blue-500 ".concat(o.address1?"border-red-500":"")}),o.address1&&(0,i.jsx)("p",{className:"text-red-500 text-sm mt-1",children:o.address1.message})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"address2",className:"block mb-1",children:"Address Line 2"}),(0,i.jsx)("input",{type:"text",id:"address2",...e("address2"),defaultValue:n.address2||"",className:"border border-gray-600 bg-gray-800 text-black p-2 rounded w-full focus:outline-none focus:border-blue-500"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"city",className:"block mb-1",children:"City"}),(0,i.jsx)("input",{type:"text",id:"city",...e("city",{required:"City is required"}),defaultValue:n.city||"",className:"border border-gray-600 bg-gray-800 text-black p-2 rounded w-full focus:outline-none focus:border-blue-500 ".concat(o.city?"border-red-500":"")}),o.city&&(0,i.jsx)("p",{className:"text-red-500 text-sm mt-1",children:o.city.message})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"state",className:"block mb-1",children:"State"}),(0,i.jsx)("input",{type:"text",id:"state",...e("state",{required:"State is required"}),defaultValue:n.state||"",className:"border border-gray-600 bg-gray-800 text-black p-2 rounded w-full focus:outline-none focus:border-blue-500 ".concat(o.state?"border-red-500":"")}),o.state&&(0,i.jsx)("p",{className:"text-red-500 text-sm mt-1",children:o.state.message})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"zipCode",className:"block mb-1",children:"Zip Code"}),(0,i.jsx)("input",{type:"text",id:"zipCode",...e("zipCode",{required:"Zip Code is required",pattern:{value:/^[0-9]{4,9}$/,message:"Zip Code must be between 4 and 9 digits"},validate:e=>e.length>=4&&e.length<=9||"Zip Code must be between 4 and 9 digits"}),defaultValue:n.zipCode||"",className:"border border-gray-600 bg-gray-800 text-black p-2 rounded w-full focus:outline-none focus:border-blue-500 ".concat(o.zipCode?"border-red-500":"")}),o.zipCode&&(0,i.jsx)("p",{className:"text-red-500 text-sm mt-1",children:o.zipCode.message})]}),(0,i.jsx)("div",{className:"text-center"}),(0,i.jsxs)("div",{className:"flex flex-row justify-between mt-6",children:[(0,i.jsx)("button",{onClick:()=>c((0,d.N4)(1)),className:"bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300",children:"Previous"}),(0,i.jsx)("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300",children:"Next"})]})]})]})};var n=a(339),m=a(216);const u=()=>{const{currData:e}=(0,l.d4)((e=>e.formSlice)),s=(0,l.wA)(),a=(0,m.Zp)();return(0,i.jsx)("div",{className:"max-w-md mx-auto mt-10 bg-white rounded-lg shadow-lg overflow-hidden",children:(0,i.jsxs)("div",{className:"px-6 py-4",children:[(0,i.jsx)("div",{className:"font-bold text-xl mb-2",children:"Final Review Data"}),(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,i.jsxs)("div",{className:"bg-blue-900 text-white p-4 rounded-lg shadow-md",children:[(0,i.jsx)("h2",{className:"text-lg font-semibold mb-2",children:"Name:"}),(0,i.jsx)("p",{className:"text-base",children:e.name})]}),(0,i.jsxs)("div",{className:"bg-blue-900 text-white p-4 rounded-lg shadow-md",children:[(0,i.jsx)("h2",{className:"text-lg font-semibold mb-2",children:"Email:"}),(0,i.jsx)("p",{className:"text-base",children:e.email})]}),(0,i.jsxs)("div",{className:"bg-blue-900 text-white p-4 rounded-lg shadow-md",children:[(0,i.jsx)("h2",{className:"text-lg font-semibold mb-2",children:"Phone:"}),(0,i.jsx)("p",{className:"text-base",children:e.phone})]}),(0,i.jsxs)("div",{className:"bg-blue-900 text-white p-4 rounded-lg shadow-md",children:[(0,i.jsx)("h2",{className:"text-lg font-semibold mb-2",children:"Address Line 1:"}),(0,i.jsx)("p",{className:"text-base",children:e.address1})]}),(0,i.jsxs)("div",{className:"bg-blue-900 text-white p-4 rounded-lg shadow-md",children:[(0,i.jsx)("h2",{className:"text-lg font-semibold mb-2",children:"Address Line 2:"}),(0,i.jsx)("p",{className:"text-base",children:e.address2})]}),(0,i.jsxs)("div",{className:"bg-blue-900 text-white p-4 rounded-lg shadow-md",children:[(0,i.jsx)("h2",{className:"text-lg font-semibold mb-2",children:"City:"}),(0,i.jsx)("p",{className:"text-base",children:e.city})]}),(0,i.jsxs)("div",{className:"bg-blue-900 text-white p-4 rounded-lg shadow-md",children:[(0,i.jsx)("h2",{className:"text-lg font-semibold mb-2",children:"State:"}),(0,i.jsx)("p",{className:"text-base",children:e.state})]}),(0,i.jsxs)("div",{className:"bg-blue-900 text-white p-4 rounded-lg shadow-md",children:[(0,i.jsx)("h2",{className:"text-lg font-semibold mb-2",children:"Zip Code:"}),(0,i.jsx)("p",{className:"text-base",children:e.zipCode})]})]}),(0,i.jsxs)("div",{className:"flex flex-row justify-between mt-6",children:[(0,i.jsx)("button",{onClick:()=>{s((0,d.N4)(1))},className:"bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300",children:"Edit"}),(0,i.jsx)("button",{onClick:()=>{n.Ay.success("Data SUBMITTED SUCCESS"),a("/dataSubmitSuccess")},className:"bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300",children:"SUBMIT DATA"})]})]})})};var b=a(204);const x=()=>{const{currStep:e}=(0,l.d4)((e=>e.formSlice)),s=[{id:1},{id:2},{id:3}];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"relative mb-2 flex w-full justify-center",children:s.map(((a,l)=>(0,i.jsxs)(t.Fragment,{children:[(0,i.jsx)("div",{className:"flex flex-col items-center ",children:(0,i.jsx)("button",{className:"grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ".concat(e===a.id?"border-yellow-50 bg-yellow-900 text-yellow-50":"border-richblack-700 bg-richblack-800 text-richblack-300"," ").concat(e>a.id&&"bg-yellow-50 text-yellow-50","} "),children:e>a.id?(0,i.jsx)(b.CMH,{className:"font-bold text-richblack-900"}):a.id})}),a.id!==s.length&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"h-[calc(34px/2)] w-[33%]  border-dashed border-b-2 ".concat(e>a.id?"border-yellow-50":"border-richblack-500"," ")})})]},a.id)))}),1===e&&(0,i.jsx)(o,{}),2===e&&(0,i.jsx)(c,{}),3===e&&(0,i.jsx)(u,{})]})},h=()=>(0,i.jsx)("div",{className:"mt-[200px] mb-[200px]",children:(0,i.jsx)(x,{})})}}]);
//# sourceMappingURL=441.81d93d13.chunk.js.map