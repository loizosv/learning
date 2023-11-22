Quiz!

1. What is a React component?
A react Component is a JavaScript function that's returning a JFX Object (aka. React Elements). Additionally there is some difference of the vanilla JS function which is using CamelCase format including the first letter being capital as well (Pascal Case)


2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
The function name should be MyComponent

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```
The 1st parameter of the render method should be <Header /> and not Header()
