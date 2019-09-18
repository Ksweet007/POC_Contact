export function getPersonById(personId) {
  return fetch("http://localhost:3001/persons?id=" + personId)
    .then(handleResponse)
    .then(users => users[0]);
}

export function editPerson(user) {
  return fetch("http://localhost:3001/persons/" + user.id, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(handleResponse);
}

//Centralized response handler.
function handleResponse(response) {
  if (response.ok) return response.json();
  throw new Error("Network response was not okay");
}
