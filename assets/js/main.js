// Program to generate random strings

const generateString = () => {

    const length = parseInt(document.getElementById("length").value);

    // Declare all characters
    const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;

    const charactersLength = characters.length;

    let result = "";

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    console.log(result);

    document.getElementById("h4").innerHTML = result;

}

