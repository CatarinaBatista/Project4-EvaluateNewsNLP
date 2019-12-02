function handleSubmit(event) {
    event.preventDefault()

    const baseURL = "http://localhost:8000/sentiment";
    const url = document.getElementById('url').value;
    
    console.log(url)
}

export {handleSubmit}