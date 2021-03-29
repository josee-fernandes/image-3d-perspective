'use strict'

const photos = document.querySelectorAll('.photo')

document.addEventListener('mousemove', event => {
   photos.forEach(photo => {
      const mousePositionX = photo.getBoundingClientRect().x
      const mousePositionY = photo.getBoundingClientRect().y
      const photoWidth = photo.getBoundingClientRect().width
      const photoHeight = photo.getBoundingClientRect().height
   
      if(event.x > mousePositionX && event.x < (mousePositionX + photoWidth) &&
         event.y > mousePositionY && event.y < (mousePositionY + photoHeight)){
   
            if(event.x > mousePositionX && event.x < (mousePositionX + (photoWidth / 2))){
               const xValueOnLeft = ((photoWidth / 2) - (event.x - mousePositionX)) / 10
               TweenMax.to(photo, 1, { rotationY: xValueOnLeft * -1 })
            }
   
            if(event.x > (mousePositionX + (photoWidth / 2)) && event.x < (mousePositionX + photoWidth)){
               const xValueOnRight = (event.x - mousePositionX - (photoWidth / 2)) / 10
               TweenMax.to(photo, 1, { rotationY: xValueOnRight })
            }
   
            if(event.y > mousePositionY && event.y < (mousePositionY + (photoHeight / 2))){
               const yValueOnTop = ((photoHeight / 2) - (event.y - mousePositionY)) / 10
               TweenMax.to(photo, 1, { rotationX: yValueOnTop })
            }
   
            if(event.y > (mousePositionY + (photoHeight / 2)) && event.y < (mousePositionY + photoHeight)){
               const yValueOnBottom = (event.y - mousePositionY - (photoHeight / 2)) / 10
               TweenMax.to(photo, 1, { rotationX: yValueOnBottom * -1 })
            }
   
      }else{
         TweenMax.to(photo, 2, { rotationX: 0 })
         TweenMax.to(photo, 2, { rotationY: 0 })
      }
   })
})