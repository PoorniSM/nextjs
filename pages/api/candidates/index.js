import { candidates } from '../../../data.js';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const httpMethod = req.method;
    const { name,company,status } = req.body;

    switch(httpMethod) {
        case 'GET':
            res.status(200).json(candidates);
            break;
        case 'POST':
            res.status(200).json({
                name: name,
                company: company,
                status: status
            });
            break;
        default:
            res.setHeader('Allow', ['GET','POST']);
            res.status(405).end(`Method ${httpMethod} is not allowed.`)

    }
    
}