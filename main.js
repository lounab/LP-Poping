const form = document.getElementById("form");
console.log(form);

function handleForm(event) { 
    event.preventDefault(); 
    const name = document.getElementById("input_name").value
    const prenom = document.getElementById("input_prenom").value
    const email = document.getElementById("input_email").value
    let civilite =""

    function displayRadioValue() {
        var ele = document.getElementsByName('gender');
          
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked){
                civilite = ele[i].value;
                console.log(civilite)
            }
        }
    }
    displayRadioValue()
    

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer keydhv6Hmz8Z7UxrB");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "brw=brwwHT6INJ9ksGpYp; AWSALB=AOBoyZv++4HGaV30P1PmRIaUBxobwGIFA6tEPTgCCnRGObuyfNP8UnZHF1OAxpknVPUidmw7bc+4yRKqtiyhbqdC+stjO7sBhXDgQBYVp+7Mr6XWKcNp8MvJlccJ; AWSALBCORS=AOBoyZv++4HGaV30P1PmRIaUBxobwGIFA6tEPTgCCnRGObuyfNP8UnZHF1OAxpknVPUidmw7bc+4yRKqtiyhbqdC+stjO7sBhXDgQBYVp+7Mr6XWKcNp8MvJlccJ");

    var raw = JSON.stringify({
    "records": [
        {
        "fields": {

            "Nom": name,
            "Prenom": prenom, 
            "Civilite": civilite,
            "Email": email
        }
        }
    ]
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://api.airtable.com/v0/appy4HAxlrIiMfasU/LP_poping", requestOptions)
    .then(response => response.json())
    .then(result =>{
        console.log(result.records)
        document.getElementById("input_name").value = ""
        document.getElementById("input_prenom").value = ""
        document.getElementById("input_email").value = ""
        alert("Merci pour votre inscription")
    })
    .catch(error => console.log('error', error));
} 

form.addEventListener('submit', handleForm);
