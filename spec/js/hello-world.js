
/* provengo-deno adaptor */
let effBp;

if ( typeof bp !== "undefined" ) {
    effBp = bp;
} else {
    effBp = {
        log: {
            info: (x)=>console.log(x)
        }
    };
}

effBp.log.info("const in loop");
let loopCount=3;
while ( loopCount-- ) {
   const i=loopCount;
   effBp.log.info(i);
}
effBp.log.info("let in loop");
loopCount=3;
while ( loopCount-- ) {
   let i1=loopCount;
   effBp.log.info(i1);
}
effBp.log.info("var in loop");
loopCount=3;
while ( loopCount-- ) {
   var i2=loopCount;
   effBp.log.info(i2);
}
effBp.log.info("let above loop");
loopCount=3;
let i3;
while ( loopCount-- ) {
   i3=loopCount;
   effBp.log.info(i3);
}