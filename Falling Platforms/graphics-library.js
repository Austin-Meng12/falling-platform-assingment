
//draw line
function line(x1,y1,x2,y2) {
    ctx.beginPath();
    ctx.moveTo(x1,y1) //endpoint 1
    ctx.lineTo(x2,y2) //enpoint 2
    ctx.stroke();
}

//draw rectangle
function rect(x,y,w,h,mode){
    if (mode ==="fill") {
        ctx.fillRect(x,y,w,h);
    } else if (mode ==='stroke') {
        ctx.strokeRect(x,y,w,h);
    
    }
    }

// draw circle with center(x,y) and radius r
function circle(x,y,r,mode ) {
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI)
    if (mode === "fill") {
        ctx.fill();

    }else if(mode === "stroke")
        ctx.stroke()
}

function triangle(x1,y1,x2,y2,x3,y3,mode) {
    ctx.beginPath();
    ctx.moveTo(x1,y1) //vertex 1
    ctx.lineTo(x2,y2) //vertex 2
    ctx.lineTo(x3,y3)  //vertex 3
    if (mode === "fill") {
        ctx.fill()

    } else if (mode === "stroke") {
        ctx.closePath();
        ctx.stroke();
    }
    ctx.stroke();
}

function font(fontSetting) {
    ctx.font =  fontSetting;
}
function text(message,x,y,mode) {
    if (mode ==="fill") {
            ctx.fillText(message,x,y);
    } else if (mode ==="stroke") {
        ctx.strokeText(message, x, y)
    }
}
function stroke(color) {
    ctx.strokeStyle = color;

}
function fill(color) {
    ctx.fillStyle = color ; 

}
function linewidth(width) {
    ctx.linewidth = width

}
function ellipse(x,y,xRadius, yRadius, rotation, mode,) {
    ctx.ellipse(x, y, xRadius, yRadius, rotation, 0, 2*Math.PI)
    if (mode ==="fill") {
        ctx.fill();
    } else if (mode ==="stroke") {
        ctx.stroke();
    }
}