import axios from 'axios'

export const validateForm = form=>{
  console.log(form)
}

export const sendForm = form => {
  const msg = form.querySelector('#messages')
  form.addEventListener('submit', e=> {
    e.preventDefault()
    if (validateInputs(form)) {
      sendData(form, msg)
    }else{
      msg.classList.add('error')
      msg.innerHTML = `<p>Por favor complete todos los datos</p>`
    }
  })
}

const validateInputs = form => {
  let resp = true
  const inputs = [...form.querySelectorAll('input, textarea')]
  inputs.map(input=>{
    let pattern =  input.getAttribute('pattern')
    if (pattern !==null){
      input.value.match(pattern) ? resp = true : resp = false
    }else if(input.value==='' || input.value === ' '){
      resp = false
    }
  })
  return resp
}

const sendData = (form,msg) => {
  const button = form.querySelector('button')
  button.textContent= "Enviando"
  msg.innerHTML=`<img src="img/rolling.svg" alt="">`
  const data = new FormData(form)
  const url = form.action
  const authOptions = {
    method: 'POST',
    url: url,
    data: data,
    headers: {
      'Authorization': 'Basic Y2xpZW50OnNlY3JldA==',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    json: true
  }
  axios(authOptions)
    .then(res=>showResp(res, true, form, msg))
    .catch(err=>showResp(err, false, form, msg))
}

const showResp = (resp,ok,form,msg) => {
  const data = resp.data
  const button = form.querySelector('button')
  setTimeout(()=>{
    if (ok){
      if (data.code===200){
        button.textContent = "Enviado"
        button.setAttribute('disabled','true')
        button.style.background="#ccc"
        button.style.cursor="initial"
        msg.classList.add('success')
        msg.innerHTML = `<p>${data.msg}</p>`
        // form.reset()
      }else{
        msg.classList.add('error')
        msg.innerHTML = `<p>${data.msg}</p>`
      }
    }else{
      msg.classList.add('error')
      msg.innerHTML = `<p>Por favor verifique los datos<br/>y vuelva e enviar el mensaje</p>`
    }
  },2000)
}


