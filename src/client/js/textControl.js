function cutString(str, len) {
 if (str.length * 2 <= len) {
   return str
 }

 let strlen = 0

 let s = ''

 for (let i = 0; i < str.length; i++) {
   s = s + str.charAt(i)

   if (str.charCodeAt(i) > 128) {
     strlen = strlen + 2

     if (strlen >= len) {
       return s.substring(0, s.length - 1) + '...'
     }
   } else {
     strlen = strlen + 1

     if (strlen >= len) {
       return s.substring(0, s.length - 2) + '...'
     }
   }
 }

 return s
}

export { cutString }