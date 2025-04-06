/*this is for creating an elemnt and since its a core React thing so we use React only
    It takes 3 argument -> tag name , an object-> where we give attributes to tags , what should we write in tag (the child of the tag)*/ 
    const heading=React.createElement('h1',{id:'heading'},'Hello React');

/*
 <div id='parent'>
   <div id='child1'>
       <h1>I am an H1 tag</h1>
       <h2>I am h2 tag</h2> for sibling use an array of children
   </div>
   <div id='child2'>
       <h1>I am an H1 tag</h1>
       <h2>I am h2 tag</h2> for sibling use an array of children
   </div>
 </div>

 How to create nested tags
 const heading=React.createElement('div',{id:'parent'},
 [React.createElement('div',{id:'child1'},
 [React.createElement('h1',{},'I am an h1 tag'),React.createElement('h2',{},'I am an h2 tag')]),

 React.createElement('div',{id:'child2'},
 [React.createElement('h1',{},'I am an h1 tag'),React.createElement('h2',{},'I am an h2 tag')])])

 This looks is easier in normal html, but looks complicated in React and here JSX comes into the picture
 using JSX we can write React code in html and React.createElement is avoided
*/


/*here it is manipulation in DOM , so we use ReactDOM
    this root is the place where all react code will run*/
    const root=ReactDOM.createRoot(document.getElementById('root'))

    root.render(heading);