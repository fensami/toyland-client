import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} -Toyland`

    },[title])
}

export default useTitle;