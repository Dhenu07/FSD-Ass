
        function rotateArray(arr, pos) {
            const len = arr.length;
            const e = pos % len;
            const rotatedArray = arr.slice(len - e+1).concat(arr.slice(0, len-e));
            return rotatedArray;
          }
          let v=prompt("Size");
          let b=parseInt(v);
          let arr=new Array(b);
          for(let i=0; i<b; i++){
            arr[i]=prompt("Position"+i);
          }
          let ro=parseInt(prompt("Rotation"));
          const rotatedArray = rotateArray(arr,ro);
          console.log("Original Array:", arr);
          console.log("Rotated Array:", rotatedArray);
          ;
