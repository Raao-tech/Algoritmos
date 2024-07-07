


const canvas = document.getElementById("canvas");
const spaces = 10 | 0;

if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
   



    let canvas_width = canvas.width | 0;
    let canvas_heigth = canvas.height | 0;
    let Columns = {};


    




    let unity_X = canvas_width/spaces | 0;
    let unity_Y = canvas_heigth/spaces | 0;

   
    //creación del array que encierra en elementos cada cuadricula del grid
    gridAtom(canvas_width,canvas_heigth, spaces,Columns);


    //Trazado de la cuadricula/grid
    gridDraw( ctx, canvas_width,canvas_heigth, spaces);

    let xs = Columns[0][3][0];// En la CoLumna 0, en la fila 3, en su coordenada X 
    let ys =Columns[0][3][1];// En la Columna 0, en su fila 3, en su coordenada Y

    ctx.fillRect(Columns[0][0][0], Columns[0][0][1], spaces , spaces );
    ctx.fillRect( xs,ys, spaces , spaces );

    console.log(xs, ys);

    canvas.addEventListener("mousemove", function(event) {
        const rect = canvas.getBoundingClientRect(); // Get canvas position
        let X_mouse = Math.floor((event.clientX - rect.left)/10) * 10 | 0;
        let Y_mouse = Math.floor((event.clientY  - rect.top)/10) * 10 | 0;


        ctx.fillRect(X_mouse, Y_mouse, spaces, spaces);
        
        


        console.log("coordernadas del mouse X: " + X_mouse + ", Y: " + Y_mouse);
    })

 

   








    console.log("unidad en x: "+ unity_X + " y en Y: " + unity_Y);
    console.log("ancho: "+ canvas_width + " alto: " + canvas_heigth);

    
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