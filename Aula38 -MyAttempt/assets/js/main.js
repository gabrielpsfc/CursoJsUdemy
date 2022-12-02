
const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor
console.log(backgroundColorBody)

paragrafos.setAttribute('style',"background-color:rgb(13, 106, 134) ; color:aliceblue")
/**
 * newField.setAttribute('type','text');
    newField.setAttribute('name','survey_options[]')
    newField.setAttribute('class','survey_options')
    newField.setAttribute('size', 50)
    newField.setAttribute('placeholder', 'Another Field')
 */