export const getStaticPaths = async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/users');
const data = await res.json();

const paths = data.map(candidate => {
  return{
    params: {rid: candidate.id.toString()}
  }
})
return{
  paths,
  fallback: false
}
}

export const getStaticProps = async (context) => {
  const id = context.params.rid;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();
  return{
    props: { candidate: data }
}
}
const CandidatesDetail = ({candidate}) => {
  return ( 
    <div>
      <h1>Candidates Detail</h1>
           <h2>Name: {candidate.name}</h2>
           <p>Mail ID: {candidate.email}</p>
           <p>Company: {candidate.company.name}</p>
           <p>City:{candidate.address.city}</p>
    </div>
   );
}
 
export default CandidatesDetail;