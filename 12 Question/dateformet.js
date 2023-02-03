let today = new Date();

// YYYY-MM-DD HH:mm
console.log(today.getFullYear() + "-" + (today.getMonth() + 1).toString().padStart(2, '0') + "-" + today.getDate().toString().padStart(2, '0') + " " + today.getHours().toString().padStart(2, '0') + ":" + today.getMinutes().toString().padStart(2, '0'));

// DD-MM-YYYY HH:mm
console.log(today.getDate().toString().padStart(2, '0') + "-" + (today.getMonth() + 1).toString().padStart(2, '0') + "-" + today.getFullYear() + " " + today.getHours().toString().padStart(2, '0') + ":" + today.getMinutes().toString().padStart(2, '0'));

// DD/MM/YYYY HH:mm
console.log(today.getDate().toString().padStart(2, '0') + "/" + (today.getMonth() + 1).toString().padStart(2, '0') + "/" + today.getFullYear() + " " + today.getHours().toString().padStart(2, '0') + ":" + today.getMinutes().toString().padStart(2, '0'));
