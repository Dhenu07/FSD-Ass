
        const a=parseInt(prompt("size"));
        const b=new Array(a);
        let g;
        for(let i=0;i<a;i++){
            b[i]=parseInt(prompt("Positon"+i));
        }
        for(let i=0;i<a;i++){
            if(b[i]%2==0){
                console.log(b[i]);
            }
        }

