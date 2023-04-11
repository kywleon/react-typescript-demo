/* Tutorial - 22 - Wrapping HTML Elements */

type InputProps = React.ComponentProps<'input'>

export const Input = (props: InputProps) => {
    return (
        <div>
            <input {...props} />
        </div>
    )
}