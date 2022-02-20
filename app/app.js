const data = fetch('current-loans.json')
    .then(response => response.json())
    .then(data => {
        return data
    });

console.log(data)