$(() => {
   
    const video = document.getElementById('video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext("2d");
    let width = 300
    let height 
    let streaming = false
    video.addEventListener(
        "canplay",
        (ev) => {
          if (!streaming) {
            height = (video.videoHeight / video.videoWidth) * width;
      
            video.setAttribute("width", width);
            video.setAttribute("height", height);
            canvas.setAttribute("width", width);
            canvas.setAttribute("height", height);
            streaming = true;
          }
        },
        false
    )

    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then((stream) => {
          video.srcObject = stream;
          video.play();
      })
      .catch((err) => {
          console.error(`An error occurred: ${err}`);
      });
      
      $('#btnShoot').on( "click",()=>{
         
          ctx.drawImage(video,0,0,video.width,video.height)
          const capturedImage = canvas.toDataURL('image/jpeg');
          $('#photo').attr('src',capturedImage)

          var formData = new FormData();
          formData.append('file', capturedImage);
          $.ajax({
            url: '/upload',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
              console.log('success!')
              console.log(response);
              // Handle success response from server
            },
            error: function(xhr, status, error) {
              console.log(error);
              // Handle error
            }
          });
        })

  })