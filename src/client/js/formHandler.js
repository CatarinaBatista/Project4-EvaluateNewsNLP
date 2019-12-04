import { validateUrl } from "./validateUrl";

function handleSubmit(event) {
    event.preventDefault()

    const baseURL = "http://localhost:8000/sentiment";
    const url = document.getElementById('url').value;

    if (validateUrl(url)) {
        fetch(baseURL, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({url: url})
        })
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('polarity').innerHTML = res.polarity
                document.getElementById('subjectivity').innerHTML = res.subjectivity
                document.getElementById('polarity_confidence-conf').innerHTML = res.polarity_confidence
                document.getElementById('subjectivity-conf').innerHTML = res.subjectivity_confidence
            })
    } else {
        alert("The URL is not valid. Please check your URL")

    }
    console.log(url)
}

export {handleSubmit}

/* function aa(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8000/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { aa } */
