import React from "react"

export default function WindowTracker() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }
        console.log("Adding the Event Listener")
        window.addEventListener("resize", watchWidth)

        //Clean up when element is not mount on DOM
        return function() {
            console.log("Removing the Event Listener")
            window.removeEventListener("resize", watchWidth)
        }

    }, [])

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
