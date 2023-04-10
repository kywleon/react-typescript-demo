/* Tutorial - 8 - Prop Types and Tips */

export type Name = {
    first: string,
    last: string,
}


export type PersonProps = {
    //Way one
    // name:{
    //     first: string,
    //     last: string
    // }

    // Way two
    name: Name
}