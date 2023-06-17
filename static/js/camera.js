$(() => {
   
    const video = document.getElementById('video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext("2d");
    let width = 300
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
            console.log(canvas.width)
            ctx.drawImage(video,0,0,video.width,video.height)
            $('#photo').attr('src',canvas.toDataURL('image/png'))   
    })

  })