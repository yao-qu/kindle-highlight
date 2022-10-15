import { useEffect } from "react";


function Random() {

    useEffect(() => {
        getHighlights();
    }, []);

    const getHighlights = async () => {
        const highlights = await fetch('https://yxruy9.deta.dev/highlight', {
            mode: "cors",
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await highlights.json();
        console.log(data);
    }
    return (
        <div>Random</div>
    )
}

export default Random