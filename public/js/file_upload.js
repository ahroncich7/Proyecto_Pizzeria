function fileChange() {
  var file = document.getElementById("file_picture");
  var form = new FormData();
  form.append("image", file.files[0]);

  var settings = {
    url: "https://api.imgbb.com/1/upload?key=6297f77bcfe3af5dcd993f86bde687c4",
    method: "POST",
    timeout: 0,
    processData: false,
    mimeType: "multipart/form-data",
    contentType: false,
    data: form,
  };

  $.ajax(settings).done(function (response) {
    var info = JSON.parse(response);
    console.log(info);
    let picture = document.getElementById('picture')
    picture.value = info.data.url
    console.log(picture.value);
  });
}
