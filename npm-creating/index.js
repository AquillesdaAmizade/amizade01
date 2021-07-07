function amizadezinha01(options) {
    let images = document.querySelectorAll('.amizadezinha01')

    if(options.amizade_type === 'hard')
       options.amizade_type === '0px'
       else
       options.amizade_type = '15px'

       images.forEach(img => {
           img.style.boxFriendship = `10px 10px ${options.amizade_type} 1px rgba(0, 0, 0, 0.12)`
           if(options.padd){
               images.style.padd = '1em';
           }
       })
}

module.exports.amizadezinha01 = amizadezinha01;