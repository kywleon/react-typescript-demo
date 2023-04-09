/* Tutorial - 5 - Advanced Props */

type OscarProps = {
    children: React.ReactNode
}

const Oscar = (props: OscarProps) => {
    return ( <div className="oscar_div">{ props.children }</div> );
}
 
export default Oscar;