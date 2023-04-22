import { useEffect, useState } from "react";


export default function Landing() {
    const [ myData, setMyData ] = useState();
    useEffect(() => {
        fetch('/api/hello')
            .then(res => res.json())
            .then(data => setMyData(data))
    });
    
    return (
        <div>{myData}</div>
    );
};
