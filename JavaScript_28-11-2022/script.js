const body = document.querySelector("body");
const input = document.querySelector("input");

body.addEventListener("click", e => {
    let element = e.target;

    if (element.className = "ordenar"){
        let text = []
        let input_text = input.value.split(" ");

        text = input_text.sort(function compare(a, b){
            if ((a.length >= b.length)){
                return -1;
            } else {
                return 0;
            };
        });

        console.log(text);
    }

})