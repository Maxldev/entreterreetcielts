import {useRouter} from "next/router";

const Massage = () => {
    const router = useRouter()
    const { path } = router.query

    return <p>Massage: {path}</p>
}

 export default Massage