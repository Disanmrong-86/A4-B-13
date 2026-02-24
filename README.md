1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:* getElementById (কোনো HTML element কে তার id দিয়ে select করা যায় | এটা সবসময় একটা element রিটার্ন করে, কারণ id ইউনিক হয়
)
*getElemetByClassName( কোনো HTML element কে তার class name দিয়ে select করা যায় | এটা সবসময় একটা HTMLCollection রিটার্ন করে, যেখানে ওই class এর সব element থাকে।
- তাই একাধিক element পাওয়া যায়)
  *querySelector( এটা দিয়ে তুমি id, class, tag সবকিছু select করতে পারো | এটা সবসময় প্রথম matching element রিটার্ন করে)
  *querySelectorAll(- এটা দিয়ে তুমি id, class, tag সবকিছু select করতে পারো | এটা সব matching element রিটার্ন করে (NodeList আকারে) | তাই একাধিক element পাওয়া যায়|


2. How do you create and insert a new element into the DOM?
ans:BY creteElement and innerText and InnerHtml
3. What is Event Bubbling? And how does it work?
ans:Event BUbbling holo ektah processss jar help niye target element ke find kore .first e document tah ke tree structre e create kore pore parent element theke child
 element ei vaabeh kore target element e asse then bubbling hoi mane target element theke abar return kore parent element er dike etah kei bole bubbling |

4.What is Event Delegation in JavaScript? Why is it useful?
ans: Event delegation tah very helpful jokhon kuno ektah element ke khuje ber korteh etah mulotoh parent element e use kore jeno tar under e chid gulo khub easy teh dhora jai
so its helpful ,and  code ke clean rakhe, first rakhe
