//html element
const $contactForm = document.querySelector('#contact-form')
const $contactBtn = $contactForm.querySelector('#contact-btn')

const getContact =() => {
  // This function retrieves form summary data from the contact form
  $contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData($contactForm);
    const data= Object.fromEntries(formData.entries())
    console.log('Form Data:', formData)
    console.log("Data", data)
    const dataJson = JSON.stringify(data);
    console.log('Json Data:', dataJson)
  })
}

export default getContact;