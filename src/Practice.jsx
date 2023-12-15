import { people } from './data.js';

function listPeople(array) {
    let subList = [];

    for(let i = 0; i < array.length; i++){
        subList.push( 
        <>
        <li key={array[i].id}>
            <p>
            <b>{array[i].name}:</b>
            {' ' + array[i].profession + ' '}
            known for {array[i].accomplishment}
            </p>
        </li> 
        </> );
    };

    return subList;
};

export default function List() {
  let chemists = [];
  let everybodyElse = [];
  people.map(person => {(person.profession === 'chemist') 
        ? chemists.push(person) : everybodyElse.push(person) });

    return (
        <article>
        <h1>Chemists</h1>
        <ul>{listPeople(chemists)}</ul>
        <h1>Everybody Else</h1>
        <ul>{listPeople(everybodyElse)}</ul>
        </article>
    );
}