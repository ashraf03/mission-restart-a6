1) What is the difference between null and undefined?
null হলো যার মধ্যে মান নাই  আর undefined হলো মান assign করা হয়নি

2) What is the use of the map() function in JavaScript? How is it different from forEach()?
map()
নতুন array return করে
মূল array change হয় না
forEach()
কোন কিছু return করে না
মূল array এ কাজ করতে ব্যবহার হয়
different :
map() → নতুন array বানায়
forEach() → শুধু loop করে কাজ করে
3) What is the difference between == and ===?
== শুধু value compare করে, === type ignore করে
value এবং type দুইই compare করে
4) What is the significance of async/await in fetching API data?
API fetch সাধারণত asynchronous operation
মানে: data আসতে সময় লাগতে পারে, program block হবে না
async/await ব্যবহার করলে সহজে লিখতে পারি, sync এর মতো মনে হয়
5) Explain the concept of Scope in JavaScript (Global, Function, Block).
Global Scope
যে variable globally declare করা হয়, সব জায়গা থেকে access করা যায়
Function Scope
Function এর ভিতরে declare করা variable বাইরে access করা যায় না। 
{ } এর ভিতরে declare করা variable, শুধু ওই block এর ভিতরে accessable
