import { useEffect, useState } from "react";

export default function Landing() {
    const [ myData, setMyData ] = useState<string>();
    useEffect(() => {
        if (!myData) {
            console.log('hitting server');
            fetch('/api/hello')
                .then(res => res.json())
                .then(data => setMyData(data.name))
        }
    })
    
    return (
        <div>{myData}</div>
    );
};
