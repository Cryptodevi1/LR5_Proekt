let med = [];
med [0]= {
    name: "Спазмалгін",
    price: 30
}
med [1]= {
    name: "Цитрамон",
    price: 72
}
med [2]= {
    name: "Кодеіновмісний сироп",
    price: 300
}
med [3]= {
    name: "Парацетамол",
    price: 50
}

let selector = document.querySelector("#med");
selector.innerHTML ='';
function createSelect(sel,ar)
{
    for (let i = 0; i < ar.length;i++)
    {
        const option = document.createElement("option");
        option.value = i;
        option.text = ar[i].name;
        
        sel.add(option);
        }

}
createSelect(selector, med);

let count_meds = document.querySelector("#med_count");
function calc_price(ar, i, count)
{
    return ar[i].price * count;
}

let index_med= selector.options[selector.selectedIndex].value;
let price_meds = 0.0;
let count_med = document.querySelector("#med_count").value;
function price_med(){
    index_med = selector.options[selector.selectedIndex].value;
    count_med = document.querySelector("#med_count").value;
    price_meds = calc_price(med,index_med,count_med)
    let price_h3 = document.querySelector("#price_meds");
    price_h3.innerHTML = 'Вартість = ' + price_meds;
}
price_med();
count_meds.onclick = function(){
    price_med()
}
selector.onclick = function(){
    price_med()
}
let all_price_meds = 0.0;
let all_price = 0.0
let all_meds = document.querySelector("#all_meds");
let all_price_med = document.querySelector("#all_price_med");
all_meds.innerHTML = '';
all_price_med.innerHTML = '';
let meds = document.getElementById("calc_meds");
meds.onclick = function(){
    all_meds.innerHTML = all_meds.innerHTML + ", " +
        med[index_med].name + " " | 
        count_med;
    all_price_meds = all_price_meds + price_meds;
    all_price = all_price_meds;
    all_price_med.innerHTML = " Загальна вартість " + all_price;
}