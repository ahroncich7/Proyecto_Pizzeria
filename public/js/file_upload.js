function fileChange() {
  let file = document.getElementById("file_picture");
  let form = new FormData();
  let picture = document.getElementById('picture')


  form.append("image", file.files[0]);

  let settings = {
    url: "https://api.imgbb.com/1/upload?key=6297f77bcfe3af5dcd993f86bde687c4",
    method: "POST",
    timeout: 0,
    processData: false,
    mimeType: "multipart/form-data",
    contentType: false,
    data: form,
  };

  $.ajax(settings).done(function (response) {
    let info = JSON.parse(response);
    picture.value = info.data.url
    console.log(picture.value);
  });


}
