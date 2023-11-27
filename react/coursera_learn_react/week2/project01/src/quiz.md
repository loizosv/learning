1. What do props help us accomplish?
When creating a component in React we usually want to pass through some properties into that component, in order to dynamically use the same component with different values. 
This approach makes the React Components reusable!


2. How do you pass a prop into a component?
When calling a component in the App jsx we use the following format <Card />.  
In order to pass some properties into that component we use the following format
<Card
    name="Joe Hills"
    age="50"
/>
To receive the properties in the component itself we have to pass an Object parameter to that function:
export default function Card(props)
and to use the props use the following format
<h1>{props.name}</h1>
<h2>{props.age}</h2>


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
blahblahblah is not a DOM attribute so it will cause an error! Although is possible to create custom HTML attributes is not recommended!


4. How do I receive props in a component?
function Navbar() {
    return (
        <header>
            ...
        </header>
    )
}
We have to pass an Object parameter in the function like below:
function Navbar(props) {
    ...
}


5. What data type is `props` when the component receives it?
a JavaScript Object