import { candidates } from '../../../data.js';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const httpMethod = req.method;
    const { name, company, status } = req.body;
    const candidateId = req.query.candidateId;
    const result = candidates.filter((candidate) => candidate.id === parseInt(candidateId));

    switch(httpMethod) {
        case 'GET':
            if(result.length > 0) {
                res.status(200).json(result[0]);
            } else {
                res.status(404).json({message: `Candidate with id: ${candidateId} not found`})
            }
            break;
        case 'PUT':
            res.status(200).json({
                name: name,
                company: company,
                status: status
            });
            break;
        case 'DELETE':
            res.status(200).json(result[0]);
            break;
        default:
            res.setHeader('Allow', ['GET','PUT', 'DELETE']);
            res.status(405).end(`Method ${httpMethod} is not allowed.`)
    
        

    }
    
    
}