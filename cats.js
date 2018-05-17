document.addEventListener('DOMContentLoaded', function() {

  var button = document.querySelector('.summon-cats');

  button.addEventListener('click', function() {

    $.ajax({
      url: "https://bitkittens.herokuapp.com/cats.json",
      method: "GET"
    }).done(function(data) {

      console.log(data);
      counter = 1
      data["cats"].forEach(function(cat) {

        var img = document.createElement('img');
        img.src = cat.photo
        img.alt = 'Photo of'+ ' ' + cat.name
        $('#cat'+counter).append(img)
        counter += 1

      })


    })

  })

});
