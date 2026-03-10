function showToast(text, type="success"){

let icon = "✔";
let bg = "#111";

if(type === "success"){
icon = "✔";
bg = "#7a0000";
}

if(type === "cart"){
icon = "🛒";
bg = "#7a0000";
}

if(type === "remove"){
icon = "🗑";
bg = "#3a0000";
}

if(type === "error"){
icon = "⚠";
bg = "#3a0000";
}

Toastify({
text: icon + "  " + text,
duration: 3000,
gravity: "top",
position: "right",
stopOnFocus: true,
style: {
background: bg,
color: "white",
borderRadius: "8px",
padding: "14px 20px",
fontFamily: "Cinzel",
boxShadow:"0 10px 25px rgba(0,0,0,0.5)"
},
offset: {
x: 20,
y: 20
}
}).showToast();

}