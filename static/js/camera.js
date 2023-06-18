$(() => {
   
    const video = document.getElementById('video');
    const img   = document.createElement('canvas');
    const canvas = document.createElement('canvas');

    const imgctx = img.getContext("2d")
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
            img.setAttribute("width", width);
            img.setAttribute("height", height);
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
         
          imgctx.drawImage(video,0,0,video.width,video.height)
         
          
          //ctx.drawImage(img,0,0,img.width,img.height)
          const slices = 15
          let order = new Array()
          for(let i=0;i<slices;i++){
            order.push(i)
          }
          for(let i=0;i<slices;i++){
            const indexA = Math.floor(Math.random() * order.length);
            const aux = order[i]
            order[i] = order[indexA]
            order[indexA] = aux
          }
          
          for(let i=0;i<slices;i++){
            const w = Math.ceil(img.width/slices)
            ctx.drawImage(img,
                  w * i,0,
                  w,img.height,
                  w * (order[i]),0,
                  w,img.height)
          }
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