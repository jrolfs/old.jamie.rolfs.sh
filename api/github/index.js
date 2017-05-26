// import get from 'lodash-es/get';
import { Lokka } from 'lokka';
import Transport from 'lokka-transport-http';

// import token from '../../config/github-token.txt';

const TOKEN = 'a74b803d00495094a36df67883f102e76604129d';
const ENDPOINT = 'https://api.github.com/graphql';

const headers = { Authorization: `bearer ${TOKEN}` };
const transport = new Transport(ENDPOINT, { headers });
const client = new Lokka({ transport });

export function getRepositories() {
  return client.query(`
    {
      viewer {
        name
         repositories(last: 100, privacy: PUBLIC, isFork: false) {
           nodes {
             name
             url
           }
         }
       }
     }
  `)
    .then((result) => {
      console.log(result);

      // return get(result, 'viewer.repositories.nodes');
      return result.viewer.repositories.nodes;
    })
    .catch(error => console.log(error));
}


// export default { getRepositories };
