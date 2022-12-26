const tree_container = document.createElement('pre')
const main_container = document.querySelector(".main-container");
const createTree = (size) => {
    for (let i = 0; i < size; i++) {
        const span_element = document.createElement("span");
        //tratar de cambiar la base por H en vez de *
        const branch = i === 0 || i === size-1 ? "*\n" : `${"*".repeat(i*2)}\n`;
        span_element.textContent = branch;
        tree_container.appendChild(span_element)
    }
    main_container.appendChild(tree_container);
};

const getRandomValue = (max, min = 1) => {
  return Math.floor(Math.random() * max) + min;
  /* Creamos esta constante para factorizar codigo, ya que se repite en createSnow */
}

const createSnow =(density) =>{
  for(let i=0;i<density;i++){
    const snow_flake = document.createElement("span");
    const random_Horizontal_position = `${getRandomValue(100)}%`;
    const random_fall_delay = `${getRandomValue(100)}s`;
    const random_fall_duration = `${getRandomValue(20,5)}s`;
    const random_flake_size = `${getRandomValue(7,1)}px`;
    const random_flake_opacity = Math.random().toFixed(2);
    snow_flake.classList.add("snow");
    snow_flake.style.opacity = random_flake_opacity;
    snow_flake.style.width = random_flake_size;
    snow_flake.style.height = random_flake_size;
    snow_flake.style.animation = `foll ${random_fall_duration} ${random_fall_delay} linear infinite`; 
    snow_flake.style.right = random_Horizontal_position;
    main_container.appendChild(snow_flake);
  }

};

createTree(12);
createSnow(200);