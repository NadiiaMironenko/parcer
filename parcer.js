// ожидаем загрузку всех дом узлов
window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    let textNodes = [];

    function recursy (element){
        element.childNodes.forEach(node => {
            if (node.nodeName.match(/^H\d/)) {
                const obj = {
                    header: node.nodeName,
                    content:node.textContent
                }
                textNodes.push(obj)
            } else {
                recursy(node);
            }
        })
    } recursy(body);
    console.log(textNodes);
})


//  const body = document.querySelector("body");
// //рекурсия
//  function recursy(element) {
// //обращение к дочерним узлам
//    element.childNodes.forEach((node) => {
//      console.log(node);
//      if (element.childNodes.length > 1) {
//        recursy(node);
//      }
//    });
//  }
//  recursy(body);