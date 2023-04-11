/* Tutorial - 18 - Component Prop */

export type ProfileProps = {
    name: string
}

export const Profile = ({name}: ProfileProps) => {
    return (
        <div>Private Profile Component. Name is {name}</div>
    )

}
