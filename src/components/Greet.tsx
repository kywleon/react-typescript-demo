/* Tutorial - 3 - Typing Props */
/* Tutorial - 4 - Basic Props */
/* Tutorial - 5 - Advanced Props */

type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {

    // run this code when the messageCount have not pass tp props 
    const { messageCount = 0 } = props

    return (
        <div>
            <h2>
                {props.isLoggedIn ? `Welcome ${props.name}! you have ${messageCount} unread messages` : `Welcome Guest`} </h2>
        </div>
    )
}
