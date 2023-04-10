/* Tutorial - 4 - Basic Props */
/* Tutorial - 8 - Prop Types and Tips */


import { PersonProps } from './Person.types'

// type PersonProps = {
//     name:{
//         first: string,
//         last: string
//     }
// }

export const Person = (props: PersonProps) => {
    return (
        <div>
            { props.name.first } { props.name.last }
        </div>
        )
}
