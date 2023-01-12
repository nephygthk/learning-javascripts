//make sure you add export behind anything you want to be imported as modules

export const PI = 3.14159


export function getCircumference(radius){
  return 2 * PI * radius;
}

export function getArea(radius){
  return  PI * radius * radius;
}
