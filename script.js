function addEmployee(){

    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let dept = document.getElementById("dept").value;
    let working = Number(document.getElementById("working").value);
    let present = Number(document.getElementById("present").value);
    let leave = Number(document.getElementById("leave").value);

    if(id=="" || name=="" || dept=="" || working=="" || present=="" || leave==""){
        alert("Fill all fields");
        return;
    }

    if(present > working){
        alert("Present days cannot be greater than working days");
        return;
    }

    if(leave > working){
        alert("Leave days cannot be greater than working days");
        return;
    }

    let percentage = (present / working) * 100;
    percentage = percentage.toFixed(2);

    let status="";

    if(percentage >= 90){
        status="Excellent";
    }
    else if(percentage >=75){
        status="Good";
    }
    else if(percentage >=50){
        status="Average";
    }
    else{
        status="Poor";
    }

    let row = `
    <tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${dept}</td>
        <td>${percentage}%</td>
        <td class="${status.toLowerCase()}">${status}</td>
    </tr>
    `;

    document.getElementById("tableBody").innerHTML += row;

    document.getElementById("id").value="";
    document.getElementById("name").value="";
    document.getElementById("dept").value="";
    document.getElementById("working").value="";
    document.getElementById("present").value="";
    document.getElementById("leave").value="";
}

