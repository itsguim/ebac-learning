$(document).ready(function () {
  const INPUT_PHONE = $('#phone-id')
  const INPUT_CEP = $('#cep-id')
  const INPUT_CPF = $('#cpf-id')

  INPUT_PHONE.mask('(00) 00000-0000')
  INPUT_CPF.mask('000.000.000-00')
  INPUT_CEP.mask('00000-000')

  $('.gallery').slick({
    centerMode: true,
    dots: true,
    centerPadding: '120px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
})
