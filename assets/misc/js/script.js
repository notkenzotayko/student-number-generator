document.getElementsByClassName("button").value = "Close";
const wrapper = document.querySelector('.wrapper');
lrninput = wrapper.querySelector('#lrn');
yreinput = wrapper.querySelector('#yre');
generateBtn = wrapper.querySelector(".form button");

generateBtn.addEventListener('click', () => {

    var years = 6; // 6 years term

    let lValue = lrninput.value; // 406609150145
    let yValue = yreinput.value;

    if(!lValue || !yValue) return alert("Please fill in all the fields!");

    // Create an array from the lValue and concatenate the last 4 digits
    arrl = Array.from(String(lValue), Number);
    sl = "" + arrl[8] + arrl[9] + arrl[10] + arrl[11];

    // Finds the batch number: in n years term
    arry = Array.from(String(yValue), Number);
    batch = "" + arry[2] + arry[3];
    nbatch = "" + (parseInt(batch) + years);

    // Concatenate the (Year Enrolled, Batch Year, Last 4 digits of LRN)

    let sValue = yValue + nbatch + sl;

    document.getElementById("snum").value = sValue;
    wrapper.classList.add('active');

});