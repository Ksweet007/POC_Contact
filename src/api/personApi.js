export function getPersonById(personId) {
  return fetch("http://localhost:3001/persons?id=" + personId)
    .then(handleResponse)
    .then(users => users[0]);
}

//Centralized response handler.
function handleResponse(response) {
  if (response.ok) return response.json();
  throw new Error("Network response was not okay");
}
