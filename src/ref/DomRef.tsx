/* Tutorial - 16 - useRef Hook */

import { useRef , useEffect } from "react";

export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return (
        <div>
            <input type="text" name="" ref={inputRef} />
        </div>
    )
}
