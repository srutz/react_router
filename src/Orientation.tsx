import { useEffect, useState } from "react";

/** 
 * React hook to get the orientation of the device
 */
export function useOrientation() {
    const [orientation, setOrientation] = useState(window.screen.orientation.angle)
    
    useEffect(() => {
        const handleOrientationChange = () => {
            setOrientation(window.screen.orientation.angle)
        }
    
        window.addEventListener("orientationchange", handleOrientationChange);
    
        return () => {
            window.removeEventListener("orientationchange", handleOrientationChange);
        }
    }, [])
    
    return orientation
}