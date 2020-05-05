
function calculateTipAmount() {

    let bill = document.getElementById("bill").value;
    let selectServ = document.getElementById("selectServ").value;
    let billShare = document.getElementById("billShare").value;

    // Check for no values
    if(bill === "" || selectServ == 0) {
        alert("Please enter a value");
        return;
    }

    if(billShare === "" || billShare <= 1) {
        billShare = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    // Tip calculation
    let total = (bill * selectServ) / billShare;


    // Displaying the tip
    document.getElementById("tipTotal").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}




// Click event for button
document.getElementById("calculateTip").onclick = function() {
    calculateTipAmount();
};