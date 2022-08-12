import { useEffect } from "react";
const useDocTitle = (count)=>{
    useEffect(() => {
        document.title = `Click ${count}`;
    }, [count]);
}
export default useDocTitle;