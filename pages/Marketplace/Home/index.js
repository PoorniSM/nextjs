import styles from '../../../styles/MarketplaceHome.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return{
        props: { candidates: data }
    }
}

const Home = ({candidates}) => {
    return(
<div> 
    <h1>All Candidates</h1>
    {candidates.map((candidate) => (
        <Link href={'/Marketplace/Home/'+ candidate.id} key={candidate.id} className={styles.single}>
            <a><h3>{candidate.name}</h3></a>
        </Link>
    ))}
</div>
    )
}

export default Home;