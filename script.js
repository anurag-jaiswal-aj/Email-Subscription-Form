const scriptURL = 'https://script.google.com/macros/s/AKfycbyTKx6xu8wpmFXjgWLQMOBdM7LI8TFw-KC45PYlHNSAj3UDSeD1MjBgCerA4u5yi7w8/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank You For Subscribing!!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })