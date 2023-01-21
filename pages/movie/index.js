import { useRouter } from "next/router";

export default function Movie() {
    const router = useRouter();
    const { url } = router.query
    
    return <p>Movie:{url} </p>
}