function myMethode(){
alert("loaded");
  var stepper1 = null
  var stepper2 = null
  var stepper3 = null
  var stepper4 = null

  document.addEventListener('DOMContentLoaded', function () {
    stepper1 = new Stepper(document.querySelector('#stepper1'))
    stepper2 = new Stepper(document.querySelector('#stepper2'), {
      linear: false
    })
    stepper3 = new Stepper(document.querySelector('#stepper3'), {
      linear: false,
      animation: true
    })
    stepper4 = new Stepper(document.querySelector('#stepper4'))
  })
}²
