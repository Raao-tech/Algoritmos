


const canvas = document.getElementById("canvas");
const spaces = 10 | 0;

if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
   



    let canvas_width = canvas.width | 0;
    let canvas_heigth = canvas.height | 0;
    let Columns = {};


    





   
    //creación del array que encierra en elementos cada cuadricula del grid
    gridAtom(canvas_width,canvas_heigth, spaces,Columns);


    //Trazado de la cuadricula/grid
    gridDraw( ctx, canvas_width,canvas_heigth, spaces);

    let xs = Columns[0][3][0];// En la CoLumna 0, en la fila 3, en su coordenada X 
    let ys =Columns[0][3][1];// En la Columna 0, en su fila 3, en su coordenada Y

    console.log(xs, ys);

    let time = 0;
    let Colms  = 0;
   

    while (Colms<=canvas_width/spaces ) {

        setTimeout(drawSquared, 50 * time, Colms);
        
        
       
             time += 1;
             Colms +=1; 
             console.log(time * 50);

       

    } 

    

        
        
        function drawSquared(s) {
            ctx.fillRect(Columns[s][0][0],Columns[s][0][1],spaces,spaces);
            ctx.fillRect(Columns[s][19][0],Columns[s][19][1],spaces,spaces);

            ctx.fillRect(Columns[29][s][0],Columns[29][s][1],spaces,spaces);
           
            ctx.fillRect(Columns[0][s][0],Columns[0][s][1],spaces,spaces);
            console.log("han pasado 5 segundos");
        }
    
        
            
            
           
     
       

     
   

        canvas.addEventListener("mousemove", function(event) {
            const rect = canvas.getBoundingClientRect(); // Get canvas position
            let X_mouse = Math.floor((event.clientX - rect.left)/10) * 10 | 0;
            let Y_mouse = Math.floor((event.clientY  - rect.top)/10) * 10 | 0;


            ctx.fillRect(X_mouse, Y_mouse, spaces, spaces);
            
            


            console.log("coordernadas del mouse X: " + X_mouse + ", Y: " + Y_mouse);
        })

       
    

    








       

       
}

/*
    @ ctx es el contexto 2D de canvas
    @ width es el ancho del canvas
    @ heigth es el alto del canvas
    @ spaces dimensiones de los cuadrados de la cuadricula
*/ 
function gridDraw(ctx, width,heigth, spaces) {
   
    ctx.beginPath();

    //lineas verticales de la cuadricula/grid
    for (let index = 0; index <= heigth ; index = index + spaces  ){
        
        console.log("este es el primer index del grid en el for vertical: " + index);
       
        ctx.moveTo(0, index);
        ctx.lineTo(width,index);

        console.log(index);
        
        
    }
    //lineas horizontales de la cuadricula/grid
    for (let index = 0; index <= width ; index = index + spaces) {
        
        
        
        ctx.moveTo(index, 0);
        ctx.lineTo(index,heigth);

        console.log(index);
        
        
    }

    
    
    ctx.closePath();
    ctx.stroke();
    
    
    
    
    
}
/*
    @ width es el ancho del canvas
    @ heigth es el alto del canvas
    @ spaces dimensiones de los cuadrados de la cuadricula
    @ Columns es el array que poseera todos lo elementos organizados de la cuadricula
*/ 
function gridAtom(width, heigth, spaces,Columns) {

    let ColumnsFull = width/spaces + 1 | 0; //20 columnas
    let RowsFull = heigth / spaces + 1| 0;//30 filas

    for (let C = 0; C <= ColumnsFull; C ++) {
       
        Columns[C] = [];
        for (let R = 0; R <= RowsFull; R++) {

           Columns[C].push([C * spaces,R * spaces]);
            
        }  
    }

    return Columns;
    
}