import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const pageNotFound = () => {
    const router = useRouter();

    useEffect (() => {
        setTimeout(() => {
            router.push('/')
        },3000)
    }, []);

    return ( 
        <div className='not-found'>
            <h1>Page not Found :( </h1>
            <h2>Go back to <Link href='/'><a>Home Page</a></Link></h2>
        </div>
     );
}
 
export default pageNotFound;