import logo from './logo.svg';
import './App.css';

// function TemporaryName() {
//   return (
//       <div>
//           <img src={logo} className="App-logo" alt="logo" width="300px" />
//           <h1>Fun facts about React</h1>
//           <ul>
//               <li>Was first released in 2013</li>
//               <li>Was originally created by Jordan Walke</li>
//               <li>Has well over 100K stars on GitHub</li>
//               <li>Is maintained by Facebook</li>
//               <li>Powers thousands of enterprise apps, including mobile apps</li>
//           </ul>
//       </div>
//   )
// }

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
*/
function Header(){
  return(
    <header>
      <nav className="nav">
        <img src={logo} className="App-logo" alt="logo"/>
        <ul className="nav-items">
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function Body(){
  return(
    <div>
      <h1>Reasons to like React</h1>
      <ol>
        <li>React is fun</li>
        <li>React is good paid work</li>
      </ol>
    </div>
  )
}

function Footer(){
  return(
    <footer>
      <small>© 2023 Loizos Vasileiou development. All rights reserved.</small>
    </footer>
  )
}

function Page(){
  return(
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

// export default TemporaryName;
export default Page;
