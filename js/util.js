import {InsertPosition} from "./constants/InsertPosition.js";

export function createElement(template){
    const element = document.createElement('div');
    element.innerHTML = template;
    return  element.firstElementChild ;
}
console.log("test")
export function renderElement(container,element,insertPosition= InsertPosition.BEFOREBEGIN, referenceElement=undefined) {
 switch (insertPosition){

     case(InsertPosition.BEFOREEND):
         container.append(element)
         break;

     case(InsertPosition.AFTERBEGIN):
         container.prepend(element)
         break;
     case(InsertPosition.BEFOREBEGIN):
         container.insertBefore(element,referenceElement)
         break;

 }

}