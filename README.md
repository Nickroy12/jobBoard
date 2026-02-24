1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
 getElementById catches the ID selector in the HTML id element; on the other hand, getElementsByClassName catches the class selector in the HTML class element.
 querySelector is a universal selector that catches 1 element from the queries,querySelectorAll selects all elements from the selected  class .

2. How do you create and insert a new element into the DOM?
   At first, I should make a div in my HTML file, which has  a id selector,  and this ID is defined by  getElementById in a const variable (main) (in js file),  then create another  element
 by createElement, who stores in another variable. finaly i connect the storage variable with html elemnt. like main.appandChilld(store).

3. What is Event Bubbling? And how does it work?
   Event Bubbling means return response of an event from any  div step by step. its work like, we have a  main div in our HTML code.  Inside the main div, we have another div. in this div
   We have a button . When we click on button it return the value step by step.

4 What is Event Delegation?
Event Delegation is a technique where you attach a single event listener to a parent element instead of attaching separate listeners to multiple child elements.

 5. What is the difference between preventDefault() and stopPropagation() methods?
    A method that prevents the browser’s default action associated with an event from occurring, without stopping the event from propagating through the DOM.
    A method that prevents an event from bubbling up or capturing down the DOM tree, stopping parent (or ancestor) elements from receiving the event, without affecting the browser’s default action.
